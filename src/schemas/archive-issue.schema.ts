import { z } from 'astro/zod';
import { TAG_IDS } from './tag.schema';

export const archiveIssueSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  published: z.boolean().optional(),
  tags: z.array(z.enum(TAG_IDS)).optional()
});
