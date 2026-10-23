'use client';

import * as React from 'react';
import { Check, Terminal, ShieldCheck, Rocket } from 'lucide-react';
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

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const pinTargetRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<ScrollTrigger | null>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const pinTarget = pinTargetRef.current;
    if (!section || !pinTarget) return;

    if (window.innerWidth < 768) return;

    // GSAP ScrollTrigger native pinning guarantees rock-solid scroll synchronization
    const trigger = ScrollTrigger.create({
      trigger: section,
      pin: pinTarget,
      start: 'top top',
      end: '+=200%',
      scrub: 0.5,
      anticipatePin: 1,
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
      className="relative z-10 bg-paper border-b-3 border-ink"
    >
      {/* Desktop/Tablet Pinned Workflow (>= 768px) */}
      <div className="hidden md:block">
        <div
          ref={pinTargetRef}
          className="h-screen w-full flex flex-col justify-center max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Column: Pinned Step Information (7 Cols) */}
            <div className="col-span-7 flex flex-col gap-5">
              <SectionHeader
                eyebrow="WORKFLOW"
                title="Buy → Remix → Ship"
                kicker="A modular pipeline designed for solo builders and agile product teams."
              />

              {/* Step Progress Rail with 3 Brutalist Square Indicators */}
              <div className="flex items-center gap-3 py-1">
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
              <div className="relative min-h-[290px]">
                {STEPS.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={step.number}
                      className={`transition-all duration-400 ease-out flex flex-col gap-4 ${
                        isCurrent
                          ? 'opacity-100 translate-y-0 relative pointer-events-auto'
                          : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="p-6 sm:p-7 border-3 border-ink bg-cream shadow-brutal flex flex-col gap-3.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-black text-2xl sm:text-3xl text-ink">
                            {step.number}
                          </span>
                          <span className="font-mono font-bold text-xs uppercase px-2 py-0.5 border-2 border-ink bg-paper">
                            ACT 0{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                          {step.title}
                        </h3>

                        <p className="text-sm sm:text-base text-graphite font-medium leading-relaxed">
                          {step.body}
                        </p>

                        <div className="pt-2">
                          {step.snippet}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Clear viewport space for the 3D Kit Assembly (5 Cols) */}
            <div className="col-span-5 h-[420px] lg:h-[480px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Stacked Layout (< 768px) */}
      <div className="block md:hidden py-14">
        <Container>
          <SectionHeader
            eyebrow="WORKFLOW"
            title="Buy → Remix → Ship"
            kicker="A modular pipeline designed for solo builders and agile product teams."
            className="mb-8"
          />

          <div className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 border-3 border-ink bg-cream shadow-brutal flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-2xl text-ink">
                    {step.number}
                  </span>
                  <Rocket className="w-5 h-5 stroke-[2.5] text-ink" />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-ink">
                  {step.title}
                </h3>

                <p className="text-sm text-graphite font-medium leading-relaxed">
                  {step.body}
                </p>

                <div className="pt-2">
                  {step.snippet}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
