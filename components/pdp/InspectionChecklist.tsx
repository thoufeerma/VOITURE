'use client';

import React, { useState } from 'react';

export function InspectionChecklist() {
  const [downloaded, setDownloaded] = useState(false);

  const checks = [
    { title: 'Engine & Powertrain', score: '52 / 52 Passed', status: 'Optimal' },
    { title: 'Transmission & Drivetrain', score: '34 / 34 Passed', status: 'Optimal' },
    { title: 'Chassis & Structural Integrity', score: '28 / 28 Passed', status: 'Non-Accidental' },
    { title: 'Suspension & Steering', score: '26 / 26 Passed', status: 'Zero Wear' },
    { title: 'Braking & Electronic Safety', score: '24 / 24 Passed', status: '100% Pad Life' },
    { title: 'Electrical & On-Board Diagnostics', score: '36 / 36 Passed', status: 'Zero Fault Codes' },
  ];

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="w-full bg-[#141414] rounded-3xl border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-neutral-800">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-1">
            PEACE OF MIND GUARANTEE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
            Voiture Certified 200-Point Inspection
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
            Every vehicle in our showroom undergoes rigorous computerized diagnostics and road evaluations by certified German automotive master technicians.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#deba76] border border-[#deba76]/40 hover:border-[#deba76] text-xs font-semibold tracking-wider uppercase transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{downloaded ? 'Report Generated! ✓' : 'Download Inspection PDF'}</span>
        </button>
      </div>

      {/* Checklist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {checks.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">{item.score}</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-mono font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Badges */}
      <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-[#deba76] flex-shrink-0">
            ✓
          </div>
          <span className="text-xs text-neutral-300">Non-Accidental Certified Guarantee</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-[#deba76] flex-shrink-0">
            ✓
          </div>
          <span className="text-xs text-neutral-300">Odometer Genuine & Service History Verified</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-[#deba76] flex-shrink-0">
            ✓
          </div>
          <span className="text-xs text-neutral-300">7-Day Money Back Guarantee Policy</span>
        </div>
      </div>
    </section>
  );
}
