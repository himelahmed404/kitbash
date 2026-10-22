import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { ItemsBrowser } from '@/components/kits/ItemsBrowser';

export const metadata: Metadata = {
  title: 'All Kits',
  description:
    'Browse, search and filter design and dev kits — UI kits, icon packs, fonts, and templates.',
};

export default function ItemsPage() {
  return (
    <>
      {/* Header band */}
      <div className="bg-cream border-b-3 border-ink py-10 md:py-14">
        <Container>
          <span className="eyebrow text-graphite mb-2 block">Marketplace</span>
          <h1 className="text-h1 font-bold tracking-tight text-ink">
            All kits
          </h1>
        </Container>
      </div>

      {/* Main content */}
      <Container className="py-8 md:py-12">
        <Suspense
          fallback={
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-paper border-3 border-ink shadow-brutal animate-pulse"
                >
                  <div className="aspect-[16/10] bg-fog border-b-3 border-ink" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-20 bg-fog" />
                    <div className="h-6 w-3/4 bg-fog" />
                    <div className="h-4 w-full bg-fog" />
                    <div className="h-10 w-28 bg-fog" />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <ItemsBrowser />
        </Suspense>
      </Container>
    </>
  );
}
