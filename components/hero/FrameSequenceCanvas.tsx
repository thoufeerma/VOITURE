'use client';

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import { FrameLoader } from '@/lib/hero/frameLoader';
import {
  FRAME_WIDTH,
  FRAME_HEIGHT,
  clampFrameIndex,
  getFirstFrameUrl,
} from '@/lib/hero/frameManifest';

export interface FrameSequenceCanvasHandle {
  renderFrame: (frameIndex: number) => void;
  getCurrentFrameIndex: () => number;
  resize: () => void;
}

export interface FrameSequenceCanvasProps {
  loader: FrameLoader;
  initialFrameIndex?: number;
  onInitialFrameReady?: () => void;
  isReducedMotion?: boolean;
  className?: string;
}

export const FrameSequenceCanvas = forwardRef<
  FrameSequenceCanvasHandle,
  FrameSequenceCanvasProps
>(function FrameSequenceCanvas(
  {
    loader,
    initialFrameIndex = 0,
    onInitialFrameReady,
    isReducedMotion = false,
    className = '',
  },
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentFrameIndexRef = useRef<number>(initialFrameIndex);
  const lastDrawnImageRef = useRef<HTMLImageElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const isInitialReadyRef = useRef<boolean>(false);

  /**
   * High performance canvas cover-fit renderer
   * Maintains 100% of the original 1280x720 aspect ratio without stretching,
   * cropping only presentation edges symmetrically to fill the viewport.
   */
  const drawImageCover = useCallback(
    (img: HTMLImageElement) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      const nw = img.naturalWidth || FRAME_WIDTH;
      const nh = img.naturalHeight || FRAME_HEIGHT;
      const imgAspect = nw / nh;
      const canvasAspect = cw / ch;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasAspect > imgAspect) {
        // Viewport is wider than 16:9
        drawW = cw;
        drawH = cw / imgAspect;
        drawX = 0;
        drawY = (ch - drawH) / 2;
      } else {
        // Viewport is narrower/taller than 16:9 (e.g. mobile portrait)
        drawH = ch;
        drawW = ch * imgAspect;
        drawX = (cw - drawW) / 2;
        drawY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Draw frame
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      lastDrawnImageRef.current = img;

      if (!isInitialReadyRef.current) {
        isInitialReadyRef.current = true;
        onInitialFrameReady?.();
      }
    },
    [onInitialFrameReady]
  );

  /**
   * Resizes the canvas backing store using the device pixel ratio (capped at 2 for performance)
   */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const displayW = Math.max(1, Math.round(rect.width));
    const displayH = Math.max(1, Math.round(rect.height));

    const pixelW = Math.round(displayW * dpr);
    const pixelH = Math.round(displayH * dpr);

    if (canvas.width !== pixelW || canvas.height !== pixelH) {
      canvas.width = pixelW;
      canvas.height = pixelH;
    }

    // Re-draw current frame after resize
    if (lastDrawnImageRef.current) {
      drawImageCover(lastDrawnImageRef.current);
    } else {
      const img = loader.getNearestLoadedFrame(currentFrameIndexRef.current);
      if (img) {
        drawImageCover(img);
      }
    }
  }, [drawImageCover, loader]);

  /**
   * Renders the specified frame index onto the canvas
   */
  const renderFrame = useCallback(
    (targetIndex: number) => {
      const safeIndex = clampFrameIndex(targetIndex);
      currentFrameIndexRef.current = safeIndex;

      // Trigger preloading around this frame
      loader.preloadWindow(safeIndex);

      // Check if target frame is already cached and ready
      const img = loader.getLoadedFrame(safeIndex);
      if (img && img.complete && img.naturalWidth > 0) {
        drawImageCover(img);
        return;
      }

      // If not yet ready, draw the nearest available loaded frame to prevent flashes
      const nearest = loader.getNearestLoadedFrame(safeIndex);
      if (nearest && nearest.complete && nearest.naturalWidth > 0) {
        drawImageCover(nearest);
      }

      // Load target frame asynchronously and render when ready
      loader.loadFrame(safeIndex).then((loadedImg) => {
        // Only draw if user hasn't scrolled far away in the meantime
        if (Math.abs(currentFrameIndexRef.current - safeIndex) <= 2) {
          drawImageCover(loadedImg);
        }
      }).catch(() => {
        // Retain nearest frame gracefully
      });
    },
    [drawImageCover, loader]
  );

  // Expose imperative API to parent component
  useImperativeHandle(
    ref,
    () => ({
      renderFrame,
      getCurrentFrameIndex: () => currentFrameIndexRef.current,
      resize: resizeCanvas,
    }),
    [renderFrame, resizeCanvas]
  );

  // Initial setup: load opening frame and attach resize listeners
  useEffect(() => {
    resizeCanvas();

    // Load first frame immediately
    loader.loadFrame(initialFrameIndex).then((img) => {
      drawImageCover(img);
    }).catch(() => {
      // Fallback
    });

    const handleWindowResize = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        resizeCanvas();
      });
    };

    window.addEventListener('resize', handleWindowResize, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [initialFrameIndex, loader, resizeCanvas, drawImageCover]);

  // Reduced motion handling
  useEffect(() => {
    if (isReducedMotion) {
      // If user prefers reduced motion, hold steady at exterior frame 0
      renderFrame(0);
    }
  }, [isReducedMotion, renderFrame]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-neutral-950 ${className}`}
      aria-label="VOITURE Cinematic Showroom Camera Experience"
      role="img"
    >
      {/* Pristine background poster image for zero initial flash / zero layout shift */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getFirstFrameUrl()}
        alt="VOITURE Exterior Facade"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          opacity: isInitialReadyRef.current ? 0 : 1,
          zIndex: 1,
        }}
        loading="eager"
        fetchPriority="high"
      />

      {/* Primary Hardware-Accelerated Sequence Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{
          zIndex: 2,
        }}
      />
    </div>
  );
});
