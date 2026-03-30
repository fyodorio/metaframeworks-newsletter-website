import { glob, file } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import { metaframeworkSchema } from './schemas/metaframework.schema';
import { tagSchema } from './schemas/tag.schema';
import { faqSchema } from './schemas/faq.schema';
import { archiveIssueSchema } from './schemas/archive-issue.schema.ts';
import { pageSchema } from './schemas/page.schema.ts';
import { blogPostSchema } from './schemas/blog-post.schema.ts';

const archive = defineCollection({
  loader: glob({ base: './src/content/archive', pattern: '**/*.{md,mdx}' }),
  schema: archiveIssueSchema
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: blogPostSchema
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: pageSchema
});

const metaframeworks = defineCollection({
  loader: file('src/data/metaframeworks.json'),
  schema: metaframeworkSchema
});

const tags = defineCollection({
  loader: glob({ base: './src/content/tags', pattern: '**/*.json' }),
  schema: tagSchema
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faqs', pattern: '**/*.json' }),
  schema: faqSchema
});

export const collections = {
  archive,
  blog,
  pages,
  metaframeworks,
  tags,
  faqs
};
