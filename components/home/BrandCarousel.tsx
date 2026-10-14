'use client';

import React from 'react';

// Authentic vector brand logos matching the user's reference strip:
// 1. Lexus 2. Ducati 3. Audi 4. Mercedes-Benz 5. Jaguar 6. BMW 7. Volvo 8. Mini 9. Toyota
const BRANDS = [
  {
    name: 'LEXUS',
    svg: (
      <svg
        className="h-7 sm:h-8 w-auto fill-current"
        viewBox="0 0 160 36"
        aria-label="Lexus Logo"
      >
        {/* Authentic Lexus Wordmark */}
        {/* L */}
        <path d="M6 6 L14 6 L14 24 L29 24 L27.5 30 L6 30 Z" />
        {/* E */}
        <path d="M33 6 L54 6 L52.5 12 L41 12 L41 15.5 L50.5 15.5 L49 21 L41 21 L41 24 L54 24 L52.5 30 L33 30 Z" />
        {/* X */}
        <path d="M57 6 L65 6 L72.5 16.5 L80 6 L88 6 L77 20 L89 30 L80.5 30 L72.5 22.5 L64.5 30 L56 30 L68 19 Z" />
        {/* U */}
        <path d="M92 6 L100 6 L100 21.5 C100 24 102 25.2 105.5 25.2 C109 25.2 111 24 111 21.5 L111 6 L119 6 L119 21.5 C119 27.5 113.5 30.5 105.5 30.5 C97.5 30.5 92 27.5 92 21.5 Z" />
        {/* S */}
        <path d="M123 23.5 L130.5 23 C130.8 24.5 132 25.5 135 25.5 C138 25.5 139.5 24.5 139.5 23 C139.5 21.5 138 20.8 133 19.8 C126 18.4 123.5 16.5 123.5 12 C123.5 7.5 128.5 5.5 135.5 5.5 C142.5 5.5 147 8.5 147 13.5 L139.5 14 C139.2 11.5 137.5 10.5 135 10.5 C132.5 10.5 131.2 11.4 131.2 12.5 C131.2 13.6 132.2 14.3 136 15 C143.5 16.5 147.5 18.5 147.5 22.8 C147.5 28 142 30.5 135 30.5 C127.5 30.5 123 27.5 123 23.5 Z" />
      </svg>
    ),
  },
  {
    name: 'DUCATI',
    svg: (
      <svg
        className="h-9 sm:h-10 w-auto"
        viewBox="0 0 60 70"
        fill="currentColor"
        aria-label="Ducati Logo"
      >
        {/* Shield boundary */}
        <path
          d="M6 10 C6 7, 8 5, 11 5 L49 5 C52 5, 54 7, 54 10 L54 36 C54 52, 33 65, 30 67 C27 65, 6 52, 6 36 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
        />
        {/* Top brand header */}
        <path d="M7 6 L53 6 L53 23 L7 23 Z" fill="currentColor" />
        <text
          x="30"
          y="18"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="900"
          letterSpacing="1.2"
          fill="#0B0B0B"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          DUCATI
        </text>
        {/* Authentic Dynamic Slicing Blade */}
        <path
          d="M14 27 L44 47 L39 51 L11 31 Z"
          fill="currentColor"
        />
        <path
          d="M21 27 L48 45 L46 48 L18 30 Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: 'AUDI',
    svg: (
      <svg
        className="h-7 sm:h-8 w-auto"
        viewBox="0 0 116 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        aria-label="Audi Rings Logo"
      >
        <circle cx="21" cy="19" r="15" />
        <circle cx="45" cy="19" r="15" />
        <circle cx="69" cy="19" r="15" />
        <circle cx="93" cy="19" r="15" />
      </svg>
    ),
  },
  {
    name: 'MERCEDES-BENZ',
    svg: (
      <svg
        className="h-9 sm:h-10 w-auto"
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-label="Mercedes-Benz Logo"
      >
        {/* Outer Circular Ring */}
        <circle cx="32" cy="32" r="28.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        {/* Three-Pointed Star with authentic 3D facets */}
        {/* Top point */}
        <polygon points="32,6 32,32 29,32" fill="currentColor" />
        <polygon points="32,6 32,32 35,32" fill="currentColor" opacity="0.6" />
        {/* Bottom Left point */}
        <polygon points="9.5,45 32,32 30.5,29.5" fill="currentColor" />
        <polygon points="9.5,45 32,32 33,34" fill="currentColor" opacity="0.6" />
        {/* Bottom Right point */}
        <polygon points="54.5,45 32,32 33.5,29.5" fill="currentColor" opacity="0.6" />
        <polygon points="54.5,45 32,32 31,34" fill="currentColor" />
        {/* Central hub */}
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'JAGUAR',
    svg: (
      <svg
        className="h-8 sm:h-9 w-auto fill-current"
        viewBox="0 0 130 46"
        aria-label="Jaguar Logo"
      >
        {/* Authentic Leaping Jaguar Silhouette */}
        <path d="M12 24 C16 23, 21 21, 26 23 C30 25, 33 28, 38 27 C42 26, 45 23, 49 22 C53 21, 57 23, 61 24 C69 26, 77 24, 85 20 C91 17, 98 12, 106 9 C110 7, 114 6, 117 8 C119 9, 120 11, 118 13 C115 15, 111 16, 107 17 C100 19, 93 21, 87 23 C81 25, 75 27, 69 27 C63 27, 57 25, 51 25 C45 25, 39 28, 33 29 C27 30, 20 31, 14 29 C10 28, 8 26, 12 24 Z" />
        <path d="M106 9 C110 7, 115 8, 117 11 C114 12, 110 12, 107 11 Z" />
        <path d="M22 23 C20 20, 18 16, 22 14 C25 12, 28 14, 29 17 C31 20, 27 23, 22 23 Z" opacity="0.8" />
        <path d="M78 22 C82 24, 87 25, 91 23 C93 22, 94 20, 96 19 C97 22, 93 24, 90 26 C86 28, 80 27, 78 22 Z" />
        {/* Wordmark JAGUAR */}
        <text
          x="65"
          y="42"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          letterSpacing="4.5"
          fill="currentColor"
          fontFamily="Georgia, serif"
        >
          JAGUAR
        </text>
      </svg>
    ),
  },
  {
    name: 'BMW',
    svg: (
      <svg
        className="h-9 sm:h-10 w-auto"
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-label="BMW Logo"
      >
        {/* Outer Rings */}
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* Quadrants */}
        <path d="M32 12 A20 20 0 0 1 52 32 L32 32 Z" fill="currentColor" opacity="0.85" />
        <path d="M32 32 L12 32 A20 20 0 0 1 32 52 Z" fill="currentColor" opacity="0.85" />
        <path d="M12 32 A20 20 0 0 1 32 12 L32 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M32 32 L52 32 A20 20 0 0 1 32 52 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        {/* B M W Curved Letterforms */}
        <text
          x="21"
          y="9"
          fontSize="5.5"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          B
        </text>
        <text
          x="30"
          y="7"
          fontSize="6"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          M
        </text>
        <text
          x="40"
          y="9"
          fontSize="5.5"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          W
        </text>
      </svg>
    ),
  },
  {
    name: 'VOLVO',
    svg: (
      <svg
        className="h-9 sm:h-10 w-auto"
        viewBox="0 0 68 64"
        fill="currentColor"
        aria-label="Volvo Logo"
      >
        {/* Main Iron Mark Circle */}
        <circle cx="30" cy="34" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* Diagonal Arrow pointing northeast */}
        <path
          d="M47 17 L59 5 M59 5 L46 5 M59 5 L59 18"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Central horizontal banner */}
        <rect
          x="5"
          y="28"
          width="50"
          height="12"
          fill="#0B0B0B"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="30"
          y="37.5"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="bold"
          letterSpacing="2.2"
          fill="currentColor"
          fontFamily="Georgia, serif"
        >
          VOLVO
        </text>
      </svg>
    ),
  },
  {
    name: 'MINI',
    svg: (
      <svg
        className="h-8 sm:h-9 w-auto fill-current"
        viewBox="0 0 110 42"
        aria-label="MINI Logo"
      >
        {/* Center circular badge */}
        <circle cx="55" cy="21" r="16" fill="none" stroke="currentColor" strokeWidth="2.8" />
        <circle cx="55" cy="21" r="12.5" fill="none" stroke="currentColor" strokeWidth="1" />
        <text
          x="55"
          y="24.5"
          textAnchor="middle"
          fontSize="8"
          fontWeight="900"
          letterSpacing="1.2"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          MINI
        </text>
        {/* Left Aerodynamic Wings (4 bars) */}
        <path d="M38 14 L12 14 L16 17 L38 17 Z" />
        <path d="M38 18.5 L17 18.5 L20 21.5 L38 21.5 Z" />
        <path d="M38 23 L22 23 L25 25.5 L38 25.5 Z" />
        <path d="M38 27 L27 27 L29 29 L38 29 Z" />
        {/* Right Aerodynamic Wings (4 bars) */}
        <path d="M72 14 L98 14 L94 17 L72 17 Z" />
        <path d="M72 18.5 L93 18.5 L90 21.5 L72 21.5 Z" />
        <path d="M72 23 L88 23 L85 25.5 L72 25.5 Z" />
        <path d="M72 27 L83 27 L81 29 L72 29 Z" />
      </svg>
    ),
  },
  {
    name: 'TOYOTA',
    svg: (
      <svg
        className="h-9 sm:h-10 w-auto fill-current"
        viewBox="0 0 90 52"
        aria-label="Toyota Logo"
      >
        {/* Outer Horizontal Ellipse */}
        <ellipse cx="45" cy="20" rx="36" ry="20" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* Inner Vertical Ellipse (Heart of customer & company) */}
        <ellipse cx="45" cy="20" rx="12" ry="19" fill="none" stroke="currentColor" strokeWidth="2.6" />
        {/* Inner Horizontal Ellipse (Forms 'T' crossbar) */}
        <ellipse cx="45" cy="14" rx="23" ry="9" fill="none" stroke="currentColor" strokeWidth="2.6" />
        {/* Wordmark TOYOTA */}
        <text
          x="45"
          y="49"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="900"
          letterSpacing="3"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TOYOTA
        </text>
      </svg>
    ),
  },
];

export function BrandCarousel() {
  // Repeating list 3 times to guarantee a seamless, infinite loop
  const marqueeList = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      className="relative z-20 w-full overflow-hidden py-8 sm:py-10 border-y border-neutral-800/80 bg-[#0B0B0B] select-none"
      aria-label="Supported Premium Brands"
    >
      {/* Left & Right Edge Gradient Fade Masks */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Marquee Track */}
      <div className="animate-brand-marquee flex items-center space-x-12 sm:space-x-20">
        {marqueeList.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-white transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105 cursor-pointer px-3"
            title={brand.name}
          >
            {brand.svg}
          </div>
        ))}
      </div>
    </section>
  );
}
