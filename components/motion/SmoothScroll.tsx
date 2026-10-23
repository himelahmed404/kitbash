'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from '@/lib/gsap';

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * SmoothScroll:
 * Clean, native hardware-accelerated scroll manager.
 * Preserves 100% native laptop trackpad momentum, gestures, and touch interactions
 * without artificial wheel-interception that causes freezing or jitter.
 * Automatically synchronizes GSAP ScrollTrigger on route changes, resize, and font loading.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  // Reset scroll on route changes and refresh ScrollTrigger triggers
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Synchronize ScrollTrigger with layout settling and web fonts
  React.useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{children}</>;
}
