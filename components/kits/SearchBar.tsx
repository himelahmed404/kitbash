'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SearchBar({ value, onChange, className }: SearchBarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  // "/" keyboard shortcut to focus search
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(
          (e.target as HTMLElement).tagName
        )
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor="kit-search"
        className="eyebrow text-graphite"
      >
        Search Kits
      </label>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-smoke pointer-events-none"
          strokeWidth={2.5}
        />
        <input
          ref={inputRef}
          id="kit-search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='Search by name, tag…  Press "/"'
          className="w-full h-12 pl-10 pr-10 text-base font-sans text-ink bg-paper border-3 border-ink placeholder:text-smoke focus-visible:outline-none focus-visible:shadow-brutal-sm focus-visible:border-ink transition-shadow"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-smoke hover:text-ink transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
