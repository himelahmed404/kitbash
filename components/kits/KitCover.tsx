'use client';

import * as React from 'react';
import type { Category } from '@/types/kit';
import { hashToBrandTone } from '@/lib/utils';

const BRAND_COLORS: Record<'sun' | 'bubblegum' | 'mint', string> = {
  sun: '#FFD600',
  bubblegum: '#FF5FA2',
  mint: '#5EEAD4',
};

interface KitCoverProps {
  category: Category;
  kitId: string;
  className?: string;
}

/**
 * Deterministic brand-colored SVG cover generator.
 * Recipe depends on category, bg color from kit ID hash.
 */
export function KitCover({ category, kitId, className }: KitCoverProps) {
  const tone = hashToBrandTone(kitId);
  const bg = BRAND_COLORS[tone];

  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="400" height="250" fill={bg} />
      {category === 'ui-kit' && <UIKitShapes />}
      {category === 'icons' && <IconShapes />}
      {category === 'fonts' && <FontShapes />}
      {category === 'templates' && <TemplateShapes />}
    </svg>
  );
}

/** UI Kit: overlapping circle + square (Orbit style) */
function UIKitShapes() {
  return (
    <g className="transition-transform duration-300 group-hover:translate-x-2">
      {/* Shadow clone */}
      <rect
        x="160"
        y="80"
        width="80"
        height="80"
        fill="#111111"
        transform="translate(5, 5)"
      />
      <rect
        x="160"
        y="80"
        width="80"
        height="80"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="3"
      />
      {/* Shadow clone for circle */}
      <circle cx="220" cy="140" r="42" fill="#111111" transform="translate(4, 4)" />
      <circle
        cx="220"
        cy="140"
        r="42"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="3"
      />
      {/* Small decorative squares */}
      <rect x="145" y="170" width="14" height="14" fill="#111111" />
      <rect x="265" y="75" width="10" height="10" fill="#111111" />
    </g>
  );
}

/** Icon Pack: 3×3 grid of geometric mini-glyphs */
function IconShapes() {
  const size = 28;
  const gap = 38;
  const startX = 130;
  const startY = 55;

  return (
    <g>
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const x = startX + col * gap;
        const y = startY + row * gap;
        const shapes = [
          // circle
          <circle key={i} cx={x + size / 2} cy={y + size / 2} r={size / 2 - 2} fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />,
          // square
          <rect key={i} x={x + 2} y={y + 2} width={size - 4} height={size - 4} fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />,
          // triangle
          <polygon key={i} points={`${x + size / 2},${y + 3} ${x + size - 3},${y + size - 3} ${x + 3},${y + size - 3}`} fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />,
          // plus
          <g key={i}>
            <line x1={x + size / 2} y1={y + 4} x2={x + size / 2} y2={y + size - 4} stroke="#111111" strokeWidth="3" strokeLinecap="square" />
            <line x1={x + 4} y1={y + size / 2} x2={x + size - 4} y2={y + size / 2} stroke="#111111" strokeWidth="3" strokeLinecap="square" />
          </g>,
          // diamond
          <rect key={i} x={x + 5} y={y + 5} width={size - 10} height={size - 10} fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" transform={`rotate(45, ${x + size / 2}, ${y + size / 2})`} />,
          // star (simplified as asterisk)
          <g key={i}>
            <line x1={x + size / 2} y1={y + 3} x2={x + size / 2} y2={y + size - 3} stroke="#111111" strokeWidth="2.5" />
            <line x1={x + 4} y1={y + size / 2} x2={x + size - 4} y2={y + size / 2} stroke="#111111" strokeWidth="2.5" />
            <line x1={x + 6} y1={y + 6} x2={x + size - 6} y2={y + size - 6} stroke="#111111" strokeWidth="2" />
            <line x1={x + size - 6} y1={y + 6} x2={x + 6} y2={y + size - 6} stroke="#111111" strokeWidth="2" />
          </g>,
        ];
        return (
          <React.Fragment key={i}>
            {shapes[i % shapes.length]}
          </React.Fragment>
        );
      })}
    </g>
  );
}

/** Font: large "Aa" in bold text over a baseline grid */
function FontShapes() {
  return (
    <g>
      {/* Baseline grid lines */}
      {[90, 120, 150, 180].map((y) => (
        <line
          key={y}
          x1="120"
          y1={y}
          x2="280"
          y2={y}
          stroke="#111111"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />
      ))}
      {/* Large Aa */}
      <text
        x="200"
        y="170"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif"
        fontSize="80"
        fontWeight="700"
        fill="#111111"
      >
        Aa
      </text>
      {/* Small x-height indicator */}
      <rect x="125" y="105" width="6" height="40" fill="#111111" opacity="0.15" />
      <rect x="269" y="105" width="6" height="40" fill="#111111" opacity="0.15" />
    </g>
  );
}

/** Template: three stacked offset window frames */
function TemplateShapes() {
  const frames = [
    { x: 120, y: 50, opacity: 0.2 },
    { x: 140, y: 70, opacity: 0.4 },
    { x: 160, y: 90, opacity: 1 },
  ];

  return (
    <g>
      {frames.map((f, i) => (
        <g key={i} opacity={f.opacity}>
          {/* Shadow */}
          <rect
            x={f.x + 4}
            y={f.y + 4}
            width="120"
            height="90"
            fill="#111111"
          />
          {/* Frame */}
          <rect
            x={f.x}
            y={f.y}
            width="120"
            height="90"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="3"
          />
          {/* Title bar */}
          <rect
            x={f.x}
            y={f.y}
            width="120"
            height="20"
            fill="#111111"
          />
          {/* Window dots */}
          <circle cx={f.x + 12} cy={f.y + 10} r="3" fill="#FFD600" />
          <circle cx={f.x + 24} cy={f.y + 10} r="3" fill="#FF5FA2" />
          <circle cx={f.x + 36} cy={f.y + 10} r="3" fill="#5EEAD4" />
          {/* Content lines */}
          <rect x={f.x + 10} y={f.y + 30} width="60" height="6" fill="#F2F2EE" />
          <rect x={f.x + 10} y={f.y + 44} width="80" height="6" fill="#F2F2EE" />
          <rect x={f.x + 10} y={f.y + 58} width="45" height="6" fill="#F2F2EE" />
        </g>
      ))}
    </g>
  );
}
