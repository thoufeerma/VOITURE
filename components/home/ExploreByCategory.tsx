'use client';

import React from 'react';

const CATEGORIES = [
  {
    id: 'luxury-cars',
    title: 'Luxury Cars',
    description: 'Refined performance and unmatched comfort.',
    image: '/images/hires/cat_luxury.jpg',
  },
  {
    id: 'sports-cars',
    title: 'Sports Cars',
    description: 'Built for thrill seekers and pure driving pleasure.',
    image: '/images/hires/cat_sports.jpg',
  },
  {
    id: 'suvs',
    title: 'SUVs',
    description: 'Power and versatility for every journey.',
    image: '/images/hires/cat_suv.jpg',
  },
  {
    id: 'motorcycles',
    title: 'Motorcycles',
    description: 'Freedom in its purest form.',
    image: '/images/hires/cat_motorcycle.jpg',
  },
];

export function ExploreByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column Content (approx 3.5 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-3">
            EXPLORE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-white font-medium leading-[1.1] mb-5">
            Shop by<br />Category
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-8 max-w-sm">
            Discover our curated selection of premium cars and bikes across every category.
          </p>
          <div>
            <a
              href="#categories"
              className="inline-flex items-center text-xs font-semibold tracking-wider text-[#deba76] underline underline-offset-4 hover:text-[#f3deab] transition-colors group"
            >
              <span>View All Categories</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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

        {/* Right Column: 4 Vertical Category Cards (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-neutral-800/90 shadow-xl bg-neutral-900 cursor-pointer"
            >
              {/* Background Card Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4.5 flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-serif font-medium text-white mb-1 drop-shadow">
                  {cat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-light leading-snug mb-3">
                  {cat.description}
                </p>
                <div className="self-end text-[#deba76] transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
