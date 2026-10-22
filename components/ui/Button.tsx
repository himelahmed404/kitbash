'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold tracking-tight select-none cursor-pointer border-3 border-ink transition-all brutal-lift focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 disabled:bg-fog disabled:text-smoke disabled:border-dashed disabled:shadow-none';

    const variantStyles = {
      primary:
        'bg-sun text-ink shadow-brutal-sm hover:shadow-[5px_5px_0_0_#111111]',
      dark:
        'bg-ink text-paper shadow-brutal-sm hover:shadow-[4px_4px_0_0_#FFD600] focus-visible:outline-sun',
      outline:
        'bg-paper text-ink shadow-brutal-sm hover:bg-sun hover:shadow-[5px_5px_0_0_#111111]',
      ghost:
        'border-transparent bg-transparent text-ink shadow-none hover:bg-cream hover:border-ink hover:shadow-brutal-sm',
      danger:
        'bg-danger text-paper shadow-brutal-sm hover:shadow-[5px_5px_0_0_#111111]',
    };

    const sizeStyles = {
      sm: 'h-10 px-3.5 py-1.5 text-sm gap-2',
      md: 'h-12 px-5 py-2.5 text-base gap-2.5',
      lg: 'h-14 px-7 py-3.5 text-lg gap-3',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {loading ? (
          <span className="inline-flex items-center gap-1.5 py-1" aria-label="Loading">
            <span className="w-2.5 h-2.5 bg-sun border-2 border-ink animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 bg-bubblegum border-2 border-ink animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2.5 h-2.5 bg-mint border-2 border-ink animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
