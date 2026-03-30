import { z } from 'astro/zod';

export const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.date().optional(),
  heroImage: z.string().optional(),
  published: z.boolean().optional()
});
