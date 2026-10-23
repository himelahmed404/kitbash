'use client';

import * as React from 'react';
import { gsap, SplitText } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  className?: string;
  delay?: number;
}

export function SplitHeading({
  children,
  as: Component = 'h1',
  className = '',
  delay = 0.1,
}: SplitHeadingProps) {
  const headingRef = React.useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (reduced || !headingRef.current) return;

    const el = headingRef.current;
    let split: InstanceType<typeof SplitText> | null = null;

    try {
      split = new SplitText(el, {
        type: 'lines,words',
        linesClass: 'overflow-hidden leading-tight',
        wordsClass: 'inline-block will-change-transform',
      });

      gsap.from(split.words, {
        yPercent: 120,
        opacity: 0,
        duration: 0.85,
        stagger: 0.035,
        delay,
        ease: 'power3.out',
      });
    } catch {
      // Fallback simple reveal if SplitText fails
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });
    }

    return () => {
      split?.revert();
    };
  }, [reduced, delay, children]);

  return React.createElement(
    Component,
    { ref: headingRef, className },
    children
  );
}
