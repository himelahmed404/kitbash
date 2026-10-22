import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LogoProps {
  inverted?: boolean;
  className?: string;
}

export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5 select-none focus:outline-none', className)}
    >
      <div
        className={cn(
          'w-7 h-7 sm:w-8 sm:h-8 border-3 transition-transform duration-200 ease-out group-hover:rotate-90',
          inverted
            ? 'bg-sun border-paper shadow-[3px_3px_0_0_#FFFFFF]'
            : 'bg-sun border-ink shadow-brutal-sm'
        )}
      />
      <span
        className={cn(
          'font-sans font-bold text-lg sm:text-xl tracking-tight uppercase',
          inverted ? 'text-paper' : 'text-ink'
        )}
      >
        KITBASH
      </span>
    </Link>
  );
}
