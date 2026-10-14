'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface VipNumberResult {
  plate: string;
  state: string;
  price: string;
  status: 'Available' | 'Reserved' | 'In Demand';
  numerologySum: number;
}

const SAMPLE_VIP_NUMBERS: Record<string, VipNumberResult[]> = {
  '0001': [
    { plate: 'DL 01 AA 0001', state: 'Delhi RTO 01', price: '₹ 18,50,000', status: 'Available', numerologySum: 1 },
    { plate: 'MH 02 CZ 0001', state: 'Mumbai West', price: '₹ 21,00,000', status: 'In Demand', numerologySum: 1 },
    { plate: 'KA 03 MM 0001', state: 'Bangalore East', price: '₹ 16,75,000', status: 'Available', numerologySum: 1 },
  ],
  '0007': [
    { plate: 'DL 03 CA 0007', state: 'Delhi South', price: '₹ 9,50,000', status: 'Available', numerologySum: 7 },
    { plate: 'MH 01 BB 0007', state: 'Mumbai South', price: '₹ 12,00,000', status: 'In Demand', numerologySum: 7 },
  ],
  '7777': [
    { plate: 'MH 04 ER 7777', state: 'Thane RTO', price: '₹ 4,50,000', status: 'Available', numerologySum: 1 },
    { plate: 'KL 07 CD 7777', state: 'Ernakulam', price: '₹ 3,75,000', status: 'Available', numerologySum: 1 },
  ],
  '8055': [
    { plate: 'DL 10 XY 8055', state: 'Delhi West ("BOSS")', price: '₹ 6,25,000', status: 'In Demand', numerologySum: 9 },
  ],
  '9999': [
    { plate: 'HR 26 DQ 9999', state: 'Gurugram', price: '₹ 8,90,000', status: 'Available', numerologySum: 9 },
    { plate: 'KA 01 ZZ 9999', state: 'Bangalore Central', price: '₹ 9,20,000', status: 'Available', numerologySum: 9 },
  ],
};

