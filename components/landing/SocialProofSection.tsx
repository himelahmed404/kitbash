'use client';

import * as React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Tag } from '@/components/ui/Tag';
import { Counter } from '@/components/motion/Counter';
import { Reveal } from '@/components/motion/Reveal';

interface Testimonial {
  initials: string;
  name: string;
  handle: string;
  role: string;
  quote: string;
  kit: string;
  badgeTone: 'sun' | 'bubblegum' | 'mint';
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'MK',
    name: 'Maya Kowalski',
    handle: '@mayak_design',
    role: 'Product Designer at FinStack',
    quote:
      'Kitbash cut our new SaaS launch timeline in half. The tokens and components are actually modular—no weird wrapper divs or fighting CSS specificity.',
    kit: 'Orbit Dashboard Kit',
    badgeTone: 'sun',
  },
  {
    initials: 'DR',
    name: 'Devon Ray',
    handle: '@devonbuilds',
    role: 'Indie Hacker & Founder',
    quote:
      'I shipped 3 MVPs in 4 weeks using these templates. Having production-ready Figma and React 19 code meant zero time wasted on boilerplate.',
    kit: 'Foundry Starter Kit',
    badgeTone: 'mint',
  },
  {
    initials: 'AL',
    name: 'Arjun Lin',
    handle: '@arjunlin_dev',
    role: 'Staff Frontend Engineer',
    quote:
      'The brutalist typography and hard shadows give our internal tools a distinct identity. Best $49 we spent this quarter hands down.',
    kit: 'MonoType Typeface',
    badgeTone: 'bubblegum',
  },
];

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative z-10 bg-fog border-b-3 border-ink">
      {/* 1. Numbers Band (Cream Background with border-y-3) */}
      <div className="bg-cream border-b-3 border-ink py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
                <Counter value={1200} suffix="+" duration={1.6} />
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-graphite uppercase mt-2 tracking-wider">
                VETTED KITS LISTED
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
                <Counter value={38000} suffix="+" duration={1.8} />
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-graphite uppercase mt-2 tracking-wider">
                MAKERS SHIPPING
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
                <Counter value={2.1} prefix="$" suffix="M+" decimals={1} duration={2.0} />
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-graphite uppercase mt-2 tracking-wider">
                PAID TO CREATORS
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
                <Counter value={4.8} suffix="/5.0" decimals={1} duration={1.5} />
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-graphite uppercase mt-2 tracking-wider">
                AVERAGE RATING
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Maker Testimonials */}
      <div className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="COMMUNITY"
            title="Built by makers, for makers"
            kicker="Read what builders, indie hackers, and product engineers say about shipping with Kitbash."
            className="mb-14 text-center max-w-[680px] mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => {
              // Offset card 2 down on desktop for neo-brutalist rhythm
              const isOffset = idx === 1;

              return (
                <Reveal
                  key={t.name}
                  delay={idx * 0.12}
                  y={24}
                  className={`h-full ${isOffset ? 'md:translate-y-6' : ''}`}
                >
                  <div className="flex flex-col justify-between h-full bg-paper border-3 border-ink p-6 sm:p-8 shadow-brutal brutal-lift">
                    <div>
                      {/* Top row: Avatar initial square + bought kit tag */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div
                          className={`w-12 h-12 border-3 border-ink flex items-center justify-center font-mono font-black text-base text-ink ${
                            t.badgeTone === 'sun'
                              ? 'bg-sun'
                              : t.badgeTone === 'mint'
                              ? 'bg-mint'
                              : 'bg-bubblegum'
                          }`}
                        >
                          {t.initials}
                        </div>
                        <Tag tone="plain">{t.kit}</Tag>
                      </div>

                      {/* Quote */}
                      <p className="text-base text-ink font-medium leading-relaxed mb-6 italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author footer */}
                    <div className="pt-4 border-t-2 border-ink/20 flex flex-col">
                      <span className="font-bold text-ink uppercase tracking-tight text-sm">
                        {t.name}
                      </span>
                      <span className="font-mono text-xs text-graphite">
                        {t.handle} · {t.role}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
