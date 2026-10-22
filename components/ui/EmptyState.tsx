import * as React from 'react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-paper border-3 border-ink shadow-brutal',
        className
      )}
    >
      {/* 3-shape graphic composition */}
      <div className="flex items-center gap-3 mb-6" aria-hidden="true">
        <div className="w-10 h-10 bg-sun border-3 border-ink shadow-brutal-sm rotate-6" />
        <div className="w-10 h-10 bg-bubblegum rounded-full border-3 border-ink shadow-brutal-sm -translate-y-2" />
        <div className="w-10 h-10 bg-mint border-3 border-ink shadow-brutal-sm -rotate-6" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-sans text-ink mb-2">
        {title}
      </h3>
      <p className="font-sans text-graphite max-w-[42ch] text-sm sm:text-base mb-6">
        {description}
      </p>

      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
