'use client';

import React from 'react';

const TRUST_POINTS = [
  { number: '01', title: 'Verified Dealer Profiles' },
  { number: '02', title: 'Detailed Vehicle Information' },
  { number: '03', title: 'Transparent Listings' },
  { number: '04', title: 'Direct Seller Communication' },
];

export function MarketplaceTrust() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column Macro Grille Photo (5 cols) */}
        <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-neutral-800 shadow-xl bg-neutral-900 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hires/trust_grille.jpg"
            alt="Voiture Emblem on Luxury Grille"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Right Column Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-3">
            WHY CHOOSE VOITURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-medium leading-[1.15] mb-4">
            A Marketplace You Can Trust
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
            Verified dealers and individual sellers, detailed listings, and a seamless buying experience — all in one place.
          </p>

          {/* 4 Numbered Trust Rows with Gold Dividers */}
          <div className="space-y-4">
            {TRUST_POINTS.map((item) => (
              <div
                key={item.number}
                className="flex items-center space-x-4 py-2 border-b border-neutral-800/80 group cursor-default"
              >
                <span className="text-xs sm:text-sm font-mono tracking-wider text-[#deba76] font-medium">
                  {item.number}
                </span>
                <span className="text-neutral-600">|</span>
                <span className="text-sm sm:text-base font-serif text-neutral-200 group-hover:text-[#deba76] transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
