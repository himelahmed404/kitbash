'use client';

import * as React from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MarqueeProps {
  items?: string[];
  tone?: 'sun' | 'ink' | 'mint' | 'bubblegum' | 'paper';
  className?: string;
  speed?: number;
  reverseOnScrollUp?: boolean;
}

const DEFAULT_ITEMS = [
  'UI KITS',
  'ICON PACKS',
  'CUSTOM FONTS',
  'APP TEMPLATES',
  'DESIGN SYSTEMS',
  'CODE COMPONENTS',
  'VECTOR ASSETS',
  'WIREFRAME PACKS',
];

const SEPARATORS = ['■', '●', '▲', '◆'];

export function Marquee({
  items = DEFAULT_ITEMS,
  tone = 'ink',
  className = '',
  speed = 40,
  reverseOnScrollUp = true,
}: MarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const contentWidth = track.scrollWidth / 2;

    // Continuous marquee tween
    const tween = gsap.to(track, {
      x: -contentWidth,
      duration: contentWidth / speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        if (!reverseOnScrollUp) return;
        const velocity = self.getVelocity();
        // Scale speed smoothly according to scroll velocity
        const targetScale = velocity === 0 ? 1 : Math.sign(velocity) * Math.min(Math.abs(velocity) / 300 + 1, 3.5);
        
        gsap.to(tween, {
          timeScale: targetScale,
          duration: 0.35,
          overwrite: 'auto',
          onComplete: () => {
            gsap.to(tween, { timeScale: 1, duration: 0.6, ease: 'power1.out' });
          },
        });
      },
    });

    return () => {
      tween.kill();
      trigger.kill();
    };
  }, [reduced, speed, reverseOnScrollUp]);

  const toneClasses = {
    ink: 'bg-ink text-paper border-ink',
    sun: 'bg-sun text-ink border-ink',
    mint: 'bg-mint text-ink border-ink',
    bubblegum: 'bg-bubblegum text-ink border-ink',
    paper: 'bg-paper text-ink border-ink',
  }[tone];

  // Repeat sequence 4 times to ensure seamless infinite looping on ultra-wide screens
  const doubledItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none border-y-3 py-3 ${toneClasses} ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform gap-8 text-sm md:text-base font-mono font-bold tracking-widest uppercase"
      >
        {doubledItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-xs opacity-75">
              {SEPARATORS[idx % SEPARATORS.length]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
