'use client';

import React, { useState, useEffect } from 'react';

export function VoitureNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wing Crest & Wordmark */}
        <a href="#" className="flex items-center space-x-3 group">
          <svg
            className="w-8 h-4 text-[#deba76] transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 100 40"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M50 38 L42 22 L2 22 L2 18 L44 18 L50 28 L56 18 L98 18 L98 22 L58 22 Z" />
            <path d="M43 14 L4 14 L4 10 L45 10 L50 20 L55 10 L96 10 L96 14 L57 14 Z" opacity="0.85" />
            <path d="M44 6 L7 6 L7 2 L46 2 L50 12 L54 2 L93 2 L93 6 L56 6 Z" opacity="0.7" />
          </svg>
          <span className="font-serif tracking-[0.35em] text-sm sm:text-base font-semibold text-white uppercase">
            VOITURE
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-9 text-xs font-sans tracking-[0.14em] uppercase text-neutral-300">
          <a href="#filter-section" className="hover:text-[#deba76] transition-colors duration-200">
            Cars
          </a>
          <a href="#filter-section" className="hover:text-[#deba76] transition-colors duration-200">
            Bikes
          </a>
          <a href="#sell-section" className="hover:text-[#deba76] transition-colors duration-200">
            Sell Your Vehicle
          </a>
          <a href="#experience-section" className="hover:text-[#deba76] transition-colors duration-200">
            About
          </a>
        </div>

        {/* Right Search Input & List Your Vehicle Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center relative">
            <svg
              className="w-3.5 h-3.5 text-neutral-400 absolute left-3 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-36 focus:w-48 transition-all duration-300 bg-white/10 hover:bg-white/15 focus:bg-neutral-900 border border-white/15 focus:border-[#deba76] rounded-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-400 focus:outline-none"
            />
          </div>

          <a
            href="#sell-section"
            className="inline-flex items-center px-4 sm:px-5 py-2 text-xs font-semibold tracking-[0.1em] uppercase rounded-full bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 transition-all duration-200 shadow-md"
          >
            List Your Vehicle
          </a>
        </div>
      </div>
    </nav>
  );
}
