'use client';

import React from 'react';
import { VehicleItem } from '@/lib/data/vehiclesData';

interface PdpKeySpecsProps {
  vehicle: VehicleItem;
}

export function PdpKeySpecs({ vehicle }: PdpKeySpecsProps) {
  const specs = [
    {
      label: 'Engine Power',
      value: vehicle.keySpecs.power,
      sub: vehicle.keySpecs.engine,
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: 'Peak Torque',
      value: vehicle.keySpecs.torque,
      sub: 'Smooth torque delivery curve',
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      label: 'Acceleration',
      value: vehicle.keySpecs.acceleration,
      sub: `Top Speed: ${vehicle.keySpecs.topSpeed}`,
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Drivetrain',
      value: vehicle.keySpecs.drivetrain,
      sub: `Transmission: ${vehicle.transmission}`,
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      label: 'Exterior Color',
      value: vehicle.exteriorColor,
      sub: 'Original factory paint condition',
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      label: 'Interior Cockpit',
      value: vehicle.interiorColor,
      sub: `${vehicle.keySpecs.seating} • Premium Grade`,
      icon: (
        <svg className="w-5 h-5 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-1">
            TECHNICAL OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
            Key Performance & Architecture
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {specs.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-colors duration-200 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-0.5">
                {item.label}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                {item.value}
              </h3>
              <p className="text-xs text-neutral-400 font-light truncate mt-0.5">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
