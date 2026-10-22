'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { seedKits } from '@/data/seed-kits';
import { filterKits, DEFAULT_FILTERS, type PriceBucket, type SortOption } from '@/lib/filters';
import type { Category } from '@/types/kit';
import { SearchBar } from './SearchBar';
import { KitFilters } from './KitFilters';
import { KitGrid } from './KitGrid';

export function ItemsBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read filters from URL
  const q = searchParams.get('q') ?? '';
  const category = (searchParams.get('category') as Category | 'all') ?? 'all';
  const price = (searchParams.get('price') as PriceBucket) ?? 'any';
  const sort = (searchParams.get('sort') as SortOption) ?? 'newest';

  // Debounced search with render-time sync on URL param change
  const [prevQ, setPrevQ] = React.useState(q);
  const [searchInput, setSearchInput] = React.useState(q);
  if (prevQ !== q) {
    setPrevQ(q);
    setSearchInput(q);
  }
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const updateURL = React.useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (
          value === '' ||
          value === DEFAULT_FILTERS[key as keyof typeof DEFAULT_FILTERS]
        ) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      const qs = params.toString();
      router.replace(qs ? `?${qs}` : '/items', { scroll: false });
    },
    [router, searchParams]
  );

  // Debounce search input
  React.useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateURL({ q: searchInput });
    }, 250);
    return () => clearTimeout(debounceRef.current);
  }, [searchInput, updateURL]);


  const filtered = filterKits(seedKits, { q, category, price, sort });

  const handleReset = () => {
    setSearchInput('');
    router.replace('/items', { scroll: false });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Search bar */}
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
      />

      {/* Filters */}
      <KitFilters
        category={category}
        price={price}
        sort={sort}
        resultCount={filtered.length}
        onCategoryChange={(cat) => updateURL({ category: cat })}
        onPriceChange={(bucket) => updateURL({ price: bucket })}
        onSortChange={(s) => updateURL({ sort: s })}
        onReset={handleReset}
      />

      {/* Grid */}
      <KitGrid kits={filtered} onReset={handleReset} />
    </div>
  );
}
