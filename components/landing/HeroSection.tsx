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
    <section
      id="hero"
      className="relative w-full z-10 flex flex-col justify-between pt-3 sm:pt-6 pb-2 min-h-[calc(100vh-4.5rem)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left 7 Columns: Neo-brutalist Sun Copy Panel */}
          <div className="md:col-span-7 bg-sun border-3 border-ink p-5 sm:p-7 md:p-8 lg:p-9 shadow-brutal flex flex-col gap-4 sm:gap-5 relative">
            {/* Corner Decorative Badge */}
            <div className="absolute -top-3.5 -right-2.5 rotate-3 hidden sm:flex">
              <span className="bg-bubblegum text-ink font-mono font-bold text-[11px] uppercase px-2.5 py-0.5 border-2 border-ink shadow-brutal-sm">
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
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.85rem] font-black text-ink uppercase tracking-tight leading-[1.04]"
            >
              Ready-made kits for makers who ship.
            </SplitHeading>

            {/* Lead Subtitle */}
            <p className="text-sm sm:text-base text-ink max-w-[46ch] font-medium leading-relaxed">
              Skip the blank canvas. Buy, remix, and launch in a weekend with modular design kits,
              custom typography, and production code.
            </p>

            {/* Magnetic CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <MagneticButton strength={8}>
                <Link href="/items">
                  <Button variant="dark" size="md" className="gap-2 sm:text-sm">
                    <span>Browse kits</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton strength={8}>
                <Link href="/items/add">
                  <Button variant="outline" size="md" className="bg-paper sm:text-sm">
                    Sell a kit
                  </Button>
                </Link>
              </MagneticButton>
            </div>

            {/* Trust Stat Row */}
            <div className="pt-3 border-t-2 border-ink/20 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-xs font-mono font-bold text-ink uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5] text-ink" />
                <span>1,200+ KITS</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5] text-ink" />
                <span>38K MAKERS</span>
              </div>
              <span className="opacity-40">·</span>
              <div>
                <span>★ 4.8 / 5.0 RATING</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Dedicated 3D space for Act 0 floating shapes */}
          <div className="md:col-span-5 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] pointer-events-none relative flex items-center justify-center" />
        </div>
      </div>

      {/* Velocity Marquee Strip pinned to bottom of Hero */}
      <div className="w-full mt-auto pt-2">
        <Marquee tone="ink" />
      </div>
    </section>
  );
}
