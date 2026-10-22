import type { Kit, Category } from '@/types/kit';

export type PriceBucket = 'any' | 'free' | 'under-25' | '25-50' | '50-plus';
export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'top-rated';

export interface Filters {
  q: string;
  category: Category | 'all';
  price: PriceBucket;
  sort: SortOption;
}

export const DEFAULT_FILTERS: Filters = {
  q: '',
  category: 'all',
  price: 'any',
  sort: 'newest',
};

export function inBucket(price: number, bucket: PriceBucket): boolean {
  switch (bucket) {
    case 'any':
      return true;
    case 'free':
      return price === 0;
    case 'under-25':
      return price > 0 && price < 25;
    case '25-50':
      return price >= 25 && price <= 50;
    case '50-plus':
      return price > 50;
    default:
      return true;
  }
}

const sorters: Record<SortOption, (a: Kit, b: Kit) => number> = {
  newest: (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'top-rated': (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
};

export function filterKits(kits: Kit[], filters: Filters): Kit[] {
  const needle = filters.q.trim().toLowerCase();

  return kits
    .filter(
      (k) =>
        !needle ||
        [k.title, k.shortDescription, ...(k.tags ?? [])]
          .join(' ')
          .toLowerCase()
          .includes(needle)
    )
    .filter(
      (k) => filters.category === 'all' || k.category === filters.category
    )
    .filter((k) => inBucket(k.price, filters.price))
    .sort(sorters[filters.sort]);
}

export const PRICE_BUCKETS: { value: PriceBucket; label: string }[] = [
  { value: 'any', label: 'Any' },
  { value: 'free', label: 'Free' },
  { value: 'under-25', label: 'Under \$25' },
  { value: '25-50', label: '\$25–\$50' },
  { value: '50-plus', label: '\$50+' },
];

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price ↑' },
  { value: 'price-desc', label: 'Price ↓' },
  { value: 'top-rated', label: 'Top Rated' },
];
