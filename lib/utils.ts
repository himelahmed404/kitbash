import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Free';
  return `$${price}`;
}

export function formatSize(mb: number): string {
  if (mb < 1) {
    return `${Math.round(mb * 1024)} KB`;
  }
  return `${mb.toFixed(1)} MB`;
}

// Deterministic brand color picker based on an ID hash
export function hashToBrandTone(id: string): 'sun' | 'bubblegum' | 'mint' {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const tones: Array<'sun' | 'bubblegum' | 'mint'> = ['sun', 'bubblegum', 'mint'];
  return tones[Math.abs(hash) % tones.length];
}
