'use client';

import * as React from 'react';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import type { Kit } from '@/types/kit';
import { seedKits } from '@/data/seed-kits';
import type { KitFormData } from '@/lib/validators';
import { db } from '@/lib/firebase/client';

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

// In-memory Firestore live cache
let firestoreKits: Kit[] = [];
let firestoreInitialized = false;

function mergeKits(firestore: Kit[], local: Kit[], seed: Kit[]): Kit[] {
  const map = new Map<string, Kit>();

  // 1. Add Firestore kits
  for (const kit of firestore) {
    map.set(kit.id, kit);
  }

  // 2. Add local custom kits if not already in Firestore
  for (const kit of local) {
    if (!map.has(kit.id)) {
      map.set(kit.id, kit);
    }
  }

  // 3. Add seed kits
  for (const kit of seed) {
    if (!map.has(kit.id)) {
      map.set(kit.id, kit);
    }
  }

  return Array.from(map.values());
}

/**
 * Return all kits (Firestore + user-created local kits + official seed kits)
 */
export function getAllKits(): Kit[] {
  const local = getCustomKits();
  return mergeKits(firestoreKits, local, seedKits);
}

/**
 * Find kit by ID from custom kits or seed kits
 */
export function getKitById(id: string): Kit | undefined {
  return getAllKits().find((k) => k.id === id);
}

/**
 * Add a new kit to Firestore and local storage cache
 */
export async function addKit(
  formData: KitFormData,
  options?: { ownerId?: string; ownerName?: string }
): Promise<Kit> {
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

  // 1. Immediately persist to localStorage for instant local reactivity
  const updatedLocal = [newKit, ...customKits];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLocal));
  } catch (err) {
    console.error('LocalStorage write failed:', err);
  }

  // 2. Persist to Cloud Firestore
  try {
    const docRef = doc(db, 'kits', kitId);
    const firestoreData: Record<string, unknown> = {
      id: newKit.id,
      title: newKit.title,
      shortDescription: newKit.shortDescription,
      description: newKit.description,
      category: newKit.category,
      price: newKit.price,
      formats: newKit.formats,
      fileSizeMB: newKit.fileSizeMB,
      license: newKit.license,
      version: newKit.version,
      imageUrl: newKit.imageUrl || '',
      tags: newKit.tags || [],
      ownerId: newKit.ownerId,
      ownerName: newKit.ownerName,
      createdAt: newKit.createdAt,
      official: false,
      rating: 5.0,
      updatedAt: new Date().toISOString(),
    };
    await setDoc(docRef, firestoreData);
  } catch (err) {
    console.warn('Firestore write notice (saved locally):', err);
  }

  // Trigger cache refresh
  cachedKits = getAllKits();
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));

  return newKit;
}

/**
 * Delete a user kit. Returns false if kit is official or not found.
 */
export async function deleteKit(id: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  // Protect official seed kits
  const isOfficial = seedKits.some((k) => k.id === id);
  if (isOfficial) return false;

  // 1. Delete from local storage
  const customKits = getCustomKits();
  const existsLocal = customKits.some((k) => k.id === id);
  if (existsLocal) {
    const filtered = customKits.filter((k) => k.id !== id);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }

  // 2. Delete from Firestore if exists
  try {
    const docRef = doc(db, 'kits', id);
    await deleteDoc(docRef);
  } catch (err) {
    console.warn('Firestore delete notice (removed locally):', err);
  }

  // Also remove from in-memory firestore cache if present
  firestoreKits = firestoreKits.filter((k) => k.id !== id);

  cachedKits = getAllKits();
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

// Listen to Firestore real-time updates in browser
function initFirestoreListener() {
  if (typeof window === 'undefined' || firestoreInitialized) return;
  firestoreInitialized = true;

  try {
    const kitsCol = collection(db, 'kits');
    onSnapshot(
      kitsCol,
      (snapshot) => {
        const loaded: Kit[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data && data.title && data.category) {
            loaded.push({
              id: docSnap.id,
              title: data.title,
              shortDescription: data.shortDescription || '',
              description: data.description || '',
              category: data.category,
              price: Number(data.price) || 0,
              formats: Array.isArray(data.formats) ? data.formats : [],
              fileSizeMB: Number(data.fileSizeMB) || 0,
              license: data.license || 'Commercial',
              version: data.version || '1.0.0',
              rating: data.rating,
              imageUrl: data.imageUrl,
              tags: data.tags,
              ownerId: data.ownerId || 'maker',
              ownerName: data.ownerName || 'Creator',
              createdAt: data.createdAt || new Date().toISOString(),
              official: !!data.official,
            });
          }
        });

        firestoreKits = loaded;
        cachedKits = getAllKits();
        window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
      },
      (error) => {
        // Fallback gracefully without breaking UI
        console.warn('Firestore real-time sync notice (using local storage mode):', error.message);
      }
    );
  } catch (err) {
    console.warn('Firestore initialization notice:', err);
  }
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  initFirestoreListener();

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
export function useKits(currentUserId?: string) {
  const kits = React.useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const myKits = React.useMemo(() => {
    if (currentUserId) {
      return kits.filter((k) => k.ownerId === currentUserId);
    }
    // Default to demo user or custom created kits
    return kits.filter(
      (k) => k.ownerId === DEMO_USER.id || (!k.official && k.ownerId !== 'kitbash')
    );
  }, [kits, currentUserId]);

  return {
    kits,
    allKits: kits,
    myKits,
    isLoaded: true,
    addKit,
    deleteKit,
  };
}
