export const ACTS = [
  'hero',
  'featured',
  'categories',
  'how-it-works',
  'social-proof',
  'footer',
] as const;

export type ActName = typeof ACTS[number];

export type ShapeId = 'cube' | 'ball' | 'ring' | 'pill' | 'slab' | 'glyph';

export interface Pose {
  p: [number, number, number]; // position [x, y, z]
  r: [number, number, number]; // rotation [rx, ry, rz]
  s: number;                   // scale
}

// Desktop poses (screen width >= 768px)
export const POSES: Record<ShapeId, Pose[]> = {
  cube: [
    // Act 0: hero - right panel, prominent anchor
    { p: [2.8, -0.4, 0.2], r: [0.35, 0.45, 0.1], s: 1.2 },
    // Act 1: featured - shifted to left edge, smaller
    { p: [-4.6, 1.2, -1.0], r: [0.5, 0.8, 0.1], s: 0.65 },
    // Act 2: categories - aligned behind "UI Kits" tile
    { p: [-3.8, 0.1, -0.5], r: [0.2, 0.35, 0], s: 0.85 },
    // Act 3: how-it-works - box base
    { p: [2.4, -0.5, 0.2], r: [0.2, 0.5, 0], s: 1.15 },
    // Act 4: social-proof - assembled 3/4 box view on left
    { p: [-3.2, -0.2, 0.1], r: [0.35, -0.65, 0.1], s: 1.2 },
    // Act 5: footer - lifts off and flies upward
    { p: [0.0, 6.2, 1.0], r: [0.8, 2.5, 0.4], s: 1.0 },
  ],
  ball: [
    // Act 0: hero - floating top right
    { p: [4.2, 1.4, 0.5], r: [0.1, 0.2, 0], s: 0.8 },
    // Act 1: featured - drifted to top edge
    { p: [4.8, 1.6, -1.0], r: [0.3, 0.5, 0], s: 0.55 },
    // Act 2: categories - secondary accent behind tiles
    { p: [-1.2, 1.5, -1.2], r: [0, 0, 0], s: 0.5 },
    // Act 3: how-it-works - drops into box
    { p: [2.4, -0.3, 0.3], r: [0.1, 0.2, 0], s: 0.5 },
    // Act 4: social-proof - enclosed inside box
    { p: [-3.2, -0.05, 0.1], r: [0.2, -0.65, 0], s: 0.35 },
    // Act 5: footer - bursts outwards
    { p: [-3.2, 5.2, 1.5], r: [1.0, 1.0, 0], s: 0.75 },
  ],
  ring: [
    // Act 0: hero - floating mid-top
    { p: [1.8, 1.5, -0.1], r: [1.1, 0.5, 0.4], s: 0.75 },
    // Act 1: featured - drifted to bottom left
    { p: [-4.5, -1.8, -1.0], r: [1.2, 0.8, 0.2], s: 0.6 },
    // Act 2: categories - aligned behind "Icon Packs" tile
    { p: [-1.3, 0.1, -0.5], r: [1.2, 0.4, 0.3], s: 0.8 },
    // Act 3: how-it-works - slides into box
    { p: [2.4, -0.4, 0.2], r: [1.57, 0, 0], s: 0.45 },
    // Act 4: social-proof - enclosed inside box
    { p: [-3.2, -0.15, 0.1], r: [1.57, 0, 0], s: 0.35 },
    // Act 5: footer - bursts upward right
    { p: [3.2, 5.6, 1.5], r: [2.0, 1.5, 1], s: 0.75 },
  ],
  pill: [
    // Act 0: hero - floating bottom right
    { p: [3.8, -1.6, 0.3], r: [0.5, 0.2, 0.8], s: 0.8 },
    // Act 1: featured - drifted to bottom right
    { p: [4.6, -1.8, -1.0], r: [0.4, 0.6, 0.5], s: 0.6 },
    // Act 2: categories - aligned behind "Templates" tile
    { p: [3.7, 0.1, -0.5], r: [0.4, 0.3, 0.6], s: 0.8 },
    // Act 3: how-it-works - drops into box
    { p: [2.4, -0.3, 0.1], r: [0, 0, 1.57], s: 0.45 },
    // Act 4: social-proof - enclosed inside box
    { p: [-3.2, -0.1, 0.1], r: [0, 0, 1.57], s: 0.35 },
    // Act 5: footer - flies upward
    { p: [1.2, 7.0, 2.0], r: [0.5, 2.0, 1], s: 0.75 },
  ],
  slab: [
    // Act 0: hero - floating upper middle
    { p: [4.4, -0.1, -0.4], r: [0.4, -0.5, 0.2], s: 0.75 },
    // Act 1: featured - shifted to side
    { p: [4.8, 0.1, -1.5], r: [0.2, -0.4, 0.1], s: 0.55 },
    // Act 2: categories - behind "Fonts" tile backdrop
    { p: [1.2, -0.3, -0.7], r: [0.2, 0.0, 0], s: 0.75 },
    // Act 3: how-it-works - slams shut on top of cube
    { p: [2.4, 0.36, 0.2], r: [0.2, 0.5, 0], s: 1.15 },
    // Act 4: social-proof - top lid of closed box
    { p: [-3.2, 0.6, 0.1], r: [0.35, -0.65, 0.1], s: 1.2 },
    // Act 5: footer - flies with box
    { p: [0.0, 6.9, 1.0], r: [0.8, 2.5, 0.4], s: 1.0 },
  ],
  glyph: [
    // Act 0: hero - close to slab
    { p: [4.4, -0.05, -0.3], r: [0.4, -0.5, 0.2], s: 0.65 },
    // Act 1: featured - shifted
    { p: [4.8, 0.1, -1.4], r: [0.2, -0.4, 0.1], s: 0.5 },
    // Act 2: categories - aligned behind "Fonts" tile
    { p: [1.2, 0.15, -0.5], r: [0.1, 0.0, 0], s: 0.85 },
    // Act 3: how-it-works - stamps onto lid
    { p: [2.4, 0.54, 0.22], r: [-1.37, 0.5, 0], s: 0.65 },
    // Act 4: social-proof - branded stamp on top
    { p: [-3.2, 0.78, 0.12], r: [-1.22, -0.65, 0.1], s: 0.7 },
    // Act 5: footer - flies with lid
    { p: [0.0, 7.1, 1.0], r: [0.8, 2.5, 0.4], s: 0.65 },
  ],
};

