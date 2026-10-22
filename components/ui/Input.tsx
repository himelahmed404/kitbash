import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, leftIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          aria-invalid={error ? 'true' : undefined}
          className={cn(
            'w-full bg-paper text-ink font-sans text-base border-3 border-ink px-4 py-3 transition-all placeholder:text-smoke',
            'focus:outline-none focus:shadow-brutal-sm focus:border-ink',
            'disabled:bg-fog disabled:text-smoke disabled:cursor-not-allowed',
            error && 'border-danger focus:border-danger focus:shadow-[3px_3px_0_0_#E5162E]',
            leftIcon && 'pl-11',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
