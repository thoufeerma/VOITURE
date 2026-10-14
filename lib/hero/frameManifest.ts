/**
 * VOITURE - Deterministic Frame Sequence Manifest
 *
 * Generated from the verified 120 video frames stored in /frames.
 * All frames are 1280x720 WebP images sorted strictly in natural chronological order.
 * - Frame 000001: Exterior grand facade with exterior VOITURE emblem and glass portal
 * - Frame 000060: Transit through grand glass doorway
 * - Frame 000120: Interior grand showroom revealing the three flagship luxury cars
 */

export interface FrameManifestConfig {
  totalFrames: number;
  width: number;
  height: number;
  aspectRatio: number;
  basePath: string;
  frames: readonly string[];
}

export const FRAME_COUNT = 120;
export const FRAME_WIDTH = 1280;
export const FRAME_HEIGHT = 720;
export const FRAME_ASPECT_RATIO = 1280 / 720; // 1.7777... (16:9)
export const FRAME_BASE_PATH = '/frames';

// Deterministic array of all 120 frame paths in natural chronological sequence
export const FRAME_PATHS: readonly string[] = Object.freeze(
  Array.from({ length: FRAME_COUNT }, (_, i) => {
    const frameNumber = String(i + 1).padStart(6, '0');
    return `${FRAME_BASE_PATH}/frame_${frameNumber}.webp`;
  })
);

export const FRAME_MANIFEST: FrameManifestConfig = {
  totalFrames: FRAME_COUNT,
  width: FRAME_WIDTH,
  height: FRAME_HEIGHT,
  aspectRatio: FRAME_ASPECT_RATIO,
  basePath: FRAME_BASE_PATH,
  frames: FRAME_PATHS,
};

/**
 * Safely clamps a frame index to the valid range [0, FRAME_COUNT - 1]
 */
export function clampFrameIndex(index: number): number {
  if (Number.isNaN(index)) return 0;
  return Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(index)));
}

/**
 * Maps a normalized scroll progress [0, 1] to a frame index [0, FRAME_COUNT - 1]
 */
export function mapProgressToFrameIndex(progress: number): number {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  return Math.round(clampedProgress * (FRAME_COUNT - 1));
}

/**
 * Returns the public URL for a given frame index
 */
export function getFrameUrl(index: number): string {
  const safeIndex = clampFrameIndex(index);
  return FRAME_PATHS[safeIndex];
}

/**
 * Convenience accessor for the opening exterior frame
 */
export function getFirstFrameUrl(): string {
  return FRAME_PATHS[0];
}

/**
 * Convenience accessor for the closing interior triple-car reveal frame
 */
export function getLastFrameUrl(): string {
  return FRAME_PATHS[FRAME_COUNT - 1];
}
