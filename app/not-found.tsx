import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { ArrowLeft, Home, PackageSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <Container className="py-20 md:py-32 flex flex-col items-center text-center">
      {/* Neo-brutalist 404 Visual */}
      <div className="relative mb-6 select-none" aria-hidden="true">
        <span className="font-sans font-black text-8xl md:text-[11rem] leading-none text-outline">
          404
        </span>
        {/* Floating geometric badges */}
        <span className="absolute -top-3 -right-4 md:-right-6 w-8 h-8 bg-sun border-3 border-ink shadow-brutal-sm rotate-12 flex items-center justify-center font-mono font-bold text-xs text-ink">
          ✕
        </span>
        <span className="absolute -bottom-2 -left-4 md:-left-6 w-7 h-7 bg-bubblegum border-3 border-ink shadow-brutal-sm -rotate-12" />
        <span className="absolute top-1/2 -left-8 w-5 h-5 bg-mint border-2 border-ink rotate-45 hidden md:block" />
      </div>

      <Tag tone="bubblegum" className="mb-4">
        ERROR 404 // MISSING BLUEPRINT
      </Tag>

      <h1 className="text-h1 font-bold text-ink mb-3 max-w-[20ch]">
        This page isn&apos;t in the kit.
      </h1>

      <p className="text-lead text-graphite max-w-[48ch] mb-8">
        The URL you followed points to a component that doesn&apos;t exist, was
        unmounted, or hasn&apos;t been manufactured yet.
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="primary">
          <Link href="/">
            <Home className="w-4 h-4" strokeWidth={2.5} />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="dark">
          <Link href="/items">
            <PackageSearch className="w-4 h-4" strokeWidth={2.5} />
            Browse Kits
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            Contact Support
          </Link>
        </Button>
      </div>
    </Container>
  );
}
