'use client';

import * as React from 'react';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  CATEGORIES,
} from '@/types/kit';
import type { Category } from '@/types/kit';
import {
  PRICE_BUCKETS,
  SORT_OPTIONS,
  type PriceBucket,
  type SortOption,
} from '@/lib/filters';
import { RotateCcw } from 'lucide-react';

interface KitFiltersProps {
  category: Category | 'all';
  price: PriceBucket;
  sort: SortOption;
  resultCount: number;
  onCategoryChange: (cat: Category | 'all') => void;
  onPriceChange: (bucket: PriceBucket) => void;
  onSortChange: (sort: SortOption) => void;
  onReset: () => void;
  className?: string;
}

export function KitFilters({
  category,
  price,
  sort,
  resultCount,
  onCategoryChange,
  onPriceChange,
  onSortChange,
  onReset,
  className,
}: KitFiltersProps) {
  const hasActiveFilters =
    category !== 'all' || price !== 'any' || sort !== 'newest';

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Category chips */}
      <div className="flex flex-wrap items-center gap-2">
        <Chip
          selected={category === 'all'}
          onClick={() => onCategoryChange('all')}
        >
          All
        </Chip>
        {CATEGORIES.map((cat) => (
          <Chip
            key={cat.value}
            selected={category === cat.value}
            onClick={() => onCategoryChange(cat.value)}
          >
            {cat.label}
          </Chip>
        ))}
      </div>

      {/* Price + Sort + Count + Reset */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Price chips */}
        <div className="flex flex-wrap items-center gap-2">
          {PRICE_BUCKETS.map((bucket) => (
            <Chip
              key={bucket.value}
              selected={price === bucket.value}
              onClick={() => onPriceChange(bucket.value)}
            >
              {bucket.label}
            </Chip>
          ))}
        </div>

        {/* Sort select */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="h-10 px-3 text-sm font-mono font-bold uppercase tracking-wider bg-paper text-ink border-3 border-ink cursor-pointer focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-3"
          aria-label="Sort order"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Result count */}
        <span
          className="font-mono text-sm text-graphite tracking-wide"
          aria-live="polite"
        >
          {resultCount} {resultCount === 1 ? 'kit' : 'kits'}
        </span>

        {/* Reset */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="ml-auto"
          >
            <RotateCcw className="w-4 h-4" strokeWidth={2.5} />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
