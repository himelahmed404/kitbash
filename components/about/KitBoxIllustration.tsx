import * as React from 'react';

export function KitBoxIllustration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
        aria-label="Blueprint composition of Kitbash modular box assembly"
        role="img"
      >
        {/* Blueprint background grid */}
        <pattern
          id="blueprint-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#111111"
            strokeWidth="0.75"
            strokeOpacity="0.12"
          />
        </pattern>

        <rect
          x="10"
          y="10"
          width="500"
          height="420"
          fill="#FFF9DB"
          stroke="#111111"
          strokeWidth="3"
        />
        <rect
          x="10"
          y="10"
          width="500"
          height="420"
          fill="url(#blueprint-grid)"
        />

        {/* Blueprint Header Ticker */}
        <line x1="10" y1="46" x2="510" y2="46" stroke="#111111" strokeWidth="3" />
        <rect x="22" y="18" width="12" height="12" fill="#FFD600" stroke="#111111" strokeWidth="2" />
        <text
          x="44"
          y="28"
          fill="#111111"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          SPEC // KITBASH ASSEMBLED CHASSIS v2.4
        </text>
        <text
          x="440"
          y="28"
          fill="#111111"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="11"
          fontWeight="700"
        >
          [SEC 01]
        </text>

        {/* Shadow under main box */}
        <rect
          x="106"
          y="236"
          width="280"
          height="140"
          fill="#111111"
        />

        {/* Main Sun Box Base */}
        <rect
          x="96"
          y="226"
          width="280"
          height="140"
          fill="#FFD600"
          stroke="#111111"
          strokeWidth="3"
        />

        {/* Front panel lines on sun box */}
        <line x1="96" y1="280" x2="376" y2="280" stroke="#111111" strokeWidth="2" strokeDasharray="4 4" />
        <text
          x="116"
          y="312"
          fill="#111111"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="13"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          MODULAR CHASSIS · 24 CELLS
        </text>
        <text
          x="116"
          y="336"
          fill="#3A3A3A"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize="10"
        >
          TAILWIND v4 · FIGMA SYNCED · ZERO RADIUS
        </text>

        {/* Floating Bubblegum Sphere (left offset) */}
        <g transform="translate(60, 160)">
          {/* Shadow */}
          <circle cx="44" cy="44" r="36" fill="#111111" />
          {/* Sphere body */}
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="#FF5FA2"
            stroke="#111111"
            strokeWidth="3"
          />
          {/* Highlight ring */}
          <circle cx="28" cy="28" r="10" fill="#FFFFFF" fillOpacity="0.4" />
          <text
            x="24"
            y="45"
            fill="#111111"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="12"
            fontWeight="700"
          >
            ● UI
          </text>
        </g>

        {/* Floating Mint Torus / Ring (right offset) */}
        <g transform="translate(340, 130)">
          {/* Torus shadow */}
          <rect x="18" y="18" width="80" height="80" fill="#111111" />
          {/* Torus body */}
          <rect
            x="12"
            y="12"
            width="80"
            height="80"
            fill="#5EEAD4"
            stroke="#111111"
            strokeWidth="3"
          />
          {/* Inner cutout */}
          <rect
            x="34"
            y="34"
            width="36"
            height="36"
            fill="#FFF9DB"
            stroke="#111111"
            strokeWidth="3"
          />
        </g>

        {/* Ink Lid Slab (hovering above the base box) */}
        <g transform="translate(116, 120)">
          {/* Lid shadow */}
          <rect x="8" y="8" width="240" height="54" fill="#111111" />
          {/* Lid body */}
          <rect
            x="0"
            y="0"
            width="240"
            height="54"
            fill="#111111"
            stroke="#111111"
            strokeWidth="3"
          />
          {/* Typographic Stamp "Aa" on lid */}
          <text
            x="24"
            y="38"
            fill="#FFFFFF"
            fontFamily="var(--font-space-grotesk), sans-serif"
            fontSize="28"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            KITBASH /
          </text>
          <text
            x="166"
            y="38"
            fill="#FFD600"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="20"
            fontWeight="700"
          >
            Aa
          </text>
        </g>

        {/* Floating Paper Capsule Pill */}
        <g transform="translate(230, 60)">
          {/* Capsule shadow */}
          <rect x="6" y="6" width="130" height="42" fill="#111111" />
          {/* Capsule body */}
          <rect
            x="0"
            y="0"
            width="130"
            height="42"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="3"
          />
          <text
            x="14"
            y="26"
            fill="#111111"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="11"
            fontWeight="700"
          >
            ⚡ 100% MODULAR
          </text>
        </g>

        {/* Dimension indicator lines */}
        <g stroke="#111111" strokeWidth="1.5">
          {/* Top bracket */}
          <path d="M 96 216 L 96 206 L 376 206 L 376 216" fill="none" />
          <text
            x="200"
            y="200"
            fill="#111111"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10"
            fontWeight="700"
          >
            WIDTH: 280 UNITS
          </text>

          {/* Right vertical bracket */}
          <path d="M 388 226 L 398 226 L 398 366 L 388 366" fill="none" />
          <text
            x="404"
            y="300"
            fill="#111111"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10"
            fontWeight="700"
          >
            H: 140
          </text>
        </g>

        {/* Blueprint callout stamps */}
        <g>
          <rect x="24" y="380" width="120" height="24" fill="#111111" />
          <text
            x="32"
            y="396"
            fill="#FFD600"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10"
            fontWeight="700"
          >
            FIG 03. ASSEMBLY COMPLETE
          </text>

          <rect x="360" y="380" width="130" height="24" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <text
            x="370"
            y="396"
            fill="#111111"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10"
            fontWeight="700"
          >
            SCALE 1:1 · ZERO BLOAT
          </text>
        </g>
      </svg>
    </div>
  );
}
