'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  count?: number;
}

export function Chip({
  className,
  selected = false,
  count,
  children,
  onClick,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      role="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold font-mono tracking-tight uppercase border-3 border-ink select-none cursor-pointer transition-all brutal-lift focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-3',
        selected
          ? 'bg-ink text-paper shadow-brutal-sm'
          : 'bg-paper text-ink shadow-brutal-sm hover:bg-cream',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {typeof count === 'number' && (
        <span
          className={cn(
            'text-[10px] px-1.5 py-0.5 border-2 leading-none font-mono',
            selected
              ? 'bg-paper text-ink border-paper'
              : 'bg-fog text-graphite border-ink'
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
