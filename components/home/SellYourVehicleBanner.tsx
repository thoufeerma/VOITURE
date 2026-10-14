'use client';

import React from 'react';

export function SellYourVehicleBanner() {
  return (
    <section id="sell-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
      <div className="bg-[#141414] rounded-3xl overflow-hidden border border-neutral-800 p-8 sm:p-12 lg:p-14 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-3">
              SELL YOUR VEHICLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-medium leading-[1.1] mb-5">
              Ready to Sell<br />Your Vehicle?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
              Reach buyers actively searching for their next car or bike. List your vehicle
              in just a few steps and connect with serious buyers.
            </p>
            <div>
              <a
                href="#list"
                className="inline-flex items-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-950 bg-[#deba76] hover:bg-[#e6ca8d] rounded-xl transition-all duration-300 shadow-lg group"
              >
                <span>List Your Vehicle</span>
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

          {/* Right Column Porsche Photo (6 cols) */}
          <div className="lg:col-span-6 h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-neutral-800/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hires/sell_porsche.jpg"
              alt="Ready to sell your sports car"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
