'use client';

import React, { useState } from 'react';
import { VehicleItem } from '@/lib/data/vehiclesData';

interface PdpHeaderBarProps {
  vehicle: VehicleItem;
  onOpenEmiModal: () => void;
  onOpenReserveModal: () => void;
}

export function PdpHeaderBar({ vehicle, onOpenEmiModal, onOpenReserveModal }: PdpHeaderBarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Voiture Concierge, I am interested in inquiring about the ${vehicle.name} (${vehicle.variant}) listed at ${vehicle.price}. Please share availability and test drive booking details.`
  );

  return (
    <div className="w-full bg-[#141414] rounded-3xl border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left Info: Tag, Title, Price */}
        <div className="max-w-xl">
          {/* Reg Year & EMI Pill matching reference */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 mb-4">
            <span className="text-[#deba76] font-semibold">Reg. Year: {vehicle.regYear}</span>
            <span className="text-neutral-600">|</span>
            <span>EMI STARTS @ <strong className="text-white">{vehicle.emiPerMonth}</strong>/mo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium tracking-tight mb-2">
            {vehicle.name}
          </h1>

          <p className="text-sm font-sans tracking-wide text-neutral-400 mb-4">
            {vehicle.variant} • {vehicle.location}
          </p>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#deba76]">
              {vehicle.price}
            </span>
            <span className="text-xs font-mono uppercase text-neutral-500">
              (Ex-Showroom • Verified Quality)
            </span>
          </div>
        </div>

        {/* Action Buttons Right Box */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 min-w-[260px] sm:min-w-[300px]">
          <button
            type="button"
            onClick={onOpenReserveModal}
            className="w-full py-4 px-6 rounded-2xl bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 font-semibold tracking-wider text-sm uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#deba76]/15 transition-all duration-200 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Reserve The Car</span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={onOpenEmiModal}
              className="py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 text-[#deba76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>EMI Calc</span>
            </button>

            <a
              href={`https://wa.me/919999999908?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.666-.699c.951.52 2.01.815 3.094.815 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.405-4.394 9.8-9.8 9.8-1.705 0-3.308-.439-4.707-1.207l-5.493 1.441 1.468-5.362c-.86-1.455-1.368-3.149-1.368-4.972 0-5.405 4.395-9.8 9.8-9.8 5.406 0 9.8 4.395 9.8 9.8z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919999999908"
              className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-xs text-center flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 9999 9999 08</span>
            </a>

            <button
              type="button"
              onClick={handleShare}
              title="Share listing link"
              className="p-2.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors"
            >
              {copied ? (
                <span className="text-xs text-[#deba76] px-1 font-mono">Copied!</span>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Specs Highlight Bar matching cars.co.in */}
      <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
        {/* Kilometers Driven */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900/40 border border-neutral-800/60">
          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#deba76] flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">Kilometers</p>
            <p className="text-sm sm:text-base font-semibold text-white">{vehicle.kmDriven}</p>
          </div>
        </div>

        {/* Fuel Type */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900/40 border border-neutral-800/60">
          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#deba76] flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">Fuel Type</p>
            <p className="text-sm sm:text-base font-semibold text-white">{vehicle.fuelType}</p>
          </div>
        </div>

        {/* Registration State */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900/40 border border-neutral-800/60">
          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#deba76] flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">Reg. State</p>
            <p className="text-sm sm:text-base font-semibold text-white">{vehicle.regState} ({vehicle.regYear})</p>
          </div>
        </div>

        {/* Transmission / Ownership */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900/40 border border-neutral-800/60">
          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#deba76] flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">Ownership</p>
            <p className="text-sm sm:text-base font-semibold text-white">{vehicle.ownership}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
