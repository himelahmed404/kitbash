'use client';

import * as React from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.8,
  className = '',
}: CounterProps) {
  const elRef = React.useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const format = React.useCallback(
    (n: number) => {
      const formatted = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();
      return `${prefix}${formatted}${suffix}`;
    },
    [decimals, prefix, suffix]
  );

  React.useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (reduced) {
      el.textContent = format(value);
      return;
    }

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (el) el.textContent = format(obj.val);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value, duration, reduced, format]);

  return (
    <span ref={elRef} className={`tabular-nums font-mono ${className}`}>
      {format(reduced ? value : 0)}
    </span>
  );
}
