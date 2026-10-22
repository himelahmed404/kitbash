import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  kicker?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14 flex flex-col',
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow text-graphite mb-2.5 inline-block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink uppercase mb-3">
        {title}
      </h2>
      {kicker && (
        <p className="text-graphite font-sans text-base sm:text-lg max-w-[56ch]">
          {kicker}
        </p>
      )}
    </div>
  );
}
