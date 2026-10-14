'use client';

import React from 'react';

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Explore cars and bikes that match your preferences.',
  },
  {
    step: '02',
    title: 'Compare',
    description: 'Review specifications, prices, and available options.',
  },
  {
    step: '03',
    title: 'Connect',
    description: 'Contact the seller or dealer directly.',
  },
  {
    step: '04',
    title: 'Drive',
    description: 'Move forward with your chosen vehicle.',
  },
];

export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 text-center">
      {/* Header */}
      <div className="mb-14">
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-2">
          A SIMPLE WAY TO FIND YOUR RIDE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-medium">
          How It Works
        </h2>
      </div>

      {/* 4 Steps Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-left">
        {STEPS.map((s, idx) => (
          <div key={s.step} className="relative flex flex-col items-start">
            {/* Step Number with Gold Circular Icon & Connecting Arrow */}
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl sm:text-3xl font-serif font-light text-neutral-400">
                  {s.step}
                </span>
                {/* Circular Gold Target Icon */}
                <div className="w-5 h-5 rounded-full border border-[#deba76] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#deba76]" />
                </div>
              </div>

              {/* Connecting arrow if not the last step */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center flex-grow mx-4 text-neutral-600">
                  <div className="w-full h-[1px] bg-neutral-800" />
                  <svg className="w-3.5 h-3.5 -ml-1 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <h3 className="text-base sm:text-lg font-serif font-medium text-white mb-1.5">
              {s.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
