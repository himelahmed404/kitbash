'use client';

import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { KitBoxIllustration } from '@/components/about/KitBoxIllustration';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { Counter } from '@/components/motion/Counter';
import {
  Hammer,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex-1 pb-16">
      {/* 1. Hero Header */}
      <section className="border-b-3 border-ink bg-cream/40 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Reveal y={16}>
              <Tag tone="sun" className="mb-4">
                THE KITBASH MANIFESTO
              </Tag>
            </Reveal>

            <SplitHeading
              as="h1"
              className="text-display font-black text-ink tracking-tight mb-6"
            >
              We sell parts. You build the thing.
            </SplitHeading>

            <Reveal y={20} delay={0.15}>
              <p className="text-lead text-graphite max-w-[62ch] mb-8 font-medium">
                Most software templates are bloated monoliths that force you to
                spend days deleting someone else&apos;s opinions. Kitbash is different:
                we curate atomic, modular design and code kits created by top
                makers so you can snap parts together and ship this weekend.
              </p>
            </Reveal>

            <Reveal y={20} delay={0.25}>
              <div className="flex flex-wrap gap-2.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-paper border-2 border-ink px-3 py-1.5 shadow-[2px_2px_0_0_#111]">
                  ⚡ ZERO FRAMEWORK BLOAT
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-paper border-2 border-ink px-3 py-1.5 shadow-[2px_2px_0_0_#111]">
                  📦 100% ROYALTY TRANSPARENCY
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-paper border-2 border-ink px-3 py-1.5 shadow-[2px_2px_0_0_#111]">
                  🔨 BUILT FOR PRODUCTION
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Story Block (2-Column) */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text (7 cols) */}
            <Reveal y={24} className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="ORIGIN STORY"
                title="Why we built Kitbash"
                kicker="The developer experience of building side projects was broken. We decided to fix the foundation."
              />

              <div className="space-y-4 text-graphite text-base md:text-lg leading-relaxed">
                <p>
                  In traditional plastic modeling, <strong className="text-ink">kitbashing</strong> is the craft of taking parts from commercial model kits and combining them to create entirely new, custom starships, machines, and worlds. The Millennium Falcon and the Nostromo were kitbashed.
                </p>
                <p>
                  Modern software development should feel the same way. When you have an idea on a Friday night, you shouldn&apos;t have to wire up button focus states, draw 400 SVG icons, or debug baseline grids from scratch.
                </p>

                {/* Callout Quote */}
                <div className="bg-sun border-3 border-ink p-6 shadow-brutal my-6">
                  <p className="font-sans font-bold text-lg md:text-xl text-ink leading-snug">
                    &ldquo;Don&apos;t reinvent the wheel. Just buy the axle, mount the chassis, and drive.&rdquo;
                  </p>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink/80 mt-2">
                    — The Kitbash Guild Rulebook
                  </p>
                </div>

                <p>
                  Every kit listed on Kitbash is reviewed for strict adherence to zero-radius neo-brutalist guidelines, sensible token architectures, accessible contrast ratios, and clean folder structures.
                </p>
              </div>

              {/* Checklist */}
              <div className="pt-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink mb-4">
                  The Kitbash Standard:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Figma tokens mapped 1:1 to Tailwind v4',
                    'Zero dependencies unless strictly necessary',
                    'Commercial license included by default',
                    'Instant download & source repo access',
                    'Direct creator support & version updates',
                    'Accessible WCAG AAA color contrast',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-sun border-2 border-ink flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-ink stroke-[3]" />
                      </span>
                      <span className="font-sans text-sm font-semibold text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Static SVG Kit Box Illustration (5 cols) */}
            <Reveal y={24} delay={0.15} className="lg:col-span-5">
              <div className="border-3 border-ink bg-paper p-4 shadow-brutal">
                <KitBoxIllustration />
                <div className="mt-3 pt-3 border-t-2 border-ink flex items-center justify-between text-xs font-mono font-bold text-graphite">
                  <span>FIGURE 01 · ASSEMBLY</span>
                  <span className="text-ink">PRECISION FIT</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. Core Values */}
      <section className="bg-fog/70 border-y-3 border-ink py-16 md:py-24">
        <Container>
          <Reveal y={20}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Tag tone="plain" className="mb-3">
                WHAT WE STAND FOR
              </Tag>
              <h2 className="text-h2 font-black text-ink mb-3">
                Three rules that govern every kit
              </h2>
              <p className="text-graphite text-base">
                No filler, no bloated multi-purpose themes. Just focused, battle-tested components.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Made by makers */}
            <Reveal y={24} delay={0.05} className="h-full">
              <Card className="flex flex-col h-full bg-paper overflow-hidden">
                {/* Colored Accent Top Strip */}
                <div className="h-3.5 bg-sun border-b-3 border-ink w-full" />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 bg-sun border-3 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
                      <Hammer className="w-6 h-6 text-ink stroke-[2.5]" />
                    </div>
                    <div>
                      <Tag tone="sun">VALUE 01</Tag>
                      <h3 className="text-xl font-black text-ink mt-1">Made by makers</h3>
                    </div>
                  </div>
                  <p className="text-graphite text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Every kit in our catalog is created and maintained by working designers and engineers who dogfood their own tools in production. Real problems, real solutions.
                  </p>
                  <div className="font-mono text-xs font-bold text-ink pt-3.5 border-t-2 border-ink/20 mt-auto">
                    {'//'} CREATED FOR REPOSITORIES, NOT PORTFOLIOS
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Value 2: Fair licenses */}
            <Reveal y={24} delay={0.15} className="h-full">
              <Card className="flex flex-col h-full bg-paper overflow-hidden">
                {/* Colored Accent Top Strip */}
                <div className="h-3.5 bg-mint border-b-3 border-ink w-full" />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 bg-mint border-3 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-ink stroke-[2.5]" />
                    </div>
                    <div>
                      <Tag tone="mint">VALUE 02</Tag>
                      <h3 className="text-xl font-black text-ink mt-1">Fair licenses</h3>
                    </div>
                  </div>
                  <p className="text-graphite text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    One-time purchase, unlimited projects, zero seat taxes. Commercial licenses that let you build client work and SaaS products without legal headaches or recurring fees.
                  </p>
                  <div className="font-mono text-xs font-bold text-ink pt-3.5 border-t-2 border-ink/20 mt-auto">
                    {'//'} PERPETUAL RIGHTS · ZERO SUBSCRIPTIONS
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Value 3: Ship this weekend */}
            <Reveal y={24} delay={0.25} className="h-full">
              <Card className="flex flex-col h-full bg-paper overflow-hidden">
                {/* Colored Accent Top Strip */}
                <div className="h-3.5 bg-bubblegum border-b-3 border-ink w-full" />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 bg-bubblegum border-3 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-ink stroke-[2.5]" />
                    </div>
                    <div>
                      <Tag tone="bubblegum">VALUE 03</Tag>
                      <h3 className="text-xl font-black text-ink mt-1">Ship this weekend</h3>
                    </div>
                  </div>
                  <p className="text-graphite text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Zero bloat, zero 400MB dependencies. Every kit includes ready-to-copy code and pristine Figma frames organized for immediate production execution.
                  </p>
                  <div className="font-mono text-xs font-bold text-ink pt-3.5 border-t-2 border-ink/20 mt-auto">
                    {'//'} COPY, PASTE, COMPILE, SHIP
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Platform Stats Band */}
      <section className="py-16 md:py-20 border-b-3 border-ink bg-paper">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal y={20} delay={0.05} className="h-full">
              <div className="border-3 border-ink p-6 md:p-8 bg-paper shadow-brutal flex flex-col justify-between h-full">
                <div className="font-sans font-black text-3xl md:text-5xl text-ink tracking-tight mb-2">
                  <Counter value={1200} suffix="+" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-sun border-2 border-ink inline-block" />
                  <span className="font-mono text-xs font-bold text-graphite tracking-wider">
                    KITS PUBLISHED
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.12} className="h-full">
              <div className="border-3 border-ink p-6 md:p-8 bg-paper shadow-brutal flex flex-col justify-between h-full">
                <div className="font-sans font-black text-3xl md:text-5xl text-ink tracking-tight mb-2">
                  <Counter value={38000} suffix="+" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-bubblegum border-2 border-ink inline-block" />
                  <span className="font-mono text-xs font-bold text-graphite tracking-wider">
                    ACTIVE MAKERS
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.19} className="h-full">
              <div className="border-3 border-ink p-6 md:p-8 bg-paper shadow-brutal flex flex-col justify-between h-full">
                <div className="font-sans font-black text-3xl md:text-5xl text-ink tracking-tight mb-2">
                  <Counter value={2.1} prefix="$" suffix="M+" decimals={1} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-mint border-2 border-ink inline-block" />
                  <span className="font-mono text-xs font-bold text-graphite tracking-wider">
                    PAID TO CREATORS
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.26} className="h-full">
              <div className="border-3 border-ink p-6 md:p-8 bg-paper shadow-brutal flex flex-col justify-between h-full">
                <div className="font-sans font-black text-3xl md:text-5xl text-ink tracking-tight mb-2">
                  <Counter value={4.8} suffix=" / 5.0" decimals={1} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-cream border-2 border-ink inline-block" />
                  <span className="font-mono text-xs font-bold text-graphite tracking-wider">
                    AVERAGE RATING
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. CTA Banner */}
      <Container className="pt-16 md:pt-20">
        <Reveal y={24} delay={0.1}>
          <div className="bg-sun border-3 border-ink p-8 md:p-14 shadow-brutal-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <Tag tone="ink" className="mb-3">
                CALLING ALL BUILDERS
              </Tag>
              <h2 className="text-h2 font-black text-ink mb-3">
                Got a kit sitting in your drafts?
              </h2>
              <p className="text-graphite font-medium text-base md:text-lg">
                Turn your internal design system, icon pack, or template into recurring creator revenue. Join 1,200+ makers selling on Kitbash.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Button asChild variant="dark" size="lg">
                <Link href="/items/add">
                  <Sparkles className="w-5 h-5 text-sun" strokeWidth={2.5} />
                  Sell a Kit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-paper">
                <Link href="/items">
                  Browse Catalog
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
