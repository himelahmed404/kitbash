import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(60, { message: 'Name must be 60 characters or less' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters' })
    .max(100, { message: 'Subject must be 100 characters or less' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message must be 2000 characters or less' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const KIT_FORMATS = [
  'Figma',
  'Sketch',
  'React',
  'Vue',
  'Tailwind',
  'SVG',
  'PNG',
  'OTF/TTF',
  'HTML',
] as const;

export const kitFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: 'Title must be between 3 and 60 characters' })
    .max(60, { message: 'Title must be between 3 and 60 characters' }),
  shortDescription: z
    .string()
    .trim()
    .min(10, { message: 'Short description must be between 10 and 120 characters' })
    .max(120, { message: 'Short description must be between 10 and 120 characters' }),
  description: z
    .string()
    .trim()
    .min(20, { message: 'Full description must be at least 20 characters' })
    .max(2000, { message: 'Full description must be under 2000 characters' }),
  category: z.enum(['ui-kit', 'icons', 'fonts', 'templates'], {
    message: 'Please select a valid category',
  }),
  price: z.preprocess(
    (val) => (typeof val === 'number' && Number.isNaN(val) ? 0 : Number(val)),
    z
      .number({ message: 'Price must be a valid number' })
      .min(0, { message: 'Price cannot be negative' })
      .max(499, { message: 'Price cannot exceed $499' })
  ),
  formats: z
    .array(z.string())
    .min(1, { message: 'Select at least one format' }),
  fileSizeMB: z.preprocess(
    (val) => (typeof val === 'number' && Number.isNaN(val) ? 1 : Number(val)),
    z
      .number({ message: 'File size must be a number' })
      .positive({ message: 'File size must be greater than 0' })
      .max(5000, { message: 'File size cannot exceed 5000 MB' })
  ),
  license: z.enum(['Personal', 'Commercial', 'Extended'], {
    message: 'Please select a license',
  }),
  version: z
    .string()
    .trim()
    .min(1, { message: 'Version is required' })
    .regex(/^v?\d+(\.\d+)*(-[\w.]+)?$/i, {
      message: 'Version must be semver (e.g. 1.0.0, 2.1, or 1.0.0-beta)',
    }),
  imageUrl: z
    .string()
    .trim()
    .url({ message: 'Please enter a valid URL' })
    .optional()
    .or(z.literal('')),
});

export type KitFormData = z.infer<typeof kitFormSchema>;
