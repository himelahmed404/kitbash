import type { FieldValues, Resolver, ResolverResult } from 'react-hook-form';
import type { ZodType } from 'zod';
import { toNestErrors } from '@hookform/resolvers';

/**
 * Universal Zod Resolver compatible with Zod 4 (`error.issues`) and Zod 3 (`error.errors`).
 * Maps validation issues into React Hook Form errors without throwing unhandled runtime exceptions.
 */
export function zodResolver<T extends FieldValues>(schema: ZodType): Resolver<T> {
  return async (values, _context, options): Promise<ResolverResult<T>> => {
    try {
      const result = await schema.safeParseAsync(values);

      if (result.success) {
        return {
          values: result.data as T,
          errors: {},
        };
      }

      // Support both Zod 4 (issues) and Zod 3 (errors)
      const issues =
        (result.error as unknown as {
          issues?: Array<{ path?: (string | number)[]; code?: string; message?: string }>;
        }).issues ||
        (result.error as unknown as {
          errors?: Array<{ path?: (string | number)[]; code?: string; message?: string }>;
        }).errors ||
        [];

      const flatErrors: Record<string, { type: string; message: string }> = {};

      for (const issue of issues) {
        const path = Array.isArray(issue.path) ? issue.path.join('.') : String(issue.path || '');
        if (!flatErrors[path]) {
          flatErrors[path] = {
            type: issue.code || 'validation',
            message: issue.message || 'Invalid value',
          };
        }
      }

      return {
        values: {},
        errors: toNestErrors(flatErrors, options),
      };
    } catch (err: unknown) {
      console.error('Validation resolution error:', err);
      return {
        values: {},
        errors: {},
      };
    }
  };
}
