import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const marqueeItems = [
    'UI KITS',
    '★',
    'ICON PACKS',
    '✦',
    'FONTS',
    '▲',
    'TEMPLATES',
    '●',
    'WIREFRAMES',
    '★',
    '3D ASSETS',
    '✦',
  ];

  return (
    <footer id="footer" className="w-full mt-auto">
      {/* CTA Band */}
      <section className="bg-sun border-y-3 border-ink py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="eyebrow text-ink mb-1 block">CREATOR STUDIO</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-ink">
              Got a kit sitting in your drafts?
            </h2>
            <p className="text-graphite font-sans text-sm sm:text-base mt-1 max-w-[48ch]">
              Join thousands of creators selling design kits, icon sets, and code templates.
            </p>
          </div>
          <Link href="/items/add">
            <Button variant="dark" size="lg" className="shrink-0 gap-2">
              <span>Sell a kit</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Button>
          </Link>
        </div>

        {/* Marquee ticker */}
        <div className="mt-10 overflow-hidden border-y-2 border-ink bg-paper py-2.5">
          <div className="flex w-max animate-[marquee_25s_linear_infinite] select-none gap-6 text-sm font-mono font-bold uppercase tracking-wider text-ink">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dark Footer */}
      <div className="bg-ink text-paper on-ink pt-16 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b-2 border-graphite/40">
            {/* Col 1 & 2: Brand */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <Logo inverted />
              <p className="text-smoke text-sm max-w-[36ch] font-sans">
                A neo-brutalist marketplace for makers who ship. High-quality UI kits, icon packs,
                custom typefaces, and full-stack templates.
              </p>

              {/* Social links (44px squares) */}
              <div className="flex items-center gap-2.5 mt-2">
                {[
                  {
                    name: 'GitHub',
                    href: 'https://github.com',
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'X',
                    href: 'https://x.com',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Dribbble',
                    href: 'https://dribbble.com',
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.897 10.978c-.287-.044-2.822-.416-5.55.748-.093-.207-.19-.413-.289-.618-.475-.98-1.002-1.93-1.579-2.842 3.428-1.464 4.808-.07 4.96.115.865.736 1.706 1.642 2.458 2.597zM12 2.182c2.404 0 4.614.86 6.34 2.298-.246.284-1.745 1.942-5.35 3.328-1.57-2.847-3.27-5.187-3.486-5.48A9.774 9.774 0 0112 2.182zm-4.664.88c.205.275 1.833 2.49 3.414 5.334-3.923 1.135-7.53.99-7.892.97A9.832 9.832 0 017.336 3.062zM2.182 12c0-.306.018-.608.05-.907.398.02 4.453.18 8.793-1.144.133.266.262.534.387.804-.265.08-.535.163-.808.25-4.464 1.436-7.868 4.793-8.08 5.006A9.769 9.769 0 012.182 12zm3.328 6.746c.307-.333 3.327-3.407 7.747-4.872 1.096 2.87 1.575 5.64 1.648 6.096A9.782 9.782 0 0112 21.818c-2.484 0-4.757-.92-6.49-2.452v-.62zm10.74 1.794c-.092-.533-.564-3.187-1.614-5.952 2.505-.986 4.67-.704 4.93-.666a9.789 9.789 0 01-3.316 6.618z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 flex items-center justify-center border-2 border-paper text-paper bg-ink transition-colors hover:bg-sun hover:border-sun hover:text-ink cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Marketplace */}
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-sun">Marketplace</span>
              <ul className="flex flex-col gap-2 text-sm font-sans">
                <li>
                  <Link href="/items" className="text-paper hover:text-sun transition-colors">
                    All Kits
                  </Link>
                </li>
                <li>
                  <Link href="/items?category=ui-kit" className="text-paper hover:text-sun transition-colors">
                    UI Kits
                  </Link>
                </li>
                <li>
                  <Link href="/items?category=icons" className="text-paper hover:text-sun transition-colors">
                    Icon Packs
                  </Link>
                </li>
                <li>
                  <Link href="/items?category=fonts" className="text-paper hover:text-sun transition-colors">
                    Fonts
                  </Link>
                </li>
                <li>
                  <Link href="/items?category=templates" className="text-paper hover:text-sun transition-colors">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Studio & Company */}
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-bubblegum">Company</span>
              <ul className="flex flex-col gap-2 text-sm font-sans">
                <li>
                  <Link href="/about" className="text-paper hover:text-sun transition-colors">
                    About Kitbash
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-paper hover:text-sun transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/items/add" className="text-paper hover:text-sun transition-colors">
                    Sell a Kit
                  </Link>
                </li>
                <li>
                  <Link href="/items/manage" className="text-paper hover:text-sun transition-colors">
                    Manage Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-mint">Legal</span>
              <ul className="flex flex-col gap-2 text-sm font-sans">
                <li>
                  <span className="text-smoke cursor-default">Commercial License</span>
                </li>
                <li>
                  <span className="text-smoke cursor-default">Terms of Service</span>
                </li>
                <li>
                  <span className="text-smoke cursor-default">Privacy Policy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant Wordmark */}
          <div className="pt-10 pb-6 overflow-hidden select-none" aria-hidden="true">
            <h1 className="text-[17vw] font-black uppercase tracking-tighter leading-none text-center text-outline-white hover:text-sun transition-colors duration-300">
              KITBASH
            </h1>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-graphite/30 text-xs font-mono text-smoke">
            <p>© 2026 Kitbash. All rights reserved.</p>
            <p>Built with Next.js App Router · Neo-brutalist Design System</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
