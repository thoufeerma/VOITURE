'use client';

import React, { useState } from 'react';

import Link from 'next/link';

const VEHICLES = [
  {
    id: 'mercedes-s-class',
    title: 'Mercedes-Benz S-Class',
    image: '/images/hires/mercedes_s_class.jpg',
    year: '2023',
    mileage: '12,000 km',
    fuel: 'Petrol',
    location: 'Kochi',
    price: '₹ 1.45 Cr',
    verified: true,
  },
  {
    id: 'bmw-m4',
    title: 'BMW M4',
    image: '/images/hires/bmw_m4.jpg',
    year: '2022',
    mileage: '8,000 km',
    fuel: 'Petrol',
    location: 'Bangalore',
    price: '₹ 1.25 Cr',
    verified: true,
  },
  {
    id: 'range-rover-sport',
    title: 'Range Rover Sport',
    image: '/images/hires/range_rover_sport.jpg',
    year: '2023',
    mileage: '15,000 km',
    fuel: 'Diesel',
    location: 'Delhi',
    price: '₹ 1.35 Cr',
    verified: true,
  },
  {
    id: 'ducati-panigale-v4',
    title: 'Ducati Panigale V4',
    image: '/images/hires/ducati_panigale.jpg',
    year: '2022',
    mileage: '4,200 km',
    fuel: 'Petrol',
    location: 'Mumbai',
    price: '₹ 28.5 L',
    verified: true,
  },
];

export function FeaturedListings() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-2">
            FEATURED
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-medium">
            Premium Vehicles
          </h2>
        </div>

        <Link
          href="/cars/3004"
          className="mt-4 sm:mt-0 inline-flex items-center text-xs font-semibold tracking-wider text-[#deba76] underline underline-offset-4 hover:text-[#f3deab] transition-colors group"
        >
          <span>View Featured Demo (GLA 200)</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {VEHICLES.map((car) => {
          const isFav = !!favorites[car.id];
          return (
            <Link
              key={car.id}
              href={`/cars/${car.id}`}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-neutral-700 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container with Heart Button */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Heart Button */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(car.id, e)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                  aria-label="Save to favorites"
                >
                  <svg
                    className={`w-4 h-4 transition-colors ${
                      isFav ? 'text-rose-500 fill-rose-500' : 'text-white fill-transparent'
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-white group-hover:text-[#deba76] transition-colors mb-2">
                    {car.title}
                  </h3>

                  {/* Specs */}
                  <div className="flex items-center space-x-2.5 text-xs text-neutral-400 font-sans mb-4">
                    <span>{car.year}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{car.mileage}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{car.fuel}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{car.location}</span>
                  </div>
                </div>

                {/* Price & Verified Badge */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-base sm:text-lg font-bold text-white font-sans">
                    {car.price}
                  </span>

                  {car.verified && (
                    <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-[#deba76]">
                      <svg className="w-3.5 h-3.5 text-[#deba76]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Verified Dealer</span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
