'use client';

import * as React from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const ref = React.useRef<LenisRef>(null);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  React.useEffect(() => {
    if (reduced) return;
    const lenis = ref.current?.lenis;
    if (!lenis) return;

    // Connect Lenis scroll to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP ticker
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [reduced]);

  // Handle route changes: scroll to top immediately & refresh ScrollTrigger
  React.useEffect(() => {
    ref.current?.lenis?.scrollTo(0, { immediate: true });
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Refresh ScrollTrigger once fonts are loaded
  React.useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }
  }, []);

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={ref}
      options={{
        autoRaf: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
