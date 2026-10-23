'use client';

import * as React from 'react';

/**
 * ScenePoster:
 * Static crisp SVG composition of the kit assembly Act 0 pose.
 * Renders during SSR, as dynamic loading fallback, or when reduced motion is enabled.
 */
export function ScenePoster() {
  return (
    <div
      className="w-full h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 items-center pointer-events-none select-none opacity-95"
      aria-hidden="true"
    >
      <div className="md:col-start-8 md:col-span-5 flex items-center justify-center py-6">
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] h-auto drop-shadow-sm"
        >
        {/* Background ambient confetti bits */}
        <rect x="80" y="110" width="14" height="14" fill="#FFD600" stroke="#111" strokeWidth="2.5" transform="rotate(15 80 110)" />
        <rect x="510" y="140" width="16" height="16" fill="#5EEAD4" stroke="#111" strokeWidth="2.5" transform="rotate(-25 510 140)" />
        <rect x="130" y="470" width="12" height="12" fill="#FF5FA2" stroke="#111" strokeWidth="2.5" transform="rotate(40 130 470)" />
        <rect x="490" y="430" width="14" height="14" fill="#FFD600" stroke="#111" strokeWidth="2.5" transform="rotate(-10 490 430)" />

        {/* 1. Mint Ring (Torus) */}
        <g transform="translate(180, 140)">
          {/* Shadow */}
          <ellipse cx="6" cy="6" rx="55" ry="38" fill="#111" />
          {/* Outer ring */}
          <ellipse cx="0" cy="0" rx="55" ry="38" fill="#5EEAD4" stroke="#111" strokeWidth="3.5" />
          {/* Inner hole */}
          <ellipse cx="0" cy="0" rx="24" ry="16" fill="#FFF9DB" stroke="#111" strokeWidth="3.5" />
        </g>

        {/* 2. Bubblegum Ball (Sphere) */}
        <g transform="translate(430, 170)">
          {/* Shadow */}
          <circle cx="8" cy="8" r="48" fill="#111" />
          {/* Ball */}
          <circle cx="0" cy="0" r="48" fill="#FF5FA2" stroke="#111" strokeWidth="3.5" />
          {/* Highlight arc */}
          <path
            d="M -24 -24 A 36 36 0 0 1 20 -28"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* 3. Sun Cube Base */}
        <g transform="translate(280, 310)">
          {/* Shadow clone */}
          <rect x="12" y="12" width="140" height="140" fill="#111" />
          {/* Main cube */}
          <rect
            x="0"
            y="0"
            width="140"
            height="140"
            fill="#FFD600"
            stroke="#111"
            strokeWidth="4"
          />
          {/* Iso facet lines */}
          <line x1="0" y1="0" x2="140" y2="140" stroke="#111" strokeWidth="2" strokeDasharray="6 6" />
        </g>

        {/* 4. Ink Lid Slab */}
        <g transform="translate(390, 290)">
          {/* Shadow */}
          <rect x="8" y="8" width="130" height="28" fill="#000" />
          {/* Slab */}
          <rect x="0" y="0" width="130" height="28" fill="#111" stroke="#FFD600" strokeWidth="3" />
        </g>

        {/* 5. Typography Glyph "Aa" */}
        <g transform="translate(425, 260)">
          <rect x="0" y="0" width="60" height="40" fill="#FFD600" stroke="#111" strokeWidth="3" />
          <text
            x="30"
            y="26"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="bold"
            fontSize="22"
            fill="#111"
          >
            Aa
          </text>
        </g>

        {/* 6. Paper Pill (Capsule) */}
        <g transform="translate(400, 430)">
          {/* Shadow */}
          <rect x="8" y="8" width="110" height="50" rx="25" fill="#111" />
          {/* Capsule */}
          <rect x="0" y="0" width="110" height="50" rx="25" fill="#FFFFFF" stroke="#111" strokeWidth="3.5" />
          {/* Divider */}
          <line x1="55" y1="0" x2="55" y2="50" stroke="#111" strokeWidth="3" />
        </g>
      </svg>
      </div>
    </div>
  );
}
