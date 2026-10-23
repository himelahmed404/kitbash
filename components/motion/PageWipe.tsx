'use client';

import * as React from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageWipeProps {
  children: React.ReactNode;
}

export function PageWipe({ children }: PageWipeProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !overlayRef.current) return;

    const overlay = overlayRef.current;
    
    // Quick enter wipe: starts covering, then slides off the top
    gsap.set(overlay, { yPercent: 0, display: 'block' });
    gsap.to(overlay, {
      yPercent: -100,
      duration: 0.55,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(overlay, { display: 'none' });
      },
    });

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0.9, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: 0.15 }
      );
    }
  }, [reduced]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none bg-sun border-b-3 border-ink hidden"
        aria-hidden="true"
      />
      <div ref={contentRef} className="w-full flex-1 flex flex-col">
        {children}
      </div>
    </>
  );
}
