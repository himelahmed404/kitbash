import * as React from 'react';
import type { Kit } from '@/types/kit';
import { CATEGORY_LABELS } from '@/types/kit';
import { formatPrice, formatSize } from '@/lib/utils';

interface SpecTableProps {
  kit: Kit;
  className?: string;
}

export function SpecTable({ kit, className }: SpecTableProps) {
  const specs = [
    { label: 'Format', value: kit.formats.join(' · ') },
    { label: 'File size', value: formatSize(kit.fileSizeMB) },
    { label: 'License', value: kit.license },
    { label: 'Version', value: `v${kit.version}` },
    { label: 'Category', value: CATEGORY_LABELS[kit.category] },
    { label: 'Price', value: formatPrice(kit.price) },
    {
      label: 'Released',
      value: new Date(kit.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    },
    { label: 'Creator', value: kit.ownerName },
  ];

  return (
    <dl
      className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm ${className ?? ''}`}
    >
      {specs.map((spec) => (
        <React.Fragment key={spec.label}>
          <dt className="font-mono font-medium uppercase tracking-wider text-smoke text-xs">
            {spec.label}
          </dt>
          <dd className="font-sans text-ink font-medium">{spec.value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
