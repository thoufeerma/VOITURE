/**
 * VOITURE - High Performance Frame Loader & Cache
 *
 * Implements progressive loading, asynchronous decoding (img.decode()),
 * dynamic proximity preloading around the current scroll position,
 * and flash-free fallback to the nearest decoded frame.
 */

import { FRAME_COUNT, getFrameUrl, clampFrameIndex } from './frameManifest';

export type LoadProgressCallback = (loadedCount: number, totalCount: number) => void;

export class FrameLoader {
  private cache = new Map<number, HTMLImageElement>();
  private inFlight = new Map<number, Promise<HTMLImageElement>>();
  private loadedIndices = new Set<number>();
  private progressListeners = new Set<LoadProgressCallback>();
  private isDestroyed = false;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Empty constructor - initialized explicitly
  }

  /**
   * Subscribe to frame loading progress updates
   */
  public onProgress(callback: LoadProgressCallback): () => void {
    this.progressListeners.add(callback);
    callback(this.loadedIndices.size, FRAME_COUNT);
    return () => {
      this.progressListeners.delete(callback);
    };
  }

  private notifyProgress(): void {
    const loaded = this.loadedIndices.size;
    this.progressListeners.forEach((listener) => listener(loaded, FRAME_COUNT));
  }

  /**
   * Loads and decodes a specific frame index asynchronously
   */
  public async loadFrame(index: number): Promise<HTMLImageElement> {
    const safeIndex = clampFrameIndex(index);

    if (this.cache.has(safeIndex)) {
      return this.cache.get(safeIndex)!;
    }

    if (this.inFlight.has(safeIndex)) {
      return this.inFlight.get(safeIndex)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = getFrameUrl(safeIndex);

      const handleReady = async () => {
        if (this.isDestroyed) {
          resolve(img);
          return;
        }

        try {
          if (typeof img.decode === 'function') {
            await img.decode();
          }
        } catch {
          // Some browsers or older formats may reject decode(), but img is still drawable
        }

        if (!this.isDestroyed) {
          this.cache.set(safeIndex, img);
          this.loadedIndices.add(safeIndex);
          this.inFlight.delete(safeIndex);
          this.notifyProgress();
        }
        resolve(img);
      };

      if (img.complete && img.naturalWidth > 0) {
        handleReady();
      } else {
        img.onload = () => handleReady();
        img.onerror = (err) => {
          this.inFlight.delete(safeIndex);
          reject(new Error(`Failed to load frame at index ${safeIndex}: ${err}`));
        };
      }
    });

    this.inFlight.set(safeIndex, promise);
    return promise;
  }

  /**
   * Synchronously returns the loaded frame if already cached and ready
   */
  public getLoadedFrame(index: number): HTMLImageElement | null {
    const safeIndex = clampFrameIndex(index);
    return this.cache.get(safeIndex) ?? null;
  }

  /**
   * Returns the nearest already-loaded frame to avoid any black screen / flashes
   */
  public getNearestLoadedFrame(targetIndex: number): HTMLImageElement | null {
    const safeTarget = clampFrameIndex(targetIndex);

    // Exact match
    if (this.cache.has(safeTarget)) {
      return this.cache.get(safeTarget)!;
    }

    // Search outwards for nearest loaded frame
    for (let distance = 1; distance < FRAME_COUNT; distance++) {
      const forward = safeTarget + distance;
      if (forward < FRAME_COUNT && this.cache.has(forward)) {
        return this.cache.get(forward)!;
      }
      const backward = safeTarget - distance;
      if (backward >= 0 && this.cache.has(backward)) {
        return this.cache.get(backward)!;
      }
    }

    return null;
  }

  /**
   * Preload an initial priority batch (opening exterior frames)
   */
  public preloadInitialBatch(count: number = 12): void {
    const limit = Math.min(count, FRAME_COUNT);
    for (let i = 0; i < limit; i++) {
      this.loadFrame(i).catch(() => {});
    }
  }

  /**
   * Preload a window of frames around the current scroll position
   */
  public preloadWindow(currentIndex: number, forwardCount: number = 10, backwardCount: number = 4): void {
    if (this.isDestroyed) return;
    const center = clampFrameIndex(currentIndex);

    // Preload forward frames first (direction of user scroll)
    for (let i = 1; i <= forwardCount; i++) {
      const idx = center + i;
      if (idx < FRAME_COUNT && !this.cache.has(idx) && !this.inFlight.has(idx)) {
        this.loadFrame(idx).catch(() => {});
      }
    }

    // Preload backward frames for smooth reversal
    for (let i = 1; i <= backwardCount; i++) {
      const idx = center - i;
      if (idx >= 0 && !this.cache.has(idx) && !this.inFlight.has(idx)) {
        this.loadFrame(idx).catch(() => {});
      }
    }
  }

  /**
   * Progressively loads all remaining frames during browser idle periods
   */
  public startIdlePreload(): void {
    if (this.isDestroyed) return;

    let nextIndex = 0;
    const loadNextChunk = () => {
      if (this.isDestroyed) return;

      let scheduled = 0;
      while (nextIndex < FRAME_COUNT && scheduled < 3) {
        if (!this.cache.has(nextIndex) && !this.inFlight.has(nextIndex)) {
          this.loadFrame(nextIndex).catch(() => {});
          scheduled++;
        }
        nextIndex++;
      }

      if (nextIndex < FRAME_COUNT) {
        if (typeof window !== 'undefined' && 'requestIdleCallback' in (window as unknown as Record<string, unknown>)) {
          (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number })
            .requestIdleCallback(loadNextChunk, { timeout: 1500 });
        } else if (typeof setTimeout !== 'undefined') {
          this.idleTimer = setTimeout(loadNextChunk, 80);
        }
      }
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in (window as unknown as Record<string, unknown>)) {
      (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number })
        .requestIdleCallback(loadNextChunk, { timeout: 1500 });
    } else if (typeof setTimeout !== 'undefined') {
      this.idleTimer = setTimeout(loadNextChunk, 150);
    }
  }

  /**
   * Check how many frames have been loaded
   */
  public getLoadedCount(): number {
    return this.loadedIndices.size;
  }

  /**
   * Clean up all references and timers
   */
  public destroy(): void {
    this.isDestroyed = true;
    if (this.idleTimer !== null) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    this.progressListeners.clear();
    this.inFlight.clear();
    this.cache.clear();
    this.loadedIndices.clear();
  }
}
