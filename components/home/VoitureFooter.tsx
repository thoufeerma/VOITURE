'use client';

import React from 'react';

export function VoitureFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-neutral-800 bg-[#0B0B0B] text-neutral-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-neutral-800/80">
          
          {/* Col 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-4">
                <svg
                  className="w-8 h-4 text-[#deba76]"
                  viewBox="0 0 100 40"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M50 38 L42 22 L2 22 L2 18 L44 18 L50 28 L56 18 L98 18 L98 22 L58 22 Z" />
                  <path d="M43 14 L4 14 L4 10 L45 10 L50 20 L55 10 L96 10 L96 14 L57 14 Z" opacity="0.85" />
                  <path d="M44 6 L7 6 L7 2 L46 2 L50 12 L54 2 L93 2 L93 6 L56 6 Z" opacity="0.7" />
                </svg>
                <span className="font-serif tracking-[0.35em] text-base font-semibold text-white uppercase">
                  VOITURE
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-sm leading-relaxed mb-6">
                A premium marketplace for cars and bikes. Discover. Compare. Connect. Drive.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#deba76] flex items-center justify-center text-neutral-400 hover:text-[#deba76] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#deba76] flex items-center justify-center text-neutral-400 hover:text-[#deba76] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#deba76] flex items-center justify-center text-neutral-400 hover:text-[#deba76] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#deba76] flex items-center justify-center text-neutral-400 hover:text-[#deba76] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Browse (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-sans">
              Browse
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bikes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SUVs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Motorcycles</a></li>
            </ul>
          </div>

          {/* Col 3: For Sellers (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-sans">
              For Sellers
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">List Your Vehicle</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dealer Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selling Guide</a></li>
            </ul>
          </div>

          {/* Col 4: Company (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-sans">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Col 5: Legal (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-sans">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light">
          <div>
            © 2024 Voiture. All rights reserved.
          </div>

          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <span>Crafted for those who drive more.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full border border-neutral-700 hover:border-white flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
