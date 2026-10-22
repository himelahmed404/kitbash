export type Category = 'ui-kit' | 'icons' | 'fonts' | 'templates';
export type License = 'Personal' | 'Commercial' | 'Extended';

export interface Kit {
  id: string;
  title: string;
  shortDescription: string; // ≤120
  description: string;
  category: Category;
  price: number; // USD, 0 = free
  formats: string[]; // ['Figma','React']
  fileSizeMB: number;
  license: License;
  version: string; // semver
  rating?: number; // 0–5, seed only
  imageUrl?: string;
  tags?: string[];
  ownerId: string; // 'kitbash' for seed kits
  ownerName: string;
  createdAt: string; // ISO date string
  official?: boolean; // seed kits
}

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'ui-kit', label: 'UI Kits' },
  { value: 'icons', label: 'Icons' },
  { value: 'fonts', label: 'Fonts' },
  { value: 'templates', label: 'Templates' },
];

export const LICENSES: License[] = ['Personal', 'Commercial', 'Extended'];

export const CATEGORY_LABELS: Record<Category, string> = {
  'ui-kit': 'UI Kit',
  icons: 'Icon Pack',
  fonts: 'Font',
  templates: 'Template',
};
