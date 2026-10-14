'use client';

import React, { useState } from 'react';

export function VehicleFilterBar() {
  const [activeTab, setActiveTab] = useState<'Cars' | 'Bikes'>('Cars');
  const [make, setMake] = useState('All Makes');
  const [model, setModel] = useState('All Models');
  const [priceRange, setPriceRange] = useState('Any Price');
  const [location, setLocation] = useState('All Locations');
  const [condition, setCondition] = useState('Any Condition');

  return (
    <section id="filter-section" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-20">
      {/* Top Tabs */}
      <div className="flex items-center space-x-2 pl-2 mb-0">
        {/* Cars Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('Cars')}
          className={`flex items-center space-x-2.5 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-medium tracking-wide transition-all border-t border-x ${
            activeTab === 'Cars'
              ? 'bg-[#141414] text-[#deba76] border-neutral-800 shadow-md'
              : 'bg-[#0f0f0f] text-neutral-400 border-transparent hover:text-neutral-200'
          }`}
        >
          {/* Car Icon */}
          <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M5 11l2-5h10l2 5M5 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-6M5 11h14" />
          </svg>
          <span>Cars</span>
        </button>

        {/* Bikes Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('Bikes')}
          className={`flex items-center space-x-2.5 px-6 py-3 rounded-t-xl text-xs sm:text-sm font-medium tracking-wide transition-all border-t border-x ${
            activeTab === 'Bikes'
              ? 'bg-[#141414] text-[#deba76] border-neutral-800 shadow-md'
              : 'bg-[#0f0f0f] text-neutral-400 border-transparent hover:text-neutral-200'
          }`}
        >
          {/* Motorcycle Icon */}
          <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="18.5" cy="17.5" r="3.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6h-3l-3 6.5h6.5l2-3.5H20M9 12.5l-3.5 5M15 12.5l3.5 5" />
          </svg>
          <span>Bikes</span>
        </button>
      </div>

      {/* Filter Main Card */}
      <div className="bg-[#141414] rounded-2xl rounded-tl-none border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-end">
          
          {/* 1. Make */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              Make
            </label>
            <div className="relative">
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full appearance-none bg-[#1d1d1d] hover:bg-[#232323] border border-neutral-700/60 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-[#deba76] transition-colors pr-8 cursor-pointer"
              >
                <option value="All Makes">All Makes</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Porsche">Porsche</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Ducati">Ducati</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Model */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              Model
            </label>
            <div className="relative">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full appearance-none bg-[#1d1d1d] hover:bg-[#232323] border border-neutral-700/60 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-[#deba76] transition-colors pr-8 cursor-pointer"
              >
                <option value="All Models">All Models</option>
                <option value="S-Class">S-Class</option>
                <option value="M4">M4</option>
                <option value="Range Rover Sport">Range Rover Sport</option>
                <option value="Panigale V4">Panigale V4</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. Price Range */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              Price Range
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full appearance-none bg-[#1d1d1d] hover:bg-[#232323] border border-neutral-700/60 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-[#deba76] transition-colors pr-8 cursor-pointer"
              >
                <option value="Any Price">Any Price</option>
                <option value="Under ₹ 50 L">Under ₹ 50 L</option>
                <option value="₹ 50 L - ₹ 1 Cr">₹ 50 L - ₹ 1 Cr</option>
                <option value="₹ 1 Cr - ₹ 2 Cr">₹ 1 Cr - ₹ 2 Cr</option>
                <option value="Above ₹ 2 Cr">Above ₹ 2 Cr</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4. Location */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              Location
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none bg-[#1d1d1d] hover:bg-[#232323] border border-neutral-700/60 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-[#deba76] transition-colors pr-8 cursor-pointer"
              >
                <option value="All Locations">All Locations</option>
                <option value="Kochi">Kochi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5. Condition */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
              Condition
            </label>
            <div className="relative">
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full appearance-none bg-[#1d1d1d] hover:bg-[#232323] border border-neutral-700/60 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-[#deba76] transition-colors pr-8 cursor-pointer"
              >
                <option value="Any Condition">Any Condition</option>
                <option value="Brand New">Brand New</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 6. Gold Search Button */}
          <div className="pt-2 sm:pt-0">
            <button
              type="button"
              className="w-full h-[46px] bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
              aria-label="Search Vehicles"
            >
              <svg
                className="w-5 h-5 text-neutral-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
