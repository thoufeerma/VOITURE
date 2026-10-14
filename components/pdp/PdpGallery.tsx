'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PdpGalleryProps {
  gallery: string[];
  vehicleName: string;
}

export function PdpGallery({ gallery, vehicleName }: PdpGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = gallery[activeIndex] || gallery[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleDownload = () => {
    // Open image in new tab to download
    window.open(currentImage, '_blank');
  };

  return (
    <div className="relative w-full bg-[#0E0E0E] rounded-3xl overflow-hidden border border-neutral-800/80 shadow-2xl">
      {/* Main Viewport Container */}
      <div className="relative w-full h-[320px] sm:h-[480px] md:h-[580px] lg:h-[640px] bg-neutral-950 flex items-center justify-center overflow-hidden group">
        <Image
          src={currentImage}
          alt={`${vehicleName} view ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 85vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-black/70 text-[#deba76] border border-[#deba76]/40 backdrop-blur-md">
            VOITURE ATELIER VERIFIED
          </span>
          <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase bg-white/10 text-white/90 backdrop-blur-md">
            360° STUDIO VIEW
          </span>
        </div>

        {/* Top Right Action Buttons: Download & Lightbox */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2.5 z-10">
          <button
            type="button"
            onClick={handleDownload}
            title="Download high-resolution photo"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-black/70 hover:bg-[#deba76] text-white hover:text-neutral-950 border border-neutral-700 hover:border-[#deba76] backdrop-blur-md transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            title="View Fullscreen"
            className="p-2 sm:px-3 sm:py-2 rounded-full text-xs font-medium bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700 backdrop-blur-md transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Prev / Next Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 backdrop-blur-md hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 backdrop-blur-md hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Image Counter */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest bg-black/80 text-white/90 border border-neutral-700 backdrop-blur-md">
          {activeIndex + 1} / {gallery.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="p-3 sm:p-4 bg-[#111111] border-t border-neutral-800/80 flex items-center gap-3 overflow-x-auto no-scrollbar">
        {gallery.map((imgUrl, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              activeIndex === idx
                ? 'border-[#deba76] scale-105 shadow-md shadow-[#deba76]/20'
                : 'border-neutral-800 hover:border-neutral-600 opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={imgUrl}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between z-10">
            <div>
              <h3 className="text-white text-lg font-serif">{vehicleName}</h3>
              <p className="text-xs text-neutral-400 font-mono">
                Image {activeIndex + 1} of {gallery.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Image Stage */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={currentImage}
                alt="Fullscreen vehicle view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 text-white hover:bg-black border border-neutral-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 text-white hover:bg-black border border-neutral-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Footer Thumbnails */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative w-16 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                  activeIndex === idx ? 'border-[#deba76]' : 'border-transparent opacity-50'
                }`}
              >
                <Image src={img} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
