import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'paper' | 'cream' | 'fog' | 'sun';
}

export function Section({
  className,
  tone = 'paper',
  children,
  ...props
}: SectionProps) {
  const toneBg = {
    paper: 'bg-paper',
    cream: 'bg-cream',
    fog: 'bg-fog',
    sun: 'bg-sun',
  };

  return (
    <section
      className={cn('py-16 md:py-24 lg:py-28 relative overflow-hidden', toneBg[tone], className)}
      {...props}
    >
      {children}
    </section>
  );
}
