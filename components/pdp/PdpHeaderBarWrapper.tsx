'use client';

import React, { useState } from 'react';
import { VehicleItem } from '@/lib/data/vehiclesData';
import { PdpHeaderBar } from './PdpHeaderBar';
import { EmiCalculatorModal } from './EmiCalculatorModal';
import { ReserveCarModal } from './ReserveCarModal';

interface PdpHeaderBarWrapperProps {
  vehicle: VehicleItem;
}

export function PdpHeaderBarWrapper({ vehicle }: PdpHeaderBarWrapperProps) {
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello Voiture Team, I would like to inquire about reserving the ${vehicle.name} (${vehicle.price}).`
  );

  return (
    <>
      <PdpHeaderBar
        vehicle={vehicle}
        onOpenEmiModal={() => setIsEmiOpen(true)}
        onOpenReserveModal={() => setIsReserveOpen(true)}
      />

      <EmiCalculatorModal
        vehicle={vehicle}
        isOpen={isEmiOpen}
        onClose={() => setIsEmiOpen(false)}
      />

      <ReserveCarModal
        vehicle={vehicle}
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />

      {/* Mobile Sticky Bottom Action Bar (replicating cars.co.in) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-3 sm:p-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsReserveOpen(true)}
          className="flex-1 py-3 px-4 rounded-xl bg-[#deba76] text-neutral-950 font-bold text-xs uppercase tracking-wider text-center"
        >
          Reserve Car • {vehicle.price}
        </button>

        <a
          href={`https://wa.me/919999999908?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-3 rounded-xl bg-[#25D366] text-neutral-950 flex items-center justify-center"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.666-.699c.951.52 2.01.815 3.094.815 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.405-4.394 9.8-9.8 9.8-1.705 0-3.308-.439-4.707-1.207l-5.493 1.441 1.468-5.362c-.86-1.455-1.368-3.149-1.368-4.972 0-5.405 4.395-9.8 9.8-9.8 5.406 0 9.8 4.395 9.8 9.8z" />
          </svg>
        </a>

        <a
          href="tel:+919999999908"
          aria-label="Call Concierge"
          className="p-3 rounded-xl bg-neutral-800 text-white flex items-center justify-center border border-neutral-700"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
