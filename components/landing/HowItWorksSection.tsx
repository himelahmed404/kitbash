'use client';

import * as React from 'react';
import { Check, Terminal, ShieldCheck, Rocket, Sparkles, FolderDown, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Tag } from '@/components/ui/Tag';
import { ScrollTrigger } from '@/lib/gsap';

interface StepData {
  number: string;
  title: string;
  body: string;
  tone: 'sun' | 'bubblegum' | 'mint';
  snippet: React.ReactNode;
}

const STEPS: StepData[] = [
  {
    number: '01',
    title: 'Buy & Claim License',
    body: 'Instant download with source Figma files, clean React components, and production SVGs. Full commercial license included.',
    tone: 'sun',
    snippet: (
      <div className="bg-paper border-3 border-ink p-4 shadow-brutal-sm flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs font-mono font-bold">
          <span className="flex items-center gap-1.5 text-ink">
            <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            <span>COMMERCIAL LICENSE</span>
          </span>
          <span className="bg-mint text-ink px-2 py-0.5 border border-ink">LIFETIME</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <Tag tone="plain">FIGMA</Tag>
          <Tag tone="plain">REACT 19</Tag>
          <Tag tone="plain">TAILWIND v4</Tag>
          <Tag tone="plain">SVG</Tag>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Remix Tokens & Styles',
    body: 'Designed with structured CSS variables and Tailwind tokens. Swap color palettes, switch typography, and tailor layouts in minutes.',
    tone: 'bubblegum',
    snippet: (
      <div className="bg-ink text-paper border-3 border-ink p-4 shadow-brutal-sm flex flex-col gap-2 font-mono text-xs">
        <div className="flex items-center justify-between text-smoke pb-1 border-b border-graphite">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 stroke-[2]" />
            <span>globals.css</span>
          </span>
          <span className="text-mint">● MODIFIED</span>
        </div>
        <div className="text-paper/90 leading-relaxed font-mono">
          <span className="text-sun font-bold">--color-sun:</span> #FFD600;<br />
          <span className="text-mint font-bold">--color-mint:</span> #5EEAD4;<br />
          <span className="text-smoke">{`// tokens automatically synced`}</span>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Ship to Production',
    body: 'Drop pre-tested, accessible components straight into your app. No heavy bloated runtime dependencies—just code that works.',
    tone: 'mint',
    snippet: (
      <div className="bg-paper border-3 border-ink p-4 shadow-brutal-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-mint border-2 border-ink flex items-center justify-center shrink-0">
            <Check className="w-5 h-5 stroke-[3] text-ink" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs uppercase tracking-wider text-ink">
              DEPLOYMENT LIVE
            </span>
            <span className="font-mono text-xs text-graphite">kitbash.dev/my-app</span>
          </div>
        </div>
        <span className="bg-sun text-ink font-mono font-bold text-xs px-2 py-1 border border-ink">
          200 OK
        </span>
      </div>
    ),
  },
];

/**
 * Step 01 Interactive Preview: Delivery Manifest & License
 */
function BuyStepPreview() {
  return (
    <div className="bg-paper border-3 border-ink shadow-brutal p-5 sm:p-6 flex flex-col gap-4">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-sun border border-ink" />
          <span className="w-3 h-3 bg-mint border border-ink" />
          <span className="w-3 h-3 bg-bubblegum border border-ink" />
          <span className="font-mono text-xs font-bold text-ink uppercase ml-1">
            DELIVERY_MANIFEST.ZIP
          </span>
        </div>
        <span className="bg-mint text-ink font-mono font-bold text-[10px] uppercase px-2 py-0.5 border border-ink">
          VERIFIED CLEAN
        </span>
      </div>

      {/* Package Contents List */}
      <div className="flex flex-col gap-2 font-mono text-xs">
        <div className="flex items-center justify-between p-2.5 bg-fog border border-ink/30">
          <span className="flex items-center gap-2 text-ink font-bold">
            <span className="text-sun">📁</span> figma/kitbash-design-system.fig
          </span>
          <span className="text-smoke">14.2 MB</span>
        </div>
        <div className="flex items-center justify-between p-2.5 bg-fog border border-ink/30">
          <span className="flex items-center gap-2 text-ink font-bold">
            <span className="text-mint">📁</span> react19-tsx/components/
          </span>
          <span className="text-smoke">64 files</span>
        </div>
        <div className="flex items-center justify-between p-2.5 bg-fog border border-ink/30">
          <span className="flex items-center gap-2 text-ink font-bold">
            <span className="text-bubblegum">📁</span> svg-icons-240px/
          </span>
          <span className="text-smoke">240 SVGs</span>
        </div>
        <div className="flex items-center justify-between p-2.5 bg-cream border border-ink">
          <span className="flex items-center gap-2 text-ink font-bold">
            <span>📄</span> LICENSE-COMMERCIAL.pdf
          </span>
          <span className="text-ink font-bold">Lifetime</span>
        </div>
      </div>

      {/* License Cert Box */}
      <div className="bg-sun/20 border-2 border-ink p-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-smoke">Certificate Key</span>
          <span className="font-mono font-black text-xs text-ink">KB-COM-98421-2026</span>
        </div>
        <span className="bg-sun font-mono font-bold text-[11px] text-ink px-2.5 py-1 border border-ink shadow-brutal-sm">
          UNLIMITED USE
        </span>
      </div>
    </div>
  );
}

/**
 * Step 02 Interactive Preview: Live Token Swatch Studio
 */
function RemixStepPreview() {
  const [activeTheme, setActiveTheme] = React.useState<'sun' | 'mint' | 'bubblegum'>('sun');

  const themes = {
    sun: { name: 'Neo Sun', color: '#FFD600', class: 'bg-sun' },
    mint: { name: 'Cyber Mint', color: '#5EEAD4', class: 'bg-mint' },
    bubblegum: { name: 'Vibrant Pink', color: '#FF5FA2', class: 'bg-bubblegum' },
  };

  return (
    <div className="bg-paper border-3 border-ink shadow-brutal p-5 sm:p-6 flex flex-col gap-4">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-sun border border-ink" />
          <span className="w-3 h-3 bg-mint border border-ink" />
          <span className="w-3 h-3 bg-bubblegum border border-ink" />
          <span className="font-mono text-xs font-bold text-ink uppercase ml-1">
            THEME_TOKEN_STUDIO
          </span>
        </div>
        <span className="bg-sun text-ink font-mono font-bold text-[10px] uppercase px-2 py-0.5 border border-ink">
          LIVE SYNC
        </span>
      </div>

      {/* Interactive Theme Picker */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs font-bold text-graphite uppercase">Select Brand Color Token:</span>
        <div className="grid grid-cols-3 gap-2">
          {(['sun', 'mint', 'bubblegum'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTheme(t)}
              className={`p-2 border-2 border-ink font-mono text-xs font-bold uppercase transition-all cursor-pointer flex flex-col items-center gap-1 ${
                activeTheme === t ? 'bg-cream shadow-brutal-sm scale-102 ring-2 ring-ink' : 'bg-fog hover:bg-cream'
              }`}
            >
              <span className={`w-5 h-5 border border-ink ${themes[t].class}`} />
              <span className="text-[10px]">{themes[t].name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Injected CSS Variables Snippet */}
      <div className="bg-ink text-paper p-3 font-mono text-xs border-2 border-ink flex flex-col gap-1">
        <div className="text-smoke text-[10px] pb-1 border-b border-graphite flex justify-between">
          <span>// globals.css tokens</span>
          <span className="text-mint">reactive</span>
        </div>
        <div className="text-paper/90 pt-1">
          <span className="text-smoke">:root &#123;</span><br />
          &nbsp;&nbsp;<span className="text-sun">--brand-primary:</span> {themes[activeTheme].color};<br />
          &nbsp;&nbsp;<span className="text-mint">--brand-border:</span> 3px solid #111;<br />
          &nbsp;&nbsp;<span className="text-bubblegum">--brand-shadow:</span> 6px 6px 0 #111;<br />
          <span className="text-smoke">&#125;</span>
        </div>
      </div>

      {/* Live Rendered Component */}
      <div className="p-3 bg-fog border border-ink/40 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-graphite">Rendered Button:</span>
        <button
          type="button"
          className={`px-3 py-1.5 border-2 border-ink font-sans font-black text-xs uppercase shadow-brutal-sm brutal-lift ${themes[activeTheme].class} text-ink`}
        >
          {themes[activeTheme].name} Button
        </button>
      </div>
    </div>
  );
}

/**
 * Step 03 Interactive Preview: Turbopack Deploy & Production URL
 */
function ShipStepPreview() {
  return (
    <div className="bg-paper border-3 border-ink shadow-brutal p-5 sm:p-6 flex flex-col gap-4">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-sun border border-ink" />
          <span className="w-3 h-3 bg-mint border border-ink" />
          <span className="w-3 h-3 bg-bubblegum border border-ink" />
          <span className="font-mono text-xs font-bold text-ink uppercase ml-1">
            DEPLOY_TERMINAL // TURBOPACK
          </span>
        </div>
        <span className="bg-mint text-ink font-mono font-bold text-[10px] uppercase px-2 py-0.5 border border-ink">
          BUILD READY
        </span>
      </div>

      {/* Terminal Output */}
      <div className="bg-ink text-paper p-3.5 font-mono text-xs border-2 border-ink flex flex-col gap-1.5 leading-relaxed">
        <div className="text-smoke flex items-center gap-2">
          <span className="text-mint">$</span>
          <span>next build --turbo</span>
        </div>
        <div className="text-paper/90 pl-3 border-l-2 border-mint/40 flex flex-col gap-0.5 text-[11px]">
          <div>✓ Turbopack compiled 24/24 routes in 520ms</div>
          <div>✓ Zero bundle bloat · Pure CSS variables</div>
          <div>✓ Generating static pages (24/24) [100%]</div>
          <div className="text-mint font-bold pt-1">✓ Build completed successfully (0 errors)</div>
        </div>
      </div>

      {/* Production Live URL Card */}
      <div className="bg-cream border-2 border-ink p-3.5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-graphite uppercase">Deployment URL</span>
          <span className="bg-mint text-ink font-mono font-bold text-[10px] px-2 py-0.5 border border-ink">
            ● 200 OK
          </span>
        </div>
        <div className="flex items-center justify-between bg-paper p-2 border border-ink font-mono text-xs">
          <span className="text-ink font-bold truncate">https://your-domain.com</span>
          <span className="text-smoke text-[10px] shrink-0">Edge Network</span>
        </div>
      </div>

      {/* Audit Stats */}
      <div className="grid grid-cols-3 gap-2 text-center font-mono">
        <div className="p-2 bg-fog border border-ink/30">
          <div className="font-black text-sm text-ink">100</div>
          <div className="text-[9px] text-smoke uppercase font-bold">Performance</div>
        </div>
        <div className="p-2 bg-fog border border-ink/30">
          <div className="font-black text-sm text-ink">100</div>
          <div className="text-[9px] text-smoke uppercase font-bold">Accessibility</div>
        </div>
        <div className="p-2 bg-fog border border-ink/30">
          <div className="font-black text-sm text-ink">100</div>
          <div className="text-[9px] text-smoke uppercase font-bold">Best Practices</div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const triggerRef = React.useRef<ScrollTrigger | null>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Track scroll through section to update steps smoothly
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 35%',
      end: 'bottom 65%',
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.33) {
          setActiveStep(0);
        } else if (progress < 0.66) {
          setActiveStep(1);
        } else {
          setActiveStep(2);
        }
      },
    });

    triggerRef.current = trigger;

    return () => {
      trigger.kill();
      triggerRef.current = null;
    };
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    if (triggerRef.current) {
      const start = triggerRef.current.start;
      const end = triggerRef.current.end;
      const targetScroll = start + ((idx + 0.1) / 3) * (end - start);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative z-10 bg-paper border-b-3 border-ink min-h-[160vh] md:min-h-[190vh]"
    >
      {/* 
        Sticky Centered Workflow Container:
        Sticks comfortably in the middle of the viewport (top-20 md:top-24 lg:top-28) 
        without getting slammed against the top edge or buried under the navbar.
      */}
      <div className="sticky top-20 sm:top-24 md:top-28 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Step Navigation and Step Details (7 Cols) */}
          <div className="md:col-span-7 flex flex-col gap-4 sm:gap-5">
            <SectionHeader
              eyebrow="WORKFLOW"
              title="Buy → Remix → Ship"
              kicker="A modular pipeline designed for solo builders and agile product teams."
            />

            {/* Step Progress Tabs with Brutalist Square Indicators */}
            <div className="flex items-center gap-2 sm:gap-3 py-1">
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isDone = activeStep > idx;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 border-3 border-ink font-mono font-bold text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-sun text-ink shadow-brutal-sm -translate-y-0.5'
                        : isDone
                        ? 'bg-cream text-ink'
                        : 'bg-fog text-smoke hover:text-ink'
                    }`}
                  >
                    <span>{step.number}</span>
                    <span>{step.title.split(' ')[0]}</span>
                    {isDone && <Check className="w-3.5 h-3.5 stroke-[3] text-ink" />}
                  </button>
                );
              })}
            </div>

            {/* Active Step Card */}
            <div className="relative min-h-[260px] sm:min-h-[280px]">
              {STEPS.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={step.number}
                    className={`transition-all duration-300 ease-out flex flex-col gap-3 ${
                      isCurrent
                        ? 'opacity-100 translate-y-0 relative pointer-events-auto'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-5 sm:p-6 border-3 border-ink bg-cream shadow-brutal flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-2xl sm:text-3xl text-ink">
                          {step.number}
                        </span>
                        <span className="font-mono font-bold text-xs uppercase px-2 py-0.5 border-2 border-ink bg-paper">
                          STEP 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                        {step.title}
                      </h3>

                      <p className="text-sm text-graphite font-medium leading-relaxed">
                        {step.body}
                      </p>

                      <div className="pt-1">
                        {step.snippet}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dedicated Interactive Step Visual Stage (5 Cols) */}
          <div className="md:col-span-5 relative min-h-[360px] sm:min-h-[400px] flex items-center justify-center">
            <div className="w-full">
              {activeStep === 0 && <BuyStepPreview />}
              {activeStep === 1 && <RemixStepPreview />}
              {activeStep === 2 && <ShipStepPreview />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
