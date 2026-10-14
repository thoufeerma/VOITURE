'use client';

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { FrameLoader } from '@/lib/hero/frameLoader';
import { FRAME_COUNT } from '@/lib/hero/frameManifest';
import {
  FrameSequenceCanvas,
  FrameSequenceCanvasHandle,
} from './FrameSequenceCanvas';

function subscribeReducedMotion(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export interface VoitureHeroProps {
  /**
   * Scroll track height multiplier relative to viewport height.
   * Default: 4 (i.e. 400vh for a 100svh sticky hero)
   */
  scrollDistanceMultiplier?: number;
  /**
   * Callback fired when user triggers the primary CTA
   */
  onExploreCollection?: () => void;
}

export function VoitureHero({
  scrollDistanceMultiplier = 4,
  onExploreCollection,
}: VoitureHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasHandleRef = useRef<FrameSequenceCanvasHandle | null>(null);

  // Subscribe to prefers-reduced-motion without cascading renders
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // High-performance loader instance (persisted across renders)
  const loader = useMemo(() => new FrameLoader(), []);

  // UI state for reactive transitions
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [reducedMotionView, setReducedMotionView] = useState<'exterior' | 'interior'>('exterior');

  // Animation frame reference for scroll throttling
  const rafIdRef = useRef<number | null>(null);
  const latestProgressRef = useRef<number>(0);

  // Initialize loader priority batch & idle preloading
  useEffect(() => {
    // 1. Prioritize loading opening frames immediately
    loader.preloadInitialBatch(12);

    // 2. Track loading progress for subtle luxury loader indicator
    const unsubscribe = loader.onProgress((loaded) => {
      setLoadedCount(loaded);
    });

    // 3. Initiate progressive background preloading for remaining frames
    loader.startIdlePreload();

    return () => {
      unsubscribe();
      loader.destroy();
    };
  }, [loader]);

  /**
   * Native scroll calculation with requestAnimationFrame coordination
   * Reads container position, normalizes to [0, 1], and updates canvas directly
   */
  const handleScroll = useCallback(() => {
    if (isReducedMotion) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const maxScroll = container.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / maxScroll;
      const progress = Math.max(0, Math.min(1, rawProgress));

      latestProgressRef.current = progress;

      // Map progress to animation progress:
      // Frames 0 to 119 play smoothly between progress 0.0 and ANIMATION_END_PROGRESS (0.68)
      // From 0.68 to 1.0 (over 110vh of scroll track), the view remains firmly locked on the final frame (119),
      // locking the screen so users can comfortably view the CTA buttons and texts.
      const ANIMATION_END_PROGRESS = 0.68;
      const animProgress = Math.min(1, progress / ANIMATION_END_PROGRESS);
      const targetFrame = Math.round(animProgress * (FRAME_COUNT - 1));

      // Render frame directly onto canvas without waiting for React re-render
      if (canvasHandleRef.current) {
        canvasHandleRef.current.renderFrame(targetFrame);
      }

      // Update UI state throttled
      setScrollProgress(progress);
    });
  }, [isReducedMotion]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to capture initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [handleScroll]);

  // Handle CTA click
  const handleCtaClick = () => {
    if (onExploreCollection) {
      onExploreCollection();
      return;
    }

    // Smoothly scroll down past the hero to reveal the collection
    const container = containerRef.current;
    if (container) {
      const bottom = container.offsetTop + container.scrollHeight;
      window.scrollTo({
        top: bottom,
        behavior: 'smooth',
      });
    }
  };

  // Toggle view for reduced-motion users
  const handleToggleReducedView = (view: 'exterior' | 'interior') => {
    setReducedMotionView(view);
    const targetIndex = view === 'exterior' ? 0 : FRAME_COUNT - 1;
    if (canvasHandleRef.current) {
      canvasHandleRef.current.renderFrame(targetIndex);
    }
  };

  // Opacity transitions calculated strictly from scroll progress
  // Phase 1: Intro copy fades gracefully as camera enters doorway (0 -> 0.25)
  const introOpacity = Math.max(0, Math.min(1, 1 - scrollProgress * 4.0));
  const introTranslateY = scrollProgress * -40; // Subtle lift as it departs

  // Scroll indicator disappears quickly once scroll starts (0 -> 0.08)
  const scrollIndicatorOpacity = Math.max(0, Math.min(1, 1 - scrollProgress * 12.5));

  // Dark overlay only emerges at the final frames (0.45 -> 0.65) so video remains natural during entrance,
  // and darkens only when the finale texts and CTAs appear for crystal-clear readability
  const darkOverlayOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.45) / 0.20));

  // Phase 3: Finale badge & collection reveal emerges as three cars are uncovered (0.48 -> 0.66)
  // Stays locked at 1.0 (fully visible) for the entire remaining locked screen duration (0.66 -> 1.0)
  const finaleOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.48) / 0.18));
  const finaleTranslateY = Math.max(0, (1 - finaleOpacity) * 20);

  return (
    <section
      ref={containerRef}
      id="voiture-hero-section"
      className="relative w-full bg-neutral-950 text-white"
      style={{
        // Dynamic scroll distance container: default 4.5x viewport height for extended locked final frame
        height: isReducedMotion ? '100svh' : `${scrollDistanceMultiplier * 100}vh`,
      }}
      aria-label="VOITURE Hero Section"
    >
      {/* Pinned Viewport Container (100svh sticky) */}
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex flex-col justify-between">
        
        {/* Layer 1: Hardware-Accelerated Sequence Canvas */}
        <div className="absolute inset-0 w-full h-full z-0">
          <FrameSequenceCanvas
            ref={canvasHandleRef}
            loader={loader}
            initialFrameIndex={0}
            isReducedMotion={isReducedMotion}
          />
        </div>

        {/* Layer 1.5: Dynamic Dark Overlay — Only active at final frames when text appears */}
        <div
          className="absolute inset-0 bg-black/55 pointer-events-none z-[5] transition-opacity duration-300"
          style={{
            opacity: isReducedMotion ? 0.6 : darkOverlayOpacity,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.65)_100%)] pointer-events-none z-[6] transition-opacity duration-300"
          style={{
            opacity: isReducedMotion ? 0.7 : darkOverlayOpacity,
          }}
          aria-hidden="true"
        />

        {/* Layer 2: Subtle Architectural Vignette & Contrast Scrims */}
        {/* Top Header Scrim */}
        <div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        {/* Bottom Content Scrim */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Top spacer to preserve layout spacing beneath fixed VoitureNavbar */}
        <div className="w-full h-20 sm:h-24 pointer-events-none" aria-hidden="true" />

        {/* Subtle Top Loading Line (visible during progressive streaming) */}
        {loadedCount < FRAME_COUNT && (
          <div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent z-30 transition-all duration-300"
            style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
            aria-hidden="true"
          />
        )}

        {/* Layer 4: Phase 1 — Opening Hero Typography (Eyebrow, Headline, Supporting, CTA) */}
        <div
          className="relative z-20 px-6 sm:px-12 md:px-16 pb-12 sm:pb-16 max-w-4xl transition-all duration-500 ease-out"
          style={{
            opacity: isReducedMotion ? 1 : introOpacity,
            transform: isReducedMotion ? 'none' : `translateY(${introTranslateY}px)`,
            pointerEvents: introOpacity > 0.1 ? 'auto' : 'none',
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center space-x-3 mb-3 sm:mb-4">
            <span className="inline-block w-6 sm:w-10 h-[1px] bg-[#c5a059]" aria-hidden="true" />
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.28em] text-[#d6b772] uppercase font-sans">
              THE ART OF AUTOMOTIVE EXCELLENCE
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white font-medium leading-[1.08] mb-4 sm:mb-5 drop-shadow-md">
            Beyond the Ordinary<span className="text-[#c5a059]">.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-300/90 font-light max-w-xl leading-relaxed mb-6 sm:mb-8 font-sans drop-shadow">
            Discover a world of exceptional automobiles.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              id="hero-explore-cta"
              onClick={handleCtaClick}
              className="group relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white bg-neutral-900/90 hover:bg-neutral-900 border border-[#c5a059]/60 hover:border-[#c5a059] rounded-none backdrop-blur-md transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(197,160,89,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              <span className="relative z-10 mr-3 transition-colors duration-300 group-hover:text-[#f3deab]">
                Explore Our Collection
              </span>
              <svg
                className="w-3.5 h-3.5 text-[#c5a059] transition-transform duration-300 ease-out group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Layer 5: Phase 3 — Final Frames Reveal matching reference mockup */}
        {!isReducedMotion && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 sm:pb-16 px-6 text-center pointer-events-none transition-all duration-700 ease-out"
            style={{
              opacity: finaleOpacity,
              transform: `translateY(${finaleTranslateY}px)`,
              pointerEvents: finaleOpacity > 0.4 ? 'auto' : 'none',
            }}
          >
            {/* Center Content Box */}
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              {/* Gold Eyebrow */}
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#d6b772] uppercase font-sans mb-2 sm:mb-3 drop-shadow">
                THE ART OF AUTOMOTIVE EXCELLENCE
              </p>

              {/* Title */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white font-normal leading-[1.08] mb-2 sm:mb-3 drop-shadow-lg">
                Find Your Perfect<br />Voiture
              </h2>

              {/* Gold Divider Line */}
              <div className="w-10 sm:w-12 h-[2px] bg-[#c5a059] my-1 sm:my-2 rounded-full" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-white/95 sm:text-white font-medium max-w-xl leading-relaxed mb-6 sm:mb-7 font-sans drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide">
                Discover thousands of premium cars and bikes from verified dealers and individual sellers. Your dream ride is just a click away.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-[0.12em] uppercase rounded-xl bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 transition-all duration-200 shadow-lg group"
                >
                  <span className="mr-2 font-semibold">Browse Cars</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-[0.12em] uppercase rounded-xl bg-neutral-950/70 hover:bg-neutral-900 border border-[#deba76]/50 hover:border-[#deba76] text-white transition-all duration-200 backdrop-blur-md group"
                >
                  <span className="mr-2">Browse Bikes</span>
                  <svg className="w-3.5 h-3.5 text-[#deba76] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Scroll Indicator Matching Reference */}
            <div className="hidden lg:flex absolute bottom-10 right-10 flex-col items-center pointer-events-none text-neutral-400">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase rotate-90 origin-center mb-6">
                SCROLL
              </span>
              <div className="w-4 h-7 rounded-full border border-neutral-600 flex items-start justify-center p-1 mb-2">
                <div className="w-1 h-1.5 rounded-full bg-[#deba76] animate-bounce" />
              </div>
              <div className="w-[1px] h-6 bg-neutral-700" />
            </div>
          </div>
        )}

        {/* Layer 6: Subtle Editorial Scroll Indicator (Secondary Microcopy: SCROLL TO DISCOVER) */}
        {!isReducedMotion && (
          <div
            className="absolute bottom-6 sm:bottom-8 right-6 sm:right-12 z-20 flex flex-col items-center pointer-events-none transition-all duration-300"
            style={{
              opacity: scrollIndicatorOpacity,
            }}
            aria-hidden="true"
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-sans mb-2 font-medium">
              SCROLL TO DISCOVER
            </span>
            <div className="w-[1px] h-9 bg-neutral-800 relative overflow-hidden">
              <div className="w-full h-1/2 bg-[#c5a059] animate-pulse" />
            </div>
          </div>
        )}

        {/* Accessibility Panel for Reduced Motion */}
        {isReducedMotion && (
          <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-3.5 bg-neutral-900/90 border border-neutral-800 text-xs backdrop-blur-md">
            <span className="text-neutral-300">
              Motion reduced preference detected:
            </span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => handleToggleReducedView('exterior')}
                className={`px-3 py-1.5 uppercase tracking-wider text-[11px] font-mono transition-colors ${
                  reducedMotionView === 'exterior'
                    ? 'bg-[#c5a059] text-neutral-950 font-semibold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Exterior View
              </button>
              <button
                type="button"
                onClick={() => handleToggleReducedView('interior')}
                className={`px-3 py-1.5 uppercase tracking-wider text-[11px] font-mono transition-colors ${
                  reducedMotionView === 'interior'
                    ? 'bg-[#c5a059] text-neutral-950 font-semibold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Interior View
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
