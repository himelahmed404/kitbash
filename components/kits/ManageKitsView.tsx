'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Plus,
  Eye,
  Trash2,
  Lock,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';
import { useKits, DEMO_USER } from '@/lib/kits';
import { useAuth } from '@/context/AuthContext';
import type { Kit } from '@/types/kit';
import { CATEGORY_LABELS } from '@/types/kit';
import { formatPrice, hashToBrandTone } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { EmptyState } from '@/components/ui/EmptyState';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { KitCover } from '@/components/kits/KitCover';
import { Reveal } from '@/components/motion/Reveal';

export function ManageKitsView() {
  const { user } = useAuth();
  const { allKits, myKits, deleteKit, isLoaded } = useKits(user?.uid);
  const [activeTab, setActiveTab] = React.useState<'my' | 'all'>('my');
  const [confirmKit, setConfirmKit] = React.useState<Kit | null>(null);
  const [collapsedIds, setCollapsedIds] = React.useState<Set<string>>(new Set());

  const displayedKits = activeTab === 'my' ? myKits : allKits;

  const handleDeleteConfirm = async () => {
    if (!confirmKit) return;
    const kitToDelete = confirmKit;

    // Trigger row collapse animation
    setCollapsedIds((prev) => new Set(prev).add(kitToDelete.id));

    // Wait for the collapse animation (300ms) before deleting from storage
    setTimeout(async () => {
      const success = await deleteKit(kitToDelete.id);
      if (success) {
        toast.success(`"${kitToDelete.title}" deleted`, {
          description: 'The kit has been removed from your seller catalog.',
        });
      } else {
        toast.error('Failed to delete kit', {
          description: 'Official seed kits cannot be removed.',
        });
      }
      setCollapsedIds((prev) => {
        const next = new Set(prev);
        next.delete(kitToDelete.id);
        return next;
      });
      setConfirmKit(null);
    }, 300);
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar: Tabs + Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-bold border-3 border-ink transition-all cursor-pointer ${
              activeTab === 'my'
                ? 'bg-sun text-ink shadow-brutal-sm -translate-x-0.5 -translate-y-0.5'
                : 'bg-paper text-graphite hover:text-ink hover:bg-fog'
            }`}
          >
            My kits ({isLoaded ? myKits.length : '...'})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-bold border-3 border-ink transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-sun text-ink shadow-brutal-sm -translate-x-0.5 -translate-y-0.5'
                : 'bg-paper text-graphite hover:text-ink hover:bg-fog'
            }`}
          >
            All kits ({isLoaded ? allKits.length : '...'})
          </button>
        </div>

        {/* Add Kit CTA */}
        <Button asChild variant="primary" size="md">
          <Link href="/items/add">
            <Plus className="w-4 h-4 stroke-[3]" />
            Add Kit
          </Link>
        </Button>
      </div>

      {/* Content Area */}
      {!isLoaded ? (
        // Loading skeleton
        <div className="border-3 border-ink bg-paper shadow-brutal p-8 space-y-4 animate-pulse">
          <div className="h-10 bg-fog w-full" />
          <div className="h-16 bg-fog w-full" />
          <div className="h-16 bg-fog w-full" />
          <div className="h-16 bg-fog w-full" />
        </div>
      ) : displayedKits.length === 0 ? (
        // Empty State
        <EmptyState
          title={
            activeTab === 'my'
              ? "You haven't listed a kit yet"
              : 'No kits in marketplace'
          }
          description={
            activeTab === 'my'
              ? 'Got UI kits, icon packs, fonts, or templates sitting in your drafts? Publish your first kit to start selling.'
              : 'No kits are available at this moment. Add a new kit from the Seller Studio.'
          }
          action={
            <Button asChild variant="primary" size="lg">
              <Link href="/items/add">
                <Sparkles className="w-4 h-4 mr-1.5" />
                Add your first kit
              </Link>
            </Button>
          }
        />
      ) : (
        <Reveal y={20} duration={0.5}>
          {/* Desktop Data Table (hidden on mobile) */}
          <div className="hidden md:block border-3 border-ink bg-paper shadow-brutal overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-ink text-paper font-mono text-xs uppercase tracking-wider border-b-3 border-ink">
                  <th className="py-3.5 px-4 w-16">Cover</th>
                  <th className="py-3.5 px-4">Title & Details</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Version</th>
                  <th className="py-3.5 px-4">Added</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedKits.map((kit, index) => {
                  const isOwner = user ? kit.ownerId === user.uid : kit.ownerId === DEMO_USER.id;
                  const isCollapsing = collapsedIds.has(kit.id);
                  const tone = hashToBrandTone(kit.id);

                  return (
                    <tr
                      key={kit.id}
                      className={`border-b-2 border-fog transition-all duration-300 hover:bg-cream/50 ${
                        index % 2 === 1 ? 'bg-fog/30' : 'bg-paper'
                      } ${
                        isCollapsing
                          ? 'opacity-0 max-h-0 py-0 scale-95 pointer-events-none'
                          : 'opacity-100'
                      }`}
                    >
                      {/* Cover 48px square */}
                      <td className="py-3.5 px-4 align-middle">
                        <div className="w-12 h-12 border-2 border-ink overflow-hidden bg-cream shrink-0">
                          {kit.imageUrl ? (
                            <img
                              src={kit.imageUrl}
                              alt={kit.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <KitCover
                              category={kit.category}
                              kitId={kit.id}
                              className="w-full h-full"
                            />
                          )}
                        </div>
                      </td>

                      {/* Title & Short Description */}
                      <td className="py-3.5 px-4 align-middle max-w-[280px]">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/items/${kit.id}`}
                            className="font-bold text-sm text-ink hover:underline truncate"
                          >
                            {kit.title}
                          </Link>
                          {kit.official && (
                            <Tag tone="ink" className="shrink-0 text-[10px]">
                              OFFICIAL
                            </Tag>
                          )}
                          {isOwner && (
                            <Tag tone="mint" className="shrink-0 text-[10px]">
                              YOU
                            </Tag>
                          )}
                        </div>
                        <p className="text-xs text-graphite line-clamp-1 mt-0.5">
                          {kit.shortDescription}
                        </p>
                      </td>

                      {/* Category Tag */}
                      <td className="py-3.5 px-4 align-middle">
                        <Tag tone={tone}>{CATEGORY_LABELS[kit.category]}</Tag>
                      </td>

                      {/* Price */}
                      <td className="py-3.5 px-4 align-middle font-bold text-sm text-ink">
                        {formatPrice(kit.price)}
                      </td>

                      {/* Version */}
                      <td className="py-3.5 px-4 align-middle font-mono text-xs text-graphite">
                        v{kit.version}
                      </td>

                      {/* Added Date */}
                      <td className="py-3.5 px-4 align-middle font-mono text-xs text-graphite">
                        {formatDate(kit.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 align-middle text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/items/${kit.id}`}>
                              <Eye className="w-3.5 h-3.5 mr-1" />
                              View
                            </Link>
                          </Button>

                          {kit.official ? (
                            <span
                              title="Official seed kit — immutable"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 border-2 border-fog bg-fog/60 text-graphite text-xs font-mono font-bold select-none cursor-not-allowed"
                            >
                              <Lock className="w-3 h-3" />
                              Protected
                            </span>
                          ) : isOwner ? (
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => setConfirmKit(kit)}
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-1" />
                              Delete
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              disabled
                              title="Only the creator can delete this kit"
                              className="opacity-50 cursor-not-allowed"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Stack (visible on screens < 768px) */}
          <div className="md:hidden space-y-4">
            {displayedKits.map((kit) => {
              const isOwner = user ? kit.ownerId === user.uid : kit.ownerId === DEMO_USER.id;
              const isCollapsing = collapsedIds.has(kit.id);
              const tone = hashToBrandTone(kit.id);

              return (
                <div
                  key={kit.id}
                  className={`border-3 border-ink bg-paper shadow-brutal p-4 space-y-3 transition-all duration-300 ${
                    isCollapsing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  {/* Top: Cover + Title + Price */}
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 border-2 border-ink overflow-hidden bg-cream shrink-0">
                      {kit.imageUrl ? (
                        <img
                          src={kit.imageUrl}
                          alt={kit.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <KitCover
                          category={kit.category}
                          kitId={kit.id}
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Link
                          href={`/items/${kit.id}`}
                          className="font-bold text-base text-ink hover:underline truncate"
                        >
                          {kit.title}
                        </Link>
                        {kit.official && (
                          <Tag tone="ink" className="text-[10px]">
                            OFFICIAL
                          </Tag>
                        )}
                        {isOwner && (
                          <Tag tone="mint" className="text-[10px]">
                            YOU
                          </Tag>
                        )}
                      </div>
                      <p className="text-xs text-graphite line-clamp-1 mt-0.5">
                        {kit.shortDescription}
                      </p>
                      <span className="text-base font-bold text-ink mt-1 block">
                        {formatPrice(kit.price)}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Badges */}
                  <div className="flex items-center gap-2 pt-2 border-t border-fog text-xs font-mono">
                    <Tag tone={tone}>{CATEGORY_LABELS[kit.category]}</Tag>
                    <span className="text-graphite">v{kit.version}</span>
                    <span className="text-graphite ml-auto">
                      {formatDate(kit.createdAt)}
                    </span>
                  </div>

                  {/* Bottom: Actions */}
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-fog">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/items/${kit.id}`}>
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        View
                      </Link>
                    </Button>

                    {kit.official ? (
                      <span className="inline-flex items-center justify-center gap-1 px-3 py-1.5 border-2 border-fog bg-fog/60 text-graphite text-xs font-mono font-bold select-none cursor-not-allowed">
                        <Lock className="w-3 h-3" />
                        Protected
                      </span>
                    ) : isOwner ? (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => setConfirmKit(kit)}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" />
                        Delete
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="opacity-50 cursor-not-allowed"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        open={Boolean(confirmKit)}
        onOpenChange={(open) => {
          if (!open) setConfirmKit(null);
        }}
        title={`Delete "${confirmKit?.title}"?`}
        description="This action cannot be undone. The kit will be permanently removed from your seller studio and the marketplace catalog."
        confirmLabel="Delete Kit"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
