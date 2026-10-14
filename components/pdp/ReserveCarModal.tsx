'use client';

import React, { useState } from 'react';
import { VehicleItem } from '@/lib/data/vehiclesData';

interface ReserveCarModalProps {
  vehicle: VehicleItem;
  isOpen: boolean;
  onClose: () => void;
}

export function ReserveCarModal({ vehicle, isOpen, onClose }: ReserveCarModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [serviceType, setServiceType] = useState<'showroom' | 'doorstep' | 'video'>('showroom');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#141414] rounded-3xl border border-neutral-800 p-6 sm:p-8 text-white shadow-2xl animate-scaleUp">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#deba76] font-semibold block mb-1">
            PRIORITY HOLD & BOOKING
          </span>
          <h2 className="text-2xl font-serif font-medium">
            Reserve {vehicle.name}
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Lock in this listing with a 100% refundable token deposit of ₹ 50,000.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 mx-auto flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-serif text-white">Reservation Request Confirmed!</h3>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto">
              Our Senior Private Concierge is preparing the digital dossier and will contact you at <strong>{phone}</strong> to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                Preferred Interaction
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('showroom')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    serviceType === 'showroom'
                      ? 'border-[#deba76] bg-[#deba76]/10 text-white'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  Showroom Visit
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('doorstep')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    serviceType === 'doorstep'
                      ? 'border-[#deba76] bg-[#deba76]/10 text-white'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  Doorstep Drive
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('video')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    serviceType === 'video'
                      ? 'border-[#deba76] bg-[#deba76]/10 text-white'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  Video Tour
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-neutral-900 border border-neutral-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#deba76]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-neutral-900 border border-neutral-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#deba76]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, Delhi"
                  className="w-full bg-neutral-900 border border-neutral-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#deba76]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
              🛡️ <strong>Zero Risk Policy:</strong> Token deposit is 100% refundable at any time prior to delivery. No processing charges or cancellation fees.
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-[#deba76]/15"
            >
              Confirm Reservation & Hold Listing
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
