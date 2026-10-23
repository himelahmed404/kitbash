'use client';

import * as React from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  duration = 0.7,
}: RevealProps) {
  const elRef = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !elRef.current) return;

    const el = elRef.current;
    gsap.set(el, { y, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'expo.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [reduced, delay, y, duration]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
