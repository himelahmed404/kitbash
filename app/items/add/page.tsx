import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SellerStudioForm } from '@/components/kits/SellerStudioForm';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Add a Kit — Seller Studio',
  description:
    'Publish a new design or dev kit to the Kitbash marketplace. Fast form validation, live preview, and instant listing.',
};

export default function AddItemPage() {
  return (
    <>
      {/* Header Band */}
      <div className="bg-cream border-b-3 border-ink py-10 md:py-14">
        <Container>
          <Reveal y={16}>
            <span className="eyebrow text-graphite mb-2 block">Seller Studio</span>
            <h1 className="text-h1 font-bold tracking-tight text-ink">
              Add a kit
            </h1>
            <p className="text-lead text-graphite max-w-[60ch] mt-3">
              List a new kit on the Kitbash marketplace. Every field validates in real-time,
              with a live catalog preview on the right.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* Main Form Section */}
      <Container className="py-8 md:py-14">
        <RequireAuth>
          <Reveal y={20} delay={0.1}>
            <SellerStudioForm />
          </Reveal>
        </RequireAuth>
      </Container>
    </>
  );
}
