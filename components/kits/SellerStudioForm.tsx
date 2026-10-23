'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  AlertCircle,
  Sparkles,
  HelpCircle,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import {
  kitFormSchema,
  type KitFormData,
  KIT_FORMATS,
} from '@/lib/validators';
import { addKit, DEMO_USER } from '@/lib/kits';
import { useAuth } from '@/context/AuthContext';
import type { Kit, Category, License } from '@/types/kit';
import { CATEGORIES, LICENSES } from '@/types/kit';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Chip } from '@/components/ui/Chip';
import { Tag } from '@/components/ui/Tag';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { ShapeBurst } from '@/components/ui/ShapeBurst';
import { KitCard } from '@/components/kits/KitCard';

const DEFAULT_FORM_VALUES: KitFormData = {
  title: '',
  shortDescription: '',
  description: '',
  category: 'ui-kit',
  price: 29,
  formats: ['Figma', 'React'],
  fileSizeMB: 24.5,
  license: 'Commercial',
  version: '1.0.0',
  imageUrl: '',
};

export function SellerStudioForm() {
  const router = useRouter();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showBurst, setShowBurst] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, submitCount },
  } = useForm<KitFormData>({
    resolver: zodResolver(kitFormSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'onBlur',
  });

  // Watch form values for live preview
  const watchedValues = useWatch({ control });

  // Reactive character counters
  const shortDescLength = watchedValues.shortDescription?.length ?? 0;
  const fullDescLength = watchedValues.description?.length ?? 0;
  const currentFormats = React.useMemo(
    () => watchedValues.formats ?? [],
    [watchedValues.formats]
  );

  // Toggle formats in multi-chip selector
  const handleToggleFormat = (format: string) => {
    const nextFormats = currentFormats.includes(format)
      ? currentFormats.filter((f) => f !== format)
      : [...currentFormats, format];
    setValue('formats', nextFormats, { shouldValidate: true, shouldDirty: true });
  };

  // Construct reactive kit object for Live Preview
  const previewKit: Kit = React.useMemo(() => {
    return {
      id: 'preview-kit',
      title: watchedValues.title?.trim() || 'Untitled Kit',
      shortDescription:
        watchedValues.shortDescription?.trim() ||
        'Your short description will appear here as a 2-line summary in the catalog.',
      description: watchedValues.description?.trim() || '',
      category: (watchedValues.category as Category) || 'ui-kit',
      price:
        typeof watchedValues.price === 'number' && !Number.isNaN(watchedValues.price)
          ? watchedValues.price
          : 0,
      formats: currentFormats.length > 0 ? currentFormats : ['Figma'],
      fileSizeMB:
        typeof watchedValues.fileSizeMB === 'number' &&
        !Number.isNaN(watchedValues.fileSizeMB)
          ? watchedValues.fileSizeMB
          : 10,
      license: (watchedValues.license as License) || 'Commercial',
      version: watchedValues.version?.trim() || '1.0.0',
      imageUrl: watchedValues.imageUrl?.trim() || undefined,
      rating: 5.0,
      tags: currentFormats.map((f) => f.toLowerCase()),
      ownerId: user?.uid || DEMO_USER.id,
      ownerName: user?.displayName || user?.email?.split('@')[0] || DEMO_USER.name,
      createdAt: new Date().toISOString(),
      official: false,
    };
  }, [watchedValues, currentFormats, user]);

  const onSubmit = async (data: KitFormData) => {
    try {
      setIsSubmitting(true);

      // Brief simulated processing delay
      await new Promise((resolve) => setTimeout(resolve, 450));

      const newKit = await addKit(data, {
        ownerId: user?.uid || DEMO_USER.id,
        ownerName: user?.displayName || user?.email?.split('@')[0] || DEMO_USER.name,
      });
      setShowBurst(true);

      toast.success('Kit published 🎉', {
        description: `"${newKit.title}" is now live in the marketplace catalog.`,
        action: {
          label: 'View Kit',
          onClick: () => router.push(`/items/${newKit.id}`),
        },
      });

      // Reset form after publishing
      reset(DEFAULT_FORM_VALUES);

      // Redirect after brief celebration delay
      setTimeout(() => {
        router.push(`/items/${newKit.id}`);
      }, 700);
    } catch (err) {
      console.error('Failed to publish kit:', err);
      toast.error('Failed to publish kit', {
        description: 'An unexpected error occurred while saving. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = submitCount > 0 && Object.keys(errors).length > 0;

  return (
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-start">
      {/* Left Column — Form */}
      <div className="lg:col-span-7">
        <div className="bg-paper border-3 border-ink shadow-brutal p-6 sm:p-8">
          {/* Error Banner */}
          {hasErrors && (
            <div className="mb-6 p-4 bg-danger/10 border-3 border-danger flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-danger">
                  Please fix the highlighted errors before publishing:
                </p>
                <ul className="list-disc list-inside text-xs text-danger mt-1 space-y-0.5">
                  {Object.entries(errors).map(([field, err]) => (
                    <li key={field}>{err?.message as string}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Title */}
            <Field
              label="Kit Title"
              required
              hint="Max 60 characters. Make it distinctive and descriptive."
              error={errors.title?.message}
            >
              <Input
                {...register('title')}
                placeholder="e.g. Orbit Dashboard System"
                error={Boolean(errors.title)}
              />
            </Field>

            {/* Short Description */}
            <Field
              label="Short Description"
              required
              hint={`Between 20 and 120 characters. Shown on catalog cards (${shortDescLength}/120).`}
              error={errors.shortDescription?.message}
            >
              <Textarea
                {...register('shortDescription')}
                rows={2}
                placeholder="A complete dashboard UI kit with 60+ components for analytics and SaaS."
                error={Boolean(errors.shortDescription)}
              />
            </Field>

            {/* Full Description */}
            <Field
              label="Full Description"
              required
              hint={`Between 80 and 2000 characters. Shown on kit detail page (${fullDescLength}/2000).`}
              error={errors.description?.message}
            >
              <Textarea
                {...register('description')}
                rows={6}
                placeholder="Detailed explanation of features, file formats, included templates, design tokens, and components..."
                error={Boolean(errors.description)}
              />
            </Field>

            {/* Category & Price (2 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Category */}
              <Field
                label="Category"
                required
                error={errors.category?.message}
              >
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(val) => field.onChange(val as Category)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              {/* Price */}
              <Field
                label="Price (USD)"
                required
                hint="Set 0 for free download (Max $499)."
                error={errors.price?.message}
              >
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-graphite font-bold">
                    <DollarSign className="w-4 h-4 text-ink" />
                  </div>
                  <Input
                    type="number"
                    step="1"
                    min="0"
                    max="499"
                    className="pl-9"
                    {...register('price', { valueAsNumber: true })}
                    error={Boolean(errors.price)}
                  />
                </div>
              </Field>
            </div>

            {/* Formats Multi-Chip Selector */}
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider uppercase text-ink mb-1.5">
                Formats Included <span className="text-danger">*</span>
              </label>
              <p className="text-xs text-graphite mb-2.5">
                Select all design and code file formats bundled with this kit.
              </p>
              <div className="flex flex-wrap gap-2">
                {KIT_FORMATS.map((format) => {
                  const isSelected = currentFormats.includes(format);
                  return (
                    <Chip
                      key={format}
                      selected={isSelected}
                      onClick={() => handleToggleFormat(format)}
                    >
                      {format}
                    </Chip>
                  );
                })}
              </div>
              {errors.formats && (
                <p className="text-xs font-mono text-danger mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.formats.message}
                </p>
              )}
            </div>

            {/* File Size & Version (2 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* File Size */}
              <Field
                label="File Size (MB)"
                required
                hint="0.1 to 5000 MB"
                error={errors.fileSizeMB?.message}
              >
                <Input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="5000"
                  {...register('fileSizeMB', { valueAsNumber: true })}
                  error={Boolean(errors.fileSizeMB)}
                />
              </Field>

              {/* Version */}
              <Field
                label="Version"
                required
                hint="Semantic versioning (e.g. 1.0.0)"
                error={errors.version?.message}
              >
                <Input
                  {...register('version')}
                  placeholder="1.0.0"
                  error={Boolean(errors.version)}
                />
              </Field>
            </div>

            {/* License */}
            <Field
              label="License"
              required
              hint="Select the default license granted to buyers."
              error={errors.license?.message}
            >
              <Controller
                name="license"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(val) => field.onChange(val as License)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select license" />
                    </SelectTrigger>
                    <SelectContent>
                      {LICENSES.map((lic) => (
                        <SelectItem key={lic} value={lic}>
                          {lic} License
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            {/* Optional Image URL */}
            <Field
              label="Cover Image URL (Optional)"
              hint="Paste an external HTTPS image URL, or leave blank for automatic geometric SVG cover."
              error={errors.imageUrl?.message}
            >
              <Input
                type="url"
                {...register('imageUrl')}
                placeholder="https://images.unsplash.com/... (optional)"
                error={Boolean(errors.imageUrl)}
              />
            </Field>

            {/* Submit Action */}
            <div className="pt-4 border-t-2 border-fog relative flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative">
                <ShapeBurst active={showBurst} onComplete={() => setShowBurst(false)} />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Publish Kit
                </Button>
              </div>

              <span className="text-xs font-mono text-graphite flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Demo Seller Mode · Instant Local Sync
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column — Sticky Live Preview */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start space-y-4">
        {/* Preview Header Banner */}
        <div className="bg-sun border-3 border-ink shadow-brutal-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag tone="ink">LIVE PREVIEW</Tag>
            <span className="font-bold text-xs uppercase tracking-wider text-ink">
              Catalog Card
            </span>
          </div>
          <span className="font-mono text-xs text-ink/80 flex items-center gap-1">
            Updates in real-time
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Live Preview KitCard */}
        <div className="bg-paper border-3 border-ink shadow-brutal p-4">
          <KitCard kit={previewKit} />
        </div>

        {/* Specifications Breakdown */}
        <div className="bg-paper border-3 border-ink shadow-brutal-sm p-4 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-graphite border-b-2 border-fog pb-2">
            Kit Specifications Summary
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-graphite block">License</span>
              <span className="font-bold text-ink">{previewKit.license}</span>
            </div>
            <div>
              <span className="text-graphite block">Version</span>
              <span className="font-bold text-ink">v{previewKit.version}</span>
            </div>
            <div>
              <span className="text-graphite block">File Size</span>
              <span className="font-bold text-ink">{previewKit.fileSizeMB} MB</span>
            </div>
            <div>
              <span className="text-graphite block">Formats ({currentFormats.length})</span>
              <span className="font-bold text-ink truncate block">
                {currentFormats.length > 0 ? currentFormats.join(', ') : 'None'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
