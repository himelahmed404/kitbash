'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Marquee } from '@/components/motion/Marquee';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full z-10 flex flex-col justify-between pt-6 md:pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          {/* Left 7 Columns: Neo-brutalist Sun Copy Panel */}
          <div className="lg:col-span-7 bg-sun border-3 border-ink p-6 sm:p-10 lg:p-12 shadow-brutal flex flex-col gap-6 relative">
            {/* Corner Decorative Badge */}
            <div className="absolute -top-4 -right-3 rotate-3 hidden sm:flex">
              <span className="bg-bubblegum text-ink font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-ink shadow-brutal-sm">
                DROP 04 IS LIVE
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Tag tone="ink">UI KITS · ICONS · FONTS · TEMPLATES</Tag>
              <Tag tone="plain">NEO-BRUTALIST</Tag>
            </div>

            {/* Display Headline */}
            <SplitHeading
              as="h1"
              className="text-display font-black text-ink uppercase tracking-tight leading-[0.95]"
            >
              Ready-made kits for makers who ship.
            </SplitHeading>

            {/* Lead Subtitle */}
            <p className="text-lead text-ink max-w-[44ch] font-medium leading-relaxed">
              Skip the blank canvas. Buy, remix, and launch in a weekend with modular design kits,
              custom typography, and production code.
            </p>

            {/* Magnetic CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton strength={8}>
                <Link href="/items">
                  <Button variant="dark" size="lg" className="gap-2">
                    <span>Browse kits</span>
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton strength={8}>
                <Link href="/items/add">
                  <Button variant="outline" size="lg">
                    Sell a kit
                  </Button>
                </Link>
              </MagneticButton>
            </div>

            {/* Trust Stat Row */}
            <div className="pt-4 border-t-2 border-ink/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono font-bold text-ink uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 stroke-[2.5] text-ink" />
                <span>1,200+ KITS</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 stroke-[2.5] text-ink" />
                <span>38K MAKERS</span>
              </div>
              <span className="opacity-40">·</span>
              <div>
                <span>★ 4.8 / 5.0 RATING</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Transparent 3D space for Act 0 floating shapes */}
          <div className="lg:col-span-5 h-[340px] lg:h-[580px] pointer-events-none" />
        </div>
      </div>

      {/* Velocity Marquee Strip at bottom of Hero */}
      <Marquee tone="ink" />
    </section>
  );
}
