import * as React from 'react';
import type { Kit } from '@/types/kit';
import { CATEGORY_LABELS } from '@/types/kit';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { KitCard } from './KitCard';

interface RelatedKitsProps {
  kits: Kit[];
  category: string;
  className?: string;
}

export function RelatedKits({ kits, category, className }: RelatedKitsProps) {
  if (kits.length === 0) return null;

  const categoryLabel =
    CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] ?? category;

  return (
    <div className={className}>
      <SectionHeader
        eyebrow="Related"
        title={`More ${categoryLabel}s`}
      />
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {kits.map((kit) => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>
    </div>
  );
}
