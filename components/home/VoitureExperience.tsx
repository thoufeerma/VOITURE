'use client';

import React from 'react';

export function VoitureExperience() {
  return (
    <section id="experience-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column Content (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-3">
            THE VOITURE EXPERIENCE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-medium leading-[1.1] mb-6">
            A Higher<br />Standard<br />of Automotive
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
            At Voiture, we bring together exceptional cars and bikes with people who value quality,
            performance and design.
          </p>
          <div>
            <a
              href="#story"
              className="inline-flex items-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-950 bg-[#deba76] hover:bg-[#e6ca8d] rounded-xl transition-all duration-300 shadow-lg group"
            >
              <span>Explore Our Story</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column Photographic Banner (7 cols) */}
        <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hires/exp_taillight.jpg"
            alt="A Higher Standard of Automotive"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
