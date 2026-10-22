import type { Kit } from '@/types/kit';

export const seedKits: Kit[] = [
  // ── UI Kits (3) ──────────────────────────────────────────────
  {
    id: 'orbit-dashboard-kit',
    title: 'Orbit Dashboard Kit',
    shortDescription:
      'A complete dashboard UI kit with 60+ components for analytics, SaaS, and admin panels.',
    description:
      'Orbit is a production-ready dashboard component library built for teams that ship fast. It includes data tables, charts, stat cards, nav drawers, notification panels, settings pages and more. Every component respects spacing tokens and works across light and dark contexts.\n\n**What\'s inside:**\n- 60+ unique components\n- 12 pre-built page templates\n- Responsive from 360px to 2560px\n- Figma auto-layout and React props aligned\n- Dark mode variants included',
    category: 'ui-kit',
    price: 39,
    formats: ['Figma', 'React'],
    fileSizeMB: 48.2,
    license: 'Commercial',
    version: '2.1.0',
    rating: 4.9,
    tags: ['dashboard', 'saas', 'admin', 'analytics', 'components'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-08-15T10:00:00.000Z',
    official: true,
  },
  {
    id: 'neon-form-system',
    title: 'Neon Form System',
    shortDescription:
      'Accessible form components with validation states, multi-step flows and conditional logic.',
    description:
      'Neon is a form-first UI kit. Every input, select, checkbox, radio, toggle, date picker and file upload has been designed with real validation states and error messaging in mind.\n\n**What\'s inside:**\n- 40+ form components\n- Multi-step wizard template\n- Accessible by default (WCAG AA)\n- Figma + React + Tailwind versions\n- Zod schema examples included',
    category: 'ui-kit',
    price: 29,
    formats: ['Figma', 'React', 'Tailwind'],
    fileSizeMB: 31.6,
    license: 'Commercial',
    version: '1.3.0',
    rating: 4.7,
    tags: ['forms', 'inputs', 'validation', 'accessible', 'wizard'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-09-02T14:30:00.000Z',
    official: true,
  },
  {
    id: 'starter-ui-essentials',
    title: 'Starter UI Essentials',
    shortDescription:
      'Free foundational UI kit with buttons, cards, modals, and basic layout components.',
    description:
      'Everything you need to get started. Starter UI Essentials is a free, open kit of foundational components that pair perfectly with any Kitbash premium kit.\n\n**What\'s inside:**\n- 24 essential components\n- Buttons, cards, modals, alerts\n- Responsive grid system\n- Tailwind utility classes\n- MIT license — use anywhere',
    category: 'ui-kit',
    price: 0,
    formats: ['Figma', 'React', 'Tailwind'],
    fileSizeMB: 8.4,
    license: 'Personal',
    version: '1.0.0',
    rating: 4.5,
    tags: ['free', 'starter', 'essentials', 'beginner', 'open-source'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-07-20T08:00:00.000Z',
    official: true,
  },

  // ── Icon Packs (3) ──────────────────────────────────────────
  {
    id: 'blocky-icons',
    title: 'Blocky Icons 900',
    shortDescription:
      '900 chunky geometric icons in 6 categories. Pixel-perfect at 24px with 2.5px stroke.',
    description:
      'Blocky is a geometric icon set designed for bold UIs. Every glyph is built on a 24px grid with consistent 2.5px strokes and squared terminals that match the neo-brutalist aesthetic.\n\n**What\'s inside:**\n- 900 unique icons\n- 6 categories: Interface, Commerce, Media, Social, Dev, Misc\n- SVG, Figma components, React (tree-shakeable)\n- Dual-tone variants (outline + filled)\n- Icon search and preview tool',
    category: 'icons',
    price: 19,
    formats: ['SVG', 'Figma', 'React'],
    fileSizeMB: 12.4,
    license: 'Commercial',
    version: '1.4.0',
    rating: 4.8,
    tags: ['icons', 'geometric', 'svg', 'brutalist', 'interface'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-06-10T12:00:00.000Z',
    official: true,
  },
  {
    id: 'pixel-arrows-pack',
    title: 'Pixel Arrows & Pointers',
    shortDescription:
      'A free set of 120 directional icons: arrows, chevrons, carets, cursors, hand pointers.',
    description:
      'Point your users in the right direction. This free icon pack covers every directional need with pixel-crisp arrows and pointers.\n\n**What\'s inside:**\n- 120 directional icons\n- Arrows, chevrons, carets, cursors\n- 4 styles: thin, regular, bold, filled\n- SVG + PNG at 1×, 2×, 3×\n- Free for personal and commercial use',
    category: 'icons',
    price: 0,
    formats: ['SVG', 'PNG'],
    fileSizeMB: 4.2,
    license: 'Commercial',
    version: '1.1.0',
    rating: 4.3,
    tags: ['free', 'arrows', 'pointers', 'directional', 'cursors'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-08-28T16:00:00.000Z',
    official: true,
  },
  {
    id: 'devtools-icon-set',
    title: 'DevTools Icon Set',
    shortDescription:
      '480 icons for developer tools: terminals, databases, git, APIs, cloud, and CI/CD.',
    description:
      'Icons made for developer-facing products. DevTools covers the visual language of software engineering from terminal prompts to deployment pipelines.\n\n**What\'s inside:**\n- 480 developer-focused icons\n- Terminal, database, git, API, cloud, CI/CD\n- Consistent 24px grid, 2px stroke\n- SVG optimized for web\n- Figma library with search',
    category: 'icons',
    price: 24,
    formats: ['SVG', 'Figma'],
    fileSizeMB: 9.8,
    license: 'Commercial',
    version: '2.0.0',
    rating: 4.6,
    tags: ['developer', 'terminal', 'devtools', 'git', 'cloud'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-09-18T09:00:00.000Z',
    official: true,
  },

  // ── Fonts (3) ───────────────────────────────────────────────
  {
    id: 'grotto-sans',
    title: 'Grotto Sans',
    shortDescription:
      'A bold geometric sans-serif with sharp terminals. 9 weights from Thin to Black.',
    description:
      'Grotto is a display-first typeface that commands attention. Its squared terminals and generous x-height make it perfect for headlines, hero sections and marketing copy.\n\n**What\'s inside:**\n- 9 weights: Thin to Black\n- Latin Extended character set\n- OpenType features: stylistic alternates, tabular figures\n- OTF, TTF and WOFF2 formats\n- Variable font option included',
    category: 'fonts',
    price: 29,
    formats: ['OTF', 'TTF', 'WOFF2'],
    fileSizeMB: 3.1,
    license: 'Personal',
    version: '1.0.2',
    rating: 4.7,
    tags: ['sans-serif', 'display', 'geometric', 'variable', 'headline'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-05-14T11:00:00.000Z',
    official: true,
  },
  {
    id: 'mono-brutal',
    title: 'Mono Brutal',
    shortDescription:
      'A monospace typeface with attitude. Squared dots, slashed zeros, and ligatures for code.',
    description:
      'Mono Brutal is a monospace font designed for editors, terminals, and UI labels. It pairs perfectly with Space Grotesk and has programming ligatures for common operators.\n\n**What\'s inside:**\n- 4 weights: Regular, Medium, Bold, Black\n- 200+ programming ligatures\n- Slashed zero, dotted zero alternates\n- Powerline-compatible glyphs\n- OTF and TTF formats',
    category: 'fonts',
    price: 19,
    formats: ['OTF', 'TTF'],
    fileSizeMB: 1.8,
    license: 'Commercial',
    version: '1.2.0',
    rating: 4.5,
    tags: ['monospace', 'code', 'terminal', 'ligatures', 'programming'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-07-08T10:30:00.000Z',
    official: true,
  },
  {
    id: 'serif-craft',
    title: 'Serif Craft',
    shortDescription:
      'An editorial serif with ink traps and high contrast. Perfect for long-form reading.',
    description:
      'Serif Craft brings editorial elegance to digital products. Designed for readability at body sizes and drama at display sizes, with distinctive ink traps that add character.\n\n**What\'s inside:**\n- 6 weights: Light to ExtraBold\n- Italic companions for all weights\n- Extended Latin + Cyrillic\n- OTF, TTF, WOFF2\n- Specimen PDF with pairing suggestions',
    category: 'fonts',
    price: 39,
    formats: ['OTF', 'TTF', 'WOFF2'],
    fileSizeMB: 5.4,
    license: 'Extended',
    version: '2.0.0',
    rating: 4.9,
    tags: ['serif', 'editorial', 'reading', 'ink-traps', 'elegant'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-10-01T14:00:00.000Z',
    official: true,
  },

  // ── Templates (3) ──────────────────────────────────────────
  {
    id: 'launchpad-saas',
    title: 'Launchpad SaaS Template',
    shortDescription:
      'A full-stack SaaS starter with auth, billing, dashboard, and marketing pages.',
    description:
      'Launchpad is a production-ready SaaS template built with Next.js and Tailwind. It includes authentication flows, Stripe billing integration, an admin dashboard, and 8 marketing page templates.\n\n**What\'s inside:**\n- Authentication (email + OAuth)\n- Stripe subscription billing\n- Admin dashboard with analytics\n- 8 marketing page templates\n- Responsive email templates\n- Deployed demo included',
    category: 'templates',
    price: 59,
    formats: ['Next.js', 'Tailwind'],
    fileSizeMB: 22.8,
    license: 'Extended',
    version: '3.0.0',
    rating: 4.8,
    tags: ['saas', 'starter', 'nextjs', 'stripe', 'auth', 'dashboard'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-04-20T08:00:00.000Z',
    official: true,
  },
  {
    id: 'portfolio-developer',
    title: 'Dev Portfolio Template',
    shortDescription:
      'A minimal developer portfolio with project showcase, blog, and contact form.',
    description:
      'Ship your portfolio this weekend. This template includes everything a developer needs to present their work: a hero with typing animation, filterable project grid, markdown blog, and a working contact form.\n\n**What\'s inside:**\n- Hero with terminal typing effect\n- Filterable project grid\n- MDX blog with syntax highlighting\n- Working contact form\n- SEO optimized, Lighthouse 100\n- One-click Vercel deploy',
    category: 'templates',
    price: 25,
    formats: ['Next.js', 'Tailwind'],
    fileSizeMB: 14.2,
    license: 'Commercial',
    version: '1.5.0',
    rating: 4.6,
    tags: ['portfolio', 'developer', 'blog', 'minimal', 'vercel'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-09-05T12:00:00.000Z',
    official: true,
  },
  {
    id: 'docs-starter',
    title: 'Docs Starter Template',
    shortDescription:
      'A documentation site template with sidebar nav, search, versioning, and MDX support.',
    description:
      'Build beautiful docs for your product. Docs Starter gives you a clean, searchable documentation site with everything configured out of the box.\n\n**What\'s inside:**\n- Sidebar navigation with sections\n- Full-text search (Pagefind)\n- Version switcher\n- MDX with custom components\n- Light/dark mode\n- Copy code buttons\n- Auto-generated table of contents',
    category: 'templates',
    price: 35,
    formats: ['Next.js', 'Tailwind', 'HTML'],
    fileSizeMB: 18.6,
    license: 'Commercial',
    version: '2.2.0',
    rating: 4.4,
    tags: ['docs', 'documentation', 'mdx', 'search', 'versioning'],
    ownerId: 'kitbash',
    ownerName: 'Kitbash Official',
    createdAt: '2026-08-01T10:00:00.000Z',
    official: true,
  },
];

export function getKitById(id: string): Kit | undefined {
  return seedKits.find((kit) => kit.id === id);
}

export function getRelatedKits(kit: Kit, max = 3): Kit[] {
  return seedKits
    .filter((k) => k.category === kit.category && k.id !== kit.id)
    .slice(0, max);
}
