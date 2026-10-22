import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'plain' | 'sun' | 'bubblegum' | 'mint' | 'ink';
}

export function Tag({ className, tone = 'plain', children, ...props }: TagProps) {
  const toneStyles = {
    plain: 'bg-paper text-ink border-ink',
    sun: 'bg-sun text-ink border-ink',
    bubblegum: 'bg-bubblegum text-ink border-ink',
    mint: 'bg-mint text-ink border-ink',
    ink: 'bg-ink text-paper border-ink',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium text-[11px] leading-none uppercase tracking-wider px-2 py-1 border-2 select-none',
        toneStyles[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
