import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ManageKitsView } from '@/components/kits/ManageKitsView';

export const metadata: Metadata = {
  title: 'Manage Kits — Seller Studio',
  description:
    'Manage your published design and dev kits. View performance, edit listings, and organize your marketplace portfolio.',
};

export default function ManageKitsPage() {
  return (
    <>
      {/* Header Band */}
      <div className="bg-cream border-b-3 border-ink py-10 md:py-14">
        <Container>
          <span className="eyebrow text-graphite mb-2 block">Seller Studio</span>
          <h1 className="text-h1 font-bold tracking-tight text-ink">
            Manage kits
          </h1>
          <p className="text-lead text-graphite max-w-[60ch] mt-3">
            Review your listed kits, preview live product pages, or remove discontinued assets from the marketplace.
          </p>
        </Container>
      </div>

      {/* Main Management Section */}
      <Container className="py-8 md:py-12">
        <ManageKitsView />
      </Container>
    </>
  );
}
