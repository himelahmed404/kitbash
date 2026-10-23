'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';

const CATEGORIES_DATA = [
  {
    id: 'ui-kit',
    title: 'UI Kits',
    count: '340+ KITS',
    description: 'Design systems, web dashboards, and mobile component libraries.',
    bg: 'bg-sun',
    symbol: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 fill-none stroke-ink stroke-[3]">
        <rect x="10" y="10" width="40" height="40" fill="#111" />
        <circle cx="50" cy="50" r="24" fill="#5EEAD4" />
      </svg>
    ),
  },
  {
    id: 'icons',
    title: 'Icon Packs',
    count: '280+ KITS',
    description: 'Crisp vector glyphs, brutalist line packs, and 3D icon sets.',
    bg: 'bg-bubblegum',
    symbol: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 fill-none stroke-ink stroke-[3]">
        <rect x="10" y="10" width="16" height="16" fill="#FFD600" />
        <circle cx="48" cy="18" r="8" fill="#FFF" />
        <polygon points="18,44 26,60 10,60" fill="#FFF" />
        <rect x="42" y="44" width="16" height="16" fill="#111" />
      </svg>
    ),
  },
  {
    id: 'fonts',
    title: 'Custom Fonts',
    count: '190+ KITS',
    description: 'Display grotesks, monospace typefaces, and brutalist headings.',
    bg: 'bg-mint',
    symbol: (
      <div className="w-16 h-16 flex items-center justify-center font-bold text-3xl font-sans text-ink border-3 border-ink bg-paper shadow-brutal-sm">
        Aa
      </div>
    ),
  },
  {
    id: 'templates',
    title: 'Templates',
    count: '420+ KITS',
    description: 'Full-stack Next.js starters, landing templates, and docs themes.',
    bg: 'bg-paper',
    symbol: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 fill-none stroke-ink stroke-[3]">
        <rect x="8" y="14" width="48" height="34" fill="#FFF9DB" />
        <rect x="22" y="28" width="48" height="34" fill="#FF5FA2" />
      </svg>
    ),
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="relative z-10 py-20 md:py-28 bg-cream border-b-3 border-ink">
      <Container>
        <SectionHeader
          eyebrow="CATEGORIES"
          title="Pick your parts"
          kicker="Four focused categories. No fluff, no endless search—just parts that fit."
          className="mb-12"
        />

        {/* 4 Category Tiles: 1-col on mobile, 2-col on sm, 4-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.08} y={24} className="h-full">
              <Link
                href={`/items?category=${cat.id}`}
                className={`group flex flex-col justify-between h-full p-6 sm:p-8 border-3 border-ink shadow-brutal brutal-lift transition-transform ${cat.bg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-bold text-xs uppercase text-ink px-2.5 py-1 bg-paper border-2 border-ink">
                      {cat.count}
                    </span>
                    <div className="w-8 h-8 rounded-none border-2 border-ink bg-paper flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Visual symbol with group hover rotation */}
                  <div className="my-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {cat.symbol}
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-ink mb-2">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-sm font-medium text-graphite leading-snug pt-4 border-t-2 border-ink/20">
                  {cat.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