export function SignatureNumberSection() {
  const [tab, setTab] = useState<'quick' | 'advanced'>('quick');
  const [query, setQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const [searchResults, setSearchResults] = useState<VipNumberResult[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [reservedPlate, setReservedPlate] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setReservedPlate(null);

    setTimeout(() => {
      setIsSearching(false);
      const cleanDigits = query.replace(/\D/g, '').slice(0, 4);

      if (SAMPLE_VIP_NUMBERS[cleanDigits]) {
        setSearchResults(SAMPLE_VIP_NUMBERS[cleanDigits]);
      } else if (cleanDigits.length > 0) {
        // Generate dynamic custom VIP availability quote
        setSearchResults([
          {
            plate: `DL 01 XX ${cleanDigits.padStart(4, '0')}`,
            state: 'Delhi NCR VIP Series',
            price: '₹ 3,50,000 - ₹ 7,50,000',
            status: 'Available',
            numerologySum: cleanDigits.split('').reduce((acc, curr) => acc + Number(curr), 0) % 9 || 9,
          },
          {
            plate: `MH 02 YY ${cleanDigits.padStart(4, '0')}`,
            state: 'Maharashtra VIP Series',
            price: '₹ 4,20,000 - ₹ 8,00,000',
            status: 'In Demand',
            numerologySum: cleanDigits.split('').reduce((acc, curr) => acc + Number(curr), 0) % 9 || 9,
          },
        ]);
      } else {
        // Default popular VIP plates
        setSearchResults([
          ...SAMPLE_VIP_NUMBERS['0001'],
          ...SAMPLE_VIP_NUMBERS['0007'],
        ]);
      }
    }, 350);
  };

  const handleReserve = (plate: string) => {
    setReservedPlate(plate);
  };

  return (
    <section
      className="w-full bg-[#161616] rounded-3xl border border-neutral-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl relative"
      aria-label="Signature Number Plate Search"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, Search Card */}
        <div className="lg:col-span-6 z-10">
          {/* Main Title matching user screenshot */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-2">
            Find Your <br />
            <span className="text-[#f5a623]">Signature Number</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 max-w-lg">
            Secure a unique identity for your vehicle from our curated collection of premium registration numbers.
          </p>

          {/* Search Card Container */}
          <div className="bg-[#212121] rounded-2xl border border-neutral-700/60 p-5 sm:p-7 shadow-xl">
            {/* Tabs matching reference */}
            <div className="flex items-center space-x-6 border-b border-neutral-700/60 pb-3 mb-6">
              <button
                type="button"
                onClick={() => setTab('quick')}
                className={`text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors relative pb-3 -mb-3 ${
                  tab === 'quick'
                    ? 'text-[#f5a623] border-b-2 border-[#f5a623]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                QUICK SEARCH
              </button>
              <button
                type="button"
                onClick={() => setTab('advanced')}
                className={`text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors relative pb-3 -mb-3 ${
                  tab === 'advanced'
                    ? 'text-[#f5a623] border-b-2 border-[#f5a623]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ADVANCED SEARCH
              </button>
            </div>

            {/* Quick Search Form */}
            {tab === 'quick' ? (
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter last 4 digits (e.g. 0001)"
                    maxLength={4}
                    className="w-full bg-[#2a2a2a] border border-neutral-600/60 focus:border-[#f5a623] rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f5a623] hover:bg-[#e0961b] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#f5a623]/20 flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <span>Checking Availability...</span>
                  ) : (
                    <span>Search Availability</span>
                  )}
                </button>
              </form>
            ) : (
              /* Advanced Search Form */
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                      Target State / RTO
                    </label>
                    <select
                      value={stateFilter}
                      onChange={(e) => setStateFilter(e.target.value)}
                      className="w-full bg-[#2a2a2a] border border-neutral-600/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5a623]"
                    >
                      <option value="All">All States (Pan India)</option>
                      <option value="DL">Delhi NCR (DL)</option>
                      <option value="MH">Maharashtra (MH)</option>
                      <option value="KA">Karnataka (KA)</option>
                      <option value="KL">Kerala (KL)</option>
                      <option value="HR">Haryana (HR)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                      Digits Preference
                    </label>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g. 0007, 8055"
                      className="w-full bg-[#2a2a2a] border border-neutral-600/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5a623]"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['0001', '0007', '7777', '8055', '9999'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuery(preset)}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-800 hover:bg-[#f5a623]/20 text-neutral-300 hover:text-[#f5a623] border border-neutral-700"
                    >
                      #{preset}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f5a623] hover:bg-[#e0961b] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#f5a623]/20"
                >
                  Search Availability
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Visual from user reference */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[400px]">
            {/* The Koenigsegg vehicle visual matching the exact user upload */}
            <Image
              src="/images/signature_number_banner.png"
              alt="Koenigsegg Signature VIP Registration Number"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Live Search Results Modal / Drawer if search executed */}
      {searchResults && (
        <div className="mt-8 pt-6 border-t border-neutral-800 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-serif text-white">
              Available VIP Numbers {query ? `for &ldquo;${query}&rdquo;` : ''}
            </h3>
            <button
              type="button"
              onClick={() => setSearchResults(null)}
              className="text-xs text-neutral-400 hover:text-white font-mono"
            >
              Close Results ×
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((result, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#f5a623]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black text-neutral-300 border border-neutral-700">
                      {result.state}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        result.status === 'Available'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      {result.status}
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-white my-1">
                    {result.plate}
                  </p>
                  <p className="text-xs text-neutral-400">
                    Numerology Total: <strong className="text-[#f5a623]">{result.numerologySum}</strong>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#f5a623]">{result.price}</span>
                  <button
                    type="button"
                    onClick={() => handleReserve(result.plate)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase bg-white/10 hover:bg-[#f5a623] text-white hover:text-neutral-950 transition-colors"
                  >
                    {reservedPlate === result.plate ? 'Reserved ✓' : 'Inquire Plate'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {reservedPlate && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs sm:text-sm flex items-center justify-between">
              <span>
                Your request to reserve VIP number plate <strong>{reservedPlate}</strong> has been received. Our concierge will contact you within 15 minutes.
              </span>
              <button
                type="button"
                onClick={() => setReservedPlate(null)}
                className="text-white hover:underline text-xs ml-4"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
