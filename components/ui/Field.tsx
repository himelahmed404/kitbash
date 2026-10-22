import * as React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FieldProps {
  id?: string;
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  counter?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({
  id,
  label,
  hint,
  error,
  required,
  counter,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {(label || counter) && (
        <div className="flex items-center justify-between gap-2">
          {label && (
            <label
              htmlFor={id}
              className="font-mono text-xs font-bold uppercase tracking-wider text-ink select-none flex items-center gap-1"
            >
              <span>{label}</span>
              {required && <span className="text-danger" title="Required">*</span>}
            </label>
          )}
          {counter && (
            <span className="font-mono text-[11px] text-graphite ml-auto select-none">
              {counter}
            </span>
          )}
        </div>
      )}

      {children}

      {hint && !error && (
        <p className="font-mono text-xs text-graphite">{hint}</p>
      )}

      {error && (
        <div
          role="alert"
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-danger mt-0.5"
        >
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 stroke-[2.5]" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
