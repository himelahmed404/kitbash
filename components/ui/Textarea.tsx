import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={error ? 'true' : undefined}
        className={cn(
          'w-full bg-paper text-ink font-sans text-base border-3 border-ink p-4 transition-all placeholder:text-smoke resize-y min-h-[100px]',
          'focus:outline-none focus:shadow-brutal-sm focus:border-ink',
          'disabled:bg-fog disabled:text-smoke disabled:cursor-not-allowed',
          error && 'border-danger focus:border-danger focus:shadow-[3px_3px_0_0_#E5162E]',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
