'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, ExternalLink, PackageX } from 'lucide-react';
import type { Kit } from '@/types/kit';
import { CATEGORY_LABELS } from '@/types/kit';
import { useKits } from '@/lib/kits';
import { getRelatedKits } from '@/data/seed-kits';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { Card } from '@/components/ui/Card';
import { KitCover } from '@/components/kits/KitCover';
import { SpecTable } from '@/components/kits/SpecTable';
import { RelatedKits } from '@/components/kits/RelatedKits';
import { formatPrice, hashToBrandTone } from '@/lib/utils';
import { BuyKitButton } from '@/app/items/[id]/BuyKitButton';
import { Reveal } from '@/components/motion/Reveal';

interface KitDetailViewProps {
  initialKit?: Kit;
  id: string;
}

export function KitDetailView({ initialKit, id }: KitDetailViewProps) {
  const { allKits } = useKits();
  const kit = initialKit ?? allKits.find((k) => k.id === id);

  // Not found state
  if (!kit) {
    return (
      <Container className="py-16 md:py-24">
        <div className="max-w-xl mx-auto bg-paper border-3 border-ink shadow-brutal p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-sun border-3 border-ink flex items-center justify-center mx-auto mb-6 shadow-brutal-sm">
            <PackageX className="w-8 h-8 text-ink stroke-[2.5]" />
          </div>
          <span className="eyebrow text-graphite mb-2 block">404 · Missing Asset</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-4">
            Kit not found
          </h1>
          <p className="text-graphite mb-8 leading-relaxed">
            The kit you are looking for may have been deleted, moved, or is not available
            in this session.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/items">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Browse Catalog
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/items/manage">Manage My Kits</Link>
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  const related = getRelatedKits(kit);
  const tone = hashToBrandTone(kit.id);
  const coverBgClass =
    tone === 'sun'
      ? 'bg-sun'
      : tone === 'bubblegum'
        ? 'bg-bubblegum'
        : 'bg-mint';

  // Check if kit was recently created relative to current system release
  const REFERENCE_TIME = new Date('2026-10-23T00:00:00.000Z').getTime();
  const isNew =
    REFERENCE_TIME - new Date(kit.createdAt).getTime() <
    30 * 24 * 60 * 60 * 1000;

  return (
    <>
      <Container className="py-6 md:py-10">
        {/* Back button */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-graphite transition-colors mb-6 md:mb-8 group"
        >
          <ArrowLeft
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            strokeWidth={2.5}
          />
          Back to kits
        </Link>

        {/* Top grid — 7/5 split on lg */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Left — Cover */}
          <Reveal y={20} duration={0.6} className="lg:col-span-7">
            <Card className={`overflow-hidden ${coverBgClass}`}>
              <div className="aspect-[4/3] w-full">
                {kit.imageUrl ? (
                  <img
                    src={kit.imageUrl}
                    alt={kit.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <KitCover
                    category={kit.category}
                    kitId={kit.id}
                    className="w-full h-full"
                  />
                )}
              </div>
            </Card>
          </Reveal>

          {/* Right — Details */}
          <Reveal y={20} delay={0.1} duration={0.6} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start flex flex-col gap-5">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <Tag tone={tone}>{CATEGORY_LABELS[kit.category]}</Tag>
              {kit.rating != null && (
                <Tag tone="plain">
                  <Star
                    className="w-3 h-3 mr-0.5 inline-block"
                    strokeWidth={2.5}
                  />
                  {kit.rating.toFixed(1)}
                </Tag>
              )}
              {isNew && <Tag tone="bubblegum">New</Tag>}
              {kit.official && <Tag tone="ink">Official</Tag>}
            </div>

            {/* Title */}
            <h1 className="text-h1 font-bold tracking-tight text-ink">
              {kit.title}
            </h1>

            {/* Short description */}
            <p className="text-lead text-graphite max-w-[44ch]">
              {kit.shortDescription}
            </p>

            {/* Price + Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-4xl font-bold text-ink">
                {formatPrice(kit.price)}
              </span>

              <div className="flex gap-3">
                <BuyKitButton price={kit.price} />
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                  Live Preview
                </Button>
              </div>
            </div>

            {/* Spec Table */}
            <div className="border-t-3 border-ink pt-5 mt-2">
              <SpecTable kit={kit} />
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Full Description */}
      <Section>
        <Container>
          <div className="max-w-[62ch]">
            <h2 className="text-h2 font-bold tracking-tight text-ink mb-6">
              About this kit
            </h2>
            <div className="prose prose-ink text-graphite leading-relaxed whitespace-pre-line text-base">
              {kit.description.split('\n').map((line, i) => {
                // Handle **bold** markers
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h3 key={i} className="text-lg font-bold text-ink mt-6 mb-3">
                      {line.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <div key={i} className="flex items-start gap-2 mb-1.5">
                      <span
                        className="w-2.5 h-2.5 bg-sun border-2 border-ink mt-1.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{line.slice(2)}</span>
                    </div>
                  );
                }
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-3">{line}</p>;
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Kits */}
      <Section tone="fog">
        <Container>
          <RelatedKits
            kits={related}
            category={kit.category}
          />
        </Container>
      </Section>
    </>
  );
}
