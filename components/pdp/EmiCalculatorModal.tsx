'use client';

import React, { useState } from 'react';
import { VehicleItem } from '@/lib/data/vehiclesData';

interface EmiCalculatorModalProps {
  vehicle: VehicleItem;
  isOpen: boolean;
  onClose: () => void;
}

export function EmiCalculatorModal({ vehicle, isOpen, onClose }: EmiCalculatorModalProps) {
  const carPrice = vehicle.priceNumeric;

  // Defaults: 20% down payment, 60 months tenure, 9.5% interest rate
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureMonths, setTenureMonths] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [applied, setApplied] = useState(false);

  if (!isOpen) return null;

  const downPaymentAmount = Math.round((carPrice * downPaymentPercent) / 100);
  const principalAmount = carPrice - downPaymentAmount;

  // Standard EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const monthlyEmi = Math.round(
    (principalAmount * monthlyRate * factor) / (factor - 1)
  );

  const totalPayable = monthlyEmi * tenureMonths;
  const totalInterest = totalPayable - principalAmount;

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#141414] rounded-3xl border border-neutral-800 p-6 sm:p-8 text-white shadow-2xl animate-scaleUp">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#deba76] font-semibold block mb-1">
            VOITURE FINANCIAL SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium">
            Personalized EMI Calculator
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Estimated loan structure for {vehicle.name} ({vehicle.price})
          </p>
        </div>

        {/* Calculated Highlights Box */}
        <div className="p-5 rounded-2xl bg-black border border-neutral-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
              Estimated Monthly Installment
            </span>
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#deba76]">
              {formatRupees(monthlyEmi)}
              <span className="text-sm font-sans text-neutral-400 font-normal"> / month</span>
            </span>
          </div>

          <div className="text-right sm:border-l sm:border-neutral-800 sm:pl-6">
            <p className="text-xs text-neutral-400">Total Interest: <strong className="text-white">{formatRupees(totalInterest)}</strong></p>
            <p className="text-xs text-neutral-400 mt-1">Total Loan Repayment: <strong className="text-white">{formatRupees(totalPayable)}</strong></p>
          </div>
        </div>

        {/* Sliders Form */}
        <div className="space-y-5">
          {/* Down Payment Slider */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-neutral-300">Down Payment ({downPaymentPercent}%)</span>
              <span className="text-[#deba76] font-mono">{formatRupees(downPaymentAmount)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={60}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-[#deba76] bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>Min 10% ({formatRupees(carPrice * 0.1)})</span>
              <span>Max 60% ({formatRupees(carPrice * 0.6)})</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-neutral-300">Loan Tenure</span>
              <span className="text-[#deba76] font-mono">{tenureMonths} Months ({tenureMonths / 12} Years)</span>
            </div>
            <input
              type="range"
              min={12}
              max={84}
              step={12}
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full accent-[#deba76] bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>12 Mo (1 Yr)</span>
              <span>36 Mo (3 Yrs)</span>
              <span>60 Mo (5 Yrs)</span>
              <span>84 Mo (7 Yrs)</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-neutral-300">Annual Interest Rate</span>
              <span className="text-[#deba76] font-mono">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={8.0}
              max={14.0}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#deba76] bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>8.0% (Prime Luxury Tier)</span>
              <span>14.0% (Standard)</span>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleApply}
            className="w-full py-4 px-6 rounded-2xl bg-[#deba76] hover:bg-[#e6ca8d] text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-[#deba76]/15 flex items-center justify-center gap-2"
          >
            {applied ? (
              <span>Application Submitted! Concierge Connecting... ✓</span>
            ) : (
              <span>Apply For Pre-Approved Financing</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
