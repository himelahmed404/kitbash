import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-paper border-3 border-ink shadow-brutal transition-all',
        interactive &&
          'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-brutal-lg focus-within:outline-3 focus-within:outline-ink',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
