import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, PackageX } from 'lucide-react';

export default function ItemNotFound() {
  return (
    <Container className="py-20 md:py-32 flex flex-col items-center text-center">
      {/* Empty box illustration */}
      <div className="mb-8" aria-hidden="true">
        <div className="relative inline-flex items-center justify-center">
          {/* Box shape */}
          <div className="w-28 h-28 bg-cream border-3 border-ink shadow-brutal flex items-center justify-center">
            <PackageX className="w-14 h-14 text-smoke" strokeWidth={1.5} />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-sun border-2 border-ink rotate-12" />
          <div className="absolute -bottom-2 -left-3 w-5 h-5 bg-bubblegum rounded-full border-2 border-ink" />
          <div className="absolute -top-2 -left-4 w-4 h-4 bg-mint border-2 border-ink -rotate-6" />
        </div>
      </div>

      <h1 className="text-h1 font-bold text-ink mb-3">
        Kit not found
      </h1>
      <p className="text-lead text-graphite max-w-[44ch] mb-8">
        This kit got lost in shipping. It might have been removed, or the link
        could be wrong.
      </p>

      <div className="flex gap-3">
        <Button asChild variant="primary">
          <Link href="/items">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            Browse all kits
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </Container>
  );
}
