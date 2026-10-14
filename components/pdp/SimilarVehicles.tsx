'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getVehicleById } from '@/lib/data/vehiclesData';

interface SimilarVehiclesProps {
  similarCarIds: string[];
}

export function SimilarVehicles({ similarCarIds }: SimilarVehiclesProps) {
  const cars = similarCarIds.map((id) => getVehicleById(id)).filter(Boolean);

  if (cars.length === 0) return null;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-1">
            EXPLORE ALTERNATIVES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
            Similar Luxury Vehicles
          </h2>
        </div>
        <Link
          href="/#filter-section"
          className="text-xs font-semibold text-[#deba76] hover:underline underline-offset-4"
        >
          View Full Collection →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Link
            key={car.id}
            href={`/cars/${car.id}`}
            className="group bg-[#141414] rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col shadow-lg"
          >
            <div className="relative h-48 sm:h-52 bg-neutral-900 overflow-hidden">
              <Image
                src={car.heroImage}
                alt={car.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/75 text-[#deba76] border border-[#deba76]/30">
                {car.regYear}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#deba76] transition-colors">
                  {car.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {car.kmDriven} • {car.fuelType} • {car.location}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-lg font-serif font-bold text-white">
                  {car.price}
                </span>
                <span className="text-xs font-mono text-[#deba76] group-hover:translate-x-1 transition-transform">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
