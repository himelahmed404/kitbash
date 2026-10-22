'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Box } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { Chip } from '@/components/ui/Chip';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';

export default function HomePage() {
  const [selectedChip, setSelectedChip] = React.useState('all');
  const [demoLoading, setDemoLoading] = React.useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Preview Section */}
      <Section tone="cream" className="pt-12 md:pt-20 border-b-3 border-ink">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Sun Panel */}
            <div className="lg:col-span-8 bg-sun border-3 border-ink p-6 sm:p-10 lg:p-12 shadow-brutal flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="ink">NEO-BRUTALIST SYSTEM</Tag>
                <Tag tone="plain">FOUNDATION v1.0</Tag>
              </div>

              <h1 className="text-display font-black text-ink uppercase tracking-tight leading-[0.95]">
                Ready-made kits for makers who ship.
              </h1>

              <p className="text-lead text-ink max-w-[44ch] font-medium leading-snug">
                Skip the blank canvas. Buy, remix, and launch in a weekend with modular UI kits,
                icon packs, custom fonts, and production templates.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/items">
                  <Button variant="dark" size="lg" className="gap-2">
                    <span>Browse Kits Catalog</span>
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </Button>
                </Link>
                <Link href="/items/add">
                  <Button variant="outline" size="lg">
                    Sell a Kit (Studio)
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  size="lg"
                  loading={demoLoading}
                  onClick={() => {
                    setDemoLoading(true);
                    setTimeout(() => setDemoLoading(false), 2000);
                  }}
                >
                  Test 3-Square Loader
                </Button>
              </div>

              {/* Trust Metric Row */}
              <div className="pt-4 border-t-2 border-ink flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
                <span>⚡ 1,200+ KITS</span>
                <span>•</span>
                <span>👨‍💻 38K MAKERS</span>
                <span>•</span>
                <span>★ 4.8 / 5 AVG RATING</span>
              </div>
            </div>

            {/* Right Graphic Preview Box */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Card interactive className="p-6 bg-paper">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-bubblegum border-3 border-ink shadow-brutal-sm flex items-center justify-center font-bold text-ink">
                    <Box className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink">Kit Assembly Preview</h3>
                    <p className="font-mono text-xs text-graphite">3D Engine in Milestone 5</p>
                  </div>
                </div>

                <p className="text-sm text-graphite mb-4">
                  Loose modular parts snap together into a complete production kit as you scroll.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
                  <div className="bg-sun border-2 border-ink p-2 text-center uppercase">Sun Base</div>
                  <div className="bg-bubblegum border-2 border-ink p-2 text-center uppercase">Bubblegum</div>
                  <div className="bg-mint border-2 border-ink p-2 text-center uppercase">Mint Ring</div>
                  <div className="bg-fog border-2 border-ink p-2 text-center uppercase">Paper Pill</div>
                </div>
              </Card>

              <Card className="p-4 bg-paper flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-ink">Active Milestone</span>
                <Tag tone="sun">Milestone 1 Complete</Tag>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Component Library Showcase */}
      <Section tone="paper">
        <Container>
          <SectionHeader
            eyebrow="DESIGN SYSTEM PRIMITIVES"
            title="Component Library & Tokens"
            kicker="Every primitive strictly enforces 3px solid ink borders, hard offset shadows, zero radius, and brutalist micro-interactions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Palette Card */}
            <Card className="p-6 flex flex-col gap-4">
              <span className="eyebrow text-ink">01 · Brand Color Palette</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Sun', hex: '#FFD600', bg: 'bg-sun' },
                  { name: 'Bubblegum', hex: '#FF5FA2', bg: 'bg-bubblegum' },
                  { name: 'Mint', hex: '#5EEAD4', bg: 'bg-mint' },
                  { name: 'Cream', hex: '#FFF9DB', bg: 'bg-cream' },
                  { name: 'Fog', hex: '#F2F2EE', bg: 'bg-fog' },
                  { name: 'Danger', hex: '#E5162E', bg: 'bg-danger text-paper' },
                ].map((c) => (
                  <div
                    key={c.name}
                    className={`border-3 border-ink p-2 shadow-brutal-sm flex flex-col justify-between h-20 ${c.bg}`}
                  >
                    <span className="font-bold text-xs uppercase text-ink">{c.name}</span>
                    <span className="font-mono text-[10px] text-ink">{c.hex}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Buttons & States Card */}
            <Card className="p-6 flex flex-col gap-4">
              <span className="eyebrow text-ink">02 · Button Variants</span>
              <div className="flex flex-wrap gap-2.5">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="dark" size="sm">Dark</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
                <Button variant="danger" size="sm">Danger</Button>
                <Button variant="primary" size="sm" disabled>Disabled</Button>
              </div>

              <div className="mt-2 pt-4 border-t-2 border-ink flex flex-col gap-2">
                <span className="eyebrow text-graphite">Interactive Filter Chips</span>
                <div className="flex flex-wrap gap-2">
                  {['all', 'ui-kit', 'icons', 'fonts', 'templates'].map((id) => (
                    <Chip
                      key={id}
                      selected={selectedChip === id}
                      onClick={() => setSelectedChip(id)}
                      count={id === 'all' ? 12 : 3}
                    >
                      {id.replace('-', ' ')}
                    </Chip>
                  ))}
                </div>
              </div>
            </Card>

            {/* Badges & Tags Card */}
            <Card className="p-6 flex flex-col gap-4">
              <span className="eyebrow text-ink">03 · Tags & Status Badges</span>
              <div className="flex flex-wrap gap-2">
                <Tag tone="sun">UI KIT</Tag>
                <Tag tone="bubblegum">NEW RELEASE</Tag>
                <Tag tone="mint">VERIFIED</Tag>
                <Tag tone="ink">COMMERCIAL</Tag>
                <Tag tone="plain">v2.1.0</Tag>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-ink">
                <span className="eyebrow text-graphite mb-2 block">Typography Weights</span>
                <p className="font-sans font-bold text-lg text-ink">Space Grotesk Bold</p>
                <p className="font-sans font-medium text-sm text-graphite">Space Grotesk Medium</p>
                <p className="font-mono text-xs text-ink mt-1">JetBrains Mono 500 Uppercase</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
