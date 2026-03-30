import { z } from 'astro/zod';
import tagsData from '../data/tags.json';

export type TagId = (typeof tagsData)[number]['id'];
export const TAG_IDS = tagsData.map((t) => t.id) as [TagId, ...TagId[]];

export const tagSchema = z.object({
  id: z.enum(TAG_IDS),
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional()
});

export type Tag = z.infer<typeof tagSchema>;
