'use client';

import * as React from 'react';

interface ShapeBurstProps {
  active: boolean;
  onComplete?: () => void;
}

const PARTICLES = [
  { shape: 'square', bg: 'bg-sun', angle: 0, distance: 70 },
  { shape: 'circle', bg: 'bg-bubblegum', angle: 30, distance: 85 },
  { shape: 'diamond', bg: 'bg-mint', angle: 60, distance: 65 },
  { shape: 'square', bg: 'bg-ink', angle: 90, distance: 75 },
  { shape: 'circle', bg: 'bg-sun', angle: 120, distance: 90 },
  { shape: 'diamond', bg: 'bg-bubblegum', angle: 150, distance: 70 },
  { shape: 'square', bg: 'bg-mint', angle: 180, distance: 80 },
  { shape: 'circle', bg: 'bg-ink', angle: 210, distance: 65 },
  { shape: 'diamond', bg: 'bg-sun', angle: 240, distance: 85 },
  { shape: 'square', bg: 'bg-bubblegum', angle: 270, distance: 75 },
  { shape: 'circle', bg: 'bg-mint', angle: 300, distance: 90 },
  { shape: 'diamond', bg: 'bg-ink', angle: 330, distance: 70 },
];

export function ShapeBurst({ active, onComplete }: ShapeBurstProps) {
  React.useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      onComplete?.();
    }, 750);
    return () => clearTimeout(timer);
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible"
    >
      {PARTICLES.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * p.distance;
        const ty = Math.sin(rad) * p.distance;

        return (
          <span
            key={i}
            className={`absolute block border-2 border-ink ${p.bg} ${
              p.shape === 'circle'
                ? 'rounded-full w-3 h-3'
                : p.shape === 'diamond'
                  ? 'w-3 h-3 rotate-45'
                  : 'w-3 h-3'
            }`}
            style={{
              animation: `shapeBurstParticle 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
              ['--tx' as string]: `${tx}px`,
              ['--ty' as string]: `${ty}px`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes shapeBurstParticle {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(270deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