// Mobile poses: centered or scaled down
export const MOBILE_POSES: Record<ShapeId, Pose[]> = {
  cube: [
    { p: [0, 0.8, -1.0], r: [0.35, 0.45, 0.1], s: 0.7 },
    { p: [0, 1.5, -2.0], r: [0.5, 0.8, 0.1], s: 0.5 },
    { p: [0, 0.5, -1.5], r: [0.2, 0.35, 0], s: 0.6 },
    { p: [0, -0.3, -0.5], r: [0.2, 0.5, 0], s: 0.8 },
    { p: [0, 0.0, -0.5], r: [0.35, -0.65, 0.1], s: 0.8 },
    { p: [0, 5.0, 0], r: [0.8, 2.5, 0.4], s: 0.6 },
  ],
  ball: [
    { p: [1.2, 1.8, -0.8], r: [0.1, 0.2, 0], s: 0.5 },
    { p: [1.5, 2.0, -2.0], r: [0.3, 0.5, 0], s: 0.4 },
    { p: [1.0, 1.2, -1.5], r: [0, 0, 0], s: 0.4 },
    { p: [0, -0.2, -0.4], r: [0.1, 0.2, 0], s: 0.35 },
    { p: [0, 0.1, -0.4], r: [0.2, -0.65, 0], s: 0.25 },
    { p: [-1.5, 4.5, 0.5], r: [1.0, 1.0, 0], s: 0.5 },
  ],
  ring: [
    { p: [-1.2, 1.8, -0.8], r: [1.1, 0.5, 0.4], s: 0.5 },
    { p: [-1.5, -1.5, -2.0], r: [1.2, 0.8, 0.2], s: 0.4 },
    { p: [-1.0, 0.8, -1.5], r: [1.2, 0.4, 0.3], s: 0.45 },
    { p: [0, -0.25, -0.5], r: [1.57, 0, 0], s: 0.3 },
    { p: [0, -0.05, -0.5], r: [1.57, 0, 0], s: 0.25 },
    { p: [1.5, 4.5, 0.5], r: [2.0, 1.5, 1], s: 0.5 },
  ],
  pill: [
    { p: [1.0, -0.5, -0.8], r: [0.5, 0.2, 0.8], s: 0.5 },
    { p: [1.5, -1.5, -2.0], r: [0.4, 0.6, 0.5], s: 0.4 },
    { p: [1.2, -0.4, -1.5], r: [0.4, 0.3, 0.6], s: 0.45 },
    { p: [0, -0.2, -0.6], r: [0, 0, 1.57], s: 0.3 },
    { p: [0, 0.0, -0.6], r: [0, 0, 1.57], s: 0.25 },
    { p: [0.8, 5.2, 0.5], r: [0.5, 2.0, 1], s: 0.5 },
  ],
  slab: [
    { p: [-1.0, -0.2, -1.0], r: [0.4, -0.5, 0.2], s: 0.5 },
    { p: [-1.5, 1.0, -2.0], r: [0.2, -0.4, 0.1], s: 0.4 },
    { p: [-0.5, -0.5, -1.5], r: [0.2, 0.0, 0], s: 0.45 },
    { p: [0, 0.3, -0.5], r: [0.2, 0.5, 0], s: 0.8 },
    { p: [0, 0.55, -0.5], r: [0.35, -0.65, 0.1], s: 0.8 },
    { p: [0, 5.5, 0], r: [0.8, 2.5, 0.4], s: 0.6 },
  ],
  glyph: [
    { p: [-1.0, -0.15, -0.9], r: [0.4, -0.5, 0.2], s: 0.45 },
    { p: [-1.5, 1.0, -1.9], r: [0.2, -0.4, 0.1], s: 0.35 },
    { p: [-0.5, -0.2, -1.4], r: [0.1, 0.0, 0], s: 0.45 },
    { p: [0, 0.45, -0.45], r: [-1.37, 0.5, 0], s: 0.45 },
    { p: [0, 0.7, -0.45], r: [-1.22, -0.65, 0.1], s: 0.45 },
    { p: [0, 5.7, 0], r: [0.8, 2.5, 0.4], s: 0.45 },
  ],
};
