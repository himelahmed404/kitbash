'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { seedKits } from '@/data/seed-kits';
import { KitCard } from '@/components/kits/KitCard';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';

export function FeaturedSection() {
  // Top 3 featured kits
  const featuredKits = React.useMemo(() => {
    return [...seedKits]
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 3);
  }, []);

  return (
    <section id="featured" className="relative z-10 py-20 md:py-28 bg-paper border-b-3 border-ink">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="FRESH DROPS"
            title="Featured kits"
            kicker="Hand-picked kits vetted for structure, tokens, and fast weekend shipping."
          />
          <Link href="/items" className="shrink-0">
            <Button variant="outline" size="md" className="gap-2">
              <span>See all kits</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Button>
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredKits.map((kit, index) => (
            <Reveal key={kit.id} delay={index * 0.1} y={24} className="h-full">
              <KitCard kit={kit} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
