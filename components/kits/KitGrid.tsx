import * as React from 'react';
import type { Kit } from '@/types/kit';
import { cn } from '@/lib/utils';
import { KitCard } from './KitCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

interface KitGridProps {
  kits: Kit[];
  loading?: boolean;
  onReset?: () => void;
  className?: string;
}

export function KitGrid({ kits, loading = false, onReset, className }: KitGridProps) {
  if (loading) {
    return (
      <div
        className={cn(
          'grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          className
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (kits.length === 0) {
    return (
      <EmptyState
        title="No kits match"
        description="Try a different filter or search term to find what you're looking for."
        action={
          onReset ? (
            <Button variant="outline" size="sm" onClick={onReset}>
              Reset filters
            </Button>
          ) : undefined
        }
        className={cn('col-span-full', className)}
      />
    );
  }

  return (
    <div
      className={cn(
        'grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {kits.map((kit) => (
        <KitCard key={kit.id} kit={kit} />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-paper border-3 border-ink shadow-brutal flex flex-col animate-pulse">
      {/* Cover skeleton */}
      <div className="aspect-[16/10] bg-fog border-b-3 border-ink" />
      {/* Content skeleton */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-fog border-2 border-ink/10" />
          <div className="h-5 w-12 bg-fog border-2 border-ink/10" />
        </div>
        <div className="h-6 w-3/4 bg-fog" />
        <div className="space-y-1.5">
          <div className="h-4 w-full bg-fog" />
          <div className="h-4 w-2/3 bg-fog" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="h-6 w-12 bg-fog" />
          <div className="h-10 w-28 bg-fog border-3 border-ink/10" />
        </div>
      </div>
    </div>
  );
}
