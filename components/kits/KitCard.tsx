import * as React from 'react';
import Link from 'next/link';
import type { Kit } from '@/types/kit';
import { CATEGORY_LABELS } from '@/types/kit';
import { cn, formatPrice, hashToBrandTone } from '@/lib/utils';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { KitCover } from './KitCover';
import { Star } from 'lucide-react';

interface KitCardProps {
  kit: Kit;
  className?: string;
}

export function KitCard({ kit, className }: KitCardProps) {
  const tone = hashToBrandTone(kit.id);
  const coverBgClass =
    tone === 'sun'
      ? 'bg-sun'
      : tone === 'bubblegum'
        ? 'bg-bubblegum'
        : 'bg-mint';

  return (
    <Card interactive className={cn('flex flex-col h-full group', className)}>
      {/* Cover — 16:10 aspect ratio */}
      <div
        className={cn(
          'relative aspect-[16/10] w-full overflow-hidden border-b-3 border-ink',
          coverBgClass
        )}
      >
        {kit.imageUrl ? (
          <img
            src={kit.imageUrl}
            alt={kit.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to SVG cover on image load error
              const target = e.currentTarget;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={kit.imageUrl ? 'hidden' : ''}>
          <KitCover
            category={kit.category}
            kitId={kit.id}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Tags row */}
        <div className="flex items-center gap-2 mb-2.5">
          <Tag tone={tone}>{CATEGORY_LABELS[kit.category]}</Tag>
          {kit.rating != null && (
            <Tag tone="plain">
              <Star className="w-3 h-3 mr-0.5 inline-block" strokeWidth={2.5} />
              {kit.rating.toFixed(1)}
            </Tag>
          )}
        </div>

        {/* Title — single line */}
        <h3 className="text-lg sm:text-xl font-bold text-ink line-clamp-1 mb-1.5">
          {kit.title}
        </h3>

        {/* Description — 2 lines */}
        <p className="text-sm text-graphite line-clamp-2 mb-4 flex-1">
          {kit.shortDescription}
        </p>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-[22px] font-bold text-ink">
            {formatPrice(kit.price)}
          </span>
          <Button asChild variant="primary" size="sm">
            <Link href={`/items/${kit.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
