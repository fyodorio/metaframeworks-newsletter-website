import { z } from 'astro:content';

export const tagSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional()
});

export type Tag = z.infer<typeof tagSchema>;
