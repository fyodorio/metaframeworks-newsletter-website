import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { metaframeworkSchema } from './schemas/metaframework.schema';

const archive = defineCollection({
  loader: glob({ base: './src/content/archive', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    published: z.boolean().optional()
  })
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    published: z.boolean().optional()
  })
});

const metaframeworks = defineCollection({
  loader: file('src/data/metaframeworks.json'),
  schema: metaframeworkSchema
});

export const collections = {
  archive,
  pages,
  metaframeworks
};
