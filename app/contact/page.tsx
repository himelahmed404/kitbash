'use client';

import * as React from 'react';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/contact/ContactForm';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';
import {
  Mail,
  Clock,
  MapPin,
  HelpCircle,
  MessageSquare,
  FileQuestion,
  Headphones,
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex-1 pb-20">
      {/* 1. Header Banner */}
      <section className="border-b-3 border-ink bg-cream/40 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <Reveal y={16}>
              <Tag tone="bubblegum" className="mb-4">
                TRANSMISSIONS // DESK 04
              </Tag>
            </Reveal>

            <SplitHeading
              as="h1"
              className="text-display font-black text-ink tracking-tight mb-4"
            >
              Get in touch with the crew.
            </SplitHeading>

            <Reveal y={20} delay={0.15}>
              <p className="text-lead text-graphite max-w-[54ch]">
                Have a question about a kit, need assistance with a commercial license,
                or want to distribute your own components on Kitbash? We read every transmission.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Main Content Grid */}
      <Container className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form (7 cols) */}
          <Reveal y={24} delay={0.08} className="lg:col-span-7">
            <div className="bg-paper border-3 border-ink p-6 md:p-10 shadow-brutal">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-3.5 h-3.5 bg-sun border-2 border-ink" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  DISPATCH CONSOLE
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-ink mb-2">
                Send us a message
              </h2>
              <p className="text-graphite text-sm mb-8">
                Fill in the blueprint below and our engineering team will get back to you with human responses.
              </p>

              <ContactForm />
            </div>
          </Reveal>

          {/* Right Column: Channels, Info, FAQ (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Support Card */}
            <Reveal y={24} delay={0.16}>
              <Card className="bg-paper">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sun border-3 border-ink shadow-brutal-sm flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-ink stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="eyebrow text-graphite">DIRECT DISPATCH</span>
                    <h3 className="text-lg font-bold text-ink">Support Desk</h3>
                  </div>
                </div>

                <div className="space-y-3.5 font-sans text-sm">
                  <div className="flex items-center gap-3 p-3 bg-fog border-2 border-ink">
                    <Mail className="w-4 h-4 text-ink shrink-0" />
                    <a
                      href="mailto:support@kitbash.dev"
                      className="font-mono text-xs font-bold text-ink hover:underline hover:text-ink"
                    >
                      support@kitbash.dev
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-fog border-2 border-ink">
                    <Clock className="w-4 h-4 text-ink shrink-0" />
                    <span className="font-mono text-xs text-graphite">
                      Response time: <strong className="text-ink">&lt; 4 hours</strong> (Mon–Fri)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-fog border-2 border-ink">
                    <MapPin className="w-4 h-4 text-ink shrink-0" />
                    <span className="font-mono text-xs text-graphite">
                      Maker District, San Francisco, CA
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Social Channels Card */}
            <Reveal y={24} delay={0.24}>
              <Card className="bg-paper">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-mint border-3 border-ink shadow-brutal-sm flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-ink stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="eyebrow text-graphite">COMMUNITY</span>
                    <h3 className="text-lg font-bold text-ink">Maker Channels</h3>
                  </div>
                </div>

                <p className="text-graphite text-xs mb-4">
                  Join our Discord server or follow our public changelog on GitHub and X.
                </p>

                <div className="flex items-center gap-3">
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
                      className="w-11 h-11 flex items-center justify-center border-3 border-ink text-ink bg-paper shadow-brutal-sm hover:bg-sun hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Card>
            </Reveal>

            {/* Quick FAQ / Guidance Card */}
            <Reveal y={24} delay={0.32}>
              <Card className="bg-paper">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-bubblegum border-3 border-ink shadow-brutal-sm flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-ink stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="eyebrow text-graphite">RAPID ANSWERS</span>
                    <h3 className="text-lg font-bold text-ink">Frequently Asked</h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div className="border-b-2 border-ink/10 pb-3">
                    <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
                      <FileQuestion className="w-3.5 h-3.5 text-graphite" />
                      Can I request a custom kit?
                    </p>
                    <p className="text-graphite leading-relaxed">
                      Yes! Send us your framework requirements, Figma specifications, or design tokens, and we&apos;ll assess it for our upcoming releases.
                    </p>
                  </div>

                  <div className="border-b-2 border-ink/10 pb-3">
                    <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
                      <FileQuestion className="w-3.5 h-3.5 text-graphite" />
                      What if a kit doesn&apos;t fit my stack?
                    </p>
                    <p className="text-graphite leading-relaxed">
                      We offer 14-day hassle-free refunds if any kit files are corrupt, uncompilable, or materially deviate from live previews.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
                      <FileQuestion className="w-3.5 h-3.5 text-graphite" />
                      How do creator payouts work?
                    </p>
                    <p className="text-graphite leading-relaxed">
                      Creators receive direct monthly payouts with an industry-low 15% platform fee.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
