'use client';

import * as React from 'react';
import { Sparkles, Check, Terminal, FileCode2, Layers, ShieldCheck } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';

export function HeroKitShowcase() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
  const [activeSwatch, setActiveSwatch] = React.useState<'sun' | 'mint' | 'bubblegum'>('sun');

  // Interactive mouse tilt parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = containerRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Mild, pleasing tilt angle
    const rotX = -(y / (rect.height / 2)) * 6;
    const rotY = (x / (rect.width / 2)) * 6;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const swatchColorMap = {
    sun: { bg: 'bg-sun', border: 'border-ink', label: '#FFD600 · SUN' },
    mint: { bg: 'bg-mint', border: 'border-ink', label: '#5EEAD4 · MINT' },
    bubblegum: { bg: 'bg-bubblegum', border: 'border-ink', label: '#FF5FA2 · PINK' },
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] mx-auto transition-transform duration-200 ease-out select-none"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Floating Top-Right Sticker */}
      <div className="absolute -top-3.5 -right-2 sm:-right-4 z-20 rotate-3 transition-transform hover:rotate-6 hover:scale-105">
        <span className="bg-bubblegum text-ink font-mono font-bold text-[11px] sm:text-xs uppercase px-3 py-1 border-2 border-ink shadow-brutal-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>DROP 04 VERIFIED</span>
        </span>
      </div>

      {/* Floating Bottom-Left Sticker */}
      <div className="absolute -bottom-3.5 -left-2 sm:-left-4 z-20 -rotate-2 transition-transform hover:-rotate-4 hover:scale-105">
        <span className="bg-mint text-ink font-mono font-bold text-[11px] sm:text-xs uppercase px-3 py-1 border-2 border-ink shadow-brutal-sm flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>COMMERCIAL LICENSE</span>
        </span>
      </div>

      {/* Main Neo-brutalist Staging Container */}
      <div className="bg-cream border-3 border-ink shadow-brutal-lg overflow-hidden flex flex-col">
        {/* Terminal/Window Header Bar */}
        <div className="bg-ink text-paper px-3 sm:px-4 py-2 border-b-3 border-ink flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-sun border border-ink inline-block" />
            <span className="w-3 h-3 bg-mint border border-ink inline-block" />
            <span className="w-3 h-3 bg-bubblegum border border-ink inline-block" />
          </div>
          <span className="font-mono text-[11px] sm:text-xs text-smoke font-bold tracking-wider">
            bundle_staging.tsx
          </span>
          <span className="font-mono text-[10px] text-mint uppercase font-bold">
            ● READY
          </span>
        </div>

        {/* Inner Card Canvas */}
        <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-paper">
          {/* Card Eyebrow and Bundle Title */}
          <div className="flex items-center justify-between border-b-2 border-ink/15 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-sun border-2 border-ink flex items-center justify-center font-black text-xs text-ink">
                K
              </div>
              <div>
                <h4 className="font-sans font-black text-sm uppercase tracking-tight text-ink leading-none">
                  NEO MATRIX PRO
                </h4>
                <span className="font-mono text-[10px] text-smoke">v2.4.0 · Next.js 16</span>
              </div>
            </div>
            <Tag tone="sun">UI KIT</Tag>
          </div>

          {/* Interactive Component Preview Section */}
          <div className="bg-cream border-2 border-ink p-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-graphite">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-ink stroke-[2.5]" />
                <span>Live Component</span>
              </span>
              <span className="text-[10px] bg-paper px-1.5 py-0.5 border border-ink">
                Interactive
              </span>
            </div>

            {/* Live Interactive Button Preview that swaps theme on click */}
            <div className="flex items-center justify-between gap-3 p-2 bg-paper border border-ink/40">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-smoke uppercase">Theme Accent</span>
                <span className="font-mono text-xs font-bold uppercase text-ink">
                  {swatchColorMap[activeSwatch].label}
                </span>
              </div>
              <button
                type="button"
                className={`px-3 py-1.5 border-2 border-ink font-sans font-black text-xs uppercase shadow-brutal-sm brutal-lift cursor-pointer ${swatchColorMap[activeSwatch].bg} text-ink`}
              >
                Ship Weekend ⚡
              </button>
            </div>

            {/* Clickable Swatches to Switch Colors */}
            <div className="flex items-center justify-between pt-1">
              <span className="font-mono text-[10px] text-smoke uppercase">Tokens:</span>
              <div className="flex items-center gap-1.5">
                {(['sun', 'mint', 'bubblegum'] as const).map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setActiveSwatch(color)}
                    aria-label={`Select ${color} token`}
                    className={`w-5 h-5 border-2 border-ink cursor-pointer transition-transform ${
                      color === 'sun'
                        ? 'bg-sun'
                        : color === 'mint'
                        ? 'bg-mint'
                        : 'bg-bubblegum'
                    } ${activeSwatch === color ? 'scale-125 shadow-brutal-sm ring-1 ring-ink' : 'opacity-80 hover:opacity-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Specs & Included Assets Matrix */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 p-2 bg-fog border border-ink/30">
              <FileCode2 className="w-3.5 h-3.5 text-ink shrink-0" />
              <span className="text-graphite font-bold">64+ React TSX</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-fog border border-ink/30">
              <Layers className="w-3.5 h-3.5 text-ink shrink-0" />
              <span className="text-graphite font-bold">Figma Tokens</span>
            </div>
          </div>

          {/* Bottom Security / Guarantee Strip */}
          <div className="pt-2 border-t-2 border-ink/15 flex items-center justify-between text-[10px] font-mono text-smoke">
            <span className="flex items-center gap-1 text-ink font-bold">
              <Check className="w-3 h-3 stroke-[3] text-mint" />
              <span>Full source included</span>
            </span>
            <span className="font-bold text-ink">18.4 MB ZIP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
