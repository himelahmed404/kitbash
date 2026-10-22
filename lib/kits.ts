'use client';

import * as React from 'react';
import type { Kit } from '@/types/kit';
import { seedKits } from '@/data/seed-kits';
import type { KitFormData } from '@/lib/validators';

const STORAGE_KEY = 'kitbash_custom_kits_v1';
const UPDATE_EVENT = 'kitbash-kits-updated';

export const DEMO_USER = {
  id: 'demo-maker',
  name: 'Alex Maker',
  email: 'alex@kitbash.dev',
};

// Safe slugifier
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Read custom user-created kits from localStorage (client only)
 */
export function getCustomKits(): Kit[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to read custom kits from localStorage:', err);
    return [];
  }
}

/**
 * Return all kits (user-created custom kits + official seed kits)
 */
export function getAllKits(): Kit[] {
  const custom = getCustomKits();
  return [...custom, ...seedKits];
}

/**
 * Find kit by ID from custom kits or seed kits
 */
export function getKitById(id: string): Kit | undefined {
  const custom = getCustomKits();
  const customMatch = custom.find((k) => k.id === id);
  if (customMatch) return customMatch;
  return seedKits.find((k) => k.id === id);
}

/**
 * Add a new kit to local storage
 */
export function addKit(
  formData: KitFormData,
  options?: { ownerId?: string; ownerName?: string }
): Kit {
  if (typeof window === 'undefined') {
    throw new Error('addKit can only be called in the browser');
  }

  const baseSlug = slugify(formData.title) || 'kit';
  const uniqueSuffix = Math.random().toString(36).substring(2, 7);
  const kitId = `${baseSlug}-${uniqueSuffix}`;

  const customKits = getCustomKits();

  // Inferred tags
  const tags = Array.from(
    new Set([
      formData.category,
      ...formData.formats.map((f) => f.toLowerCase()),
      ...formData.title
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3),
    ])
  ).slice(0, 5);

  const newKit: Kit = {
    id: kitId,
    title: formData.title,
    shortDescription: formData.shortDescription,
    description: formData.description,
    category: formData.category,
    price: formData.price,
    formats: formData.formats,
    fileSizeMB: formData.fileSizeMB,
    license: formData.license,
    version: formData.version,
    imageUrl: formData.imageUrl || undefined,
    tags,
    ownerId: options?.ownerId || DEMO_USER.id,
    ownerName: options?.ownerName || DEMO_USER.name,
    createdAt: new Date().toISOString(),
    official: false,
    rating: 5.0, // Initial creator rating
  };

  const updated = [newKit, ...customKits];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));

  return newKit;
}

/**
 * Delete a user kit. Returns false if kit is official or not found.
 */
export function deleteKit(id: string): boolean {
  if (typeof window === 'undefined') return false;

  // Protect official seed kits
  const isOfficial = seedKits.some((k) => k.id === id);
  if (isOfficial) return false;

  const customKits = getCustomKits();
  const exists = customKits.some((k) => k.id === id);
  if (!exists) return false;

  const filtered = customKits.filter((k) => k.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));

  return true;
}

// Global cached client snapshot for useSyncExternalStore
let cachedKits: Kit[] = typeof window !== 'undefined' ? getAllKits() : seedKits;
function getClientSnapshot(): Kit[] {
  return cachedKits;
}
function getServerSnapshot(): Kit[] {
  return seedKits;
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const handleUpdate = () => {
    cachedKits = getAllKits();
    callback();
  };

  // Ensure client cache is fresh
  cachedKits = getAllKits();

  window.addEventListener(UPDATE_EVENT, handleUpdate);
  window.addEventListener('storage', handleUpdate);

  return () => {
    window.removeEventListener(UPDATE_EVENT, handleUpdate);
    window.removeEventListener('storage', handleUpdate);
  };
}

/**
 * React hook to access reactive kit state across the application
 */
export function useKits() {
  const kits = React.useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const myKits = React.useMemo(
    () => kits.filter((k) => k.ownerId === DEMO_USER.id),
    [kits]
  );

  return {
    kits,
    allKits: kits,
    myKits,
    isLoaded: true,
    addKit,
    deleteKit,
  };
}
