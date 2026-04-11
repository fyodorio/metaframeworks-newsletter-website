import { z } from 'astro/zod';

export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  featured: z.boolean().optional().default(false)
});

export type FAQ = z.infer<typeof faqSchema>;
