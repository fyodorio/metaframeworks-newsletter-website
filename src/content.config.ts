import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

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
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    officialSite: z.string(),
    codeRepository: z.string(),
    runtime: z.array(
      z.enum(['Node.js', 'Deno', 'Bun', 'Serverless Functions', 'Edge compute'])
    ),
    bundler: z.array(
      z.enum([
        'Vite',
        'Webpack',
        'Turbopack',
        'Rspack',
        'Rollup',
        'Parcel',
        'esbuild',
        'SWC',
        'Bun'
      ])
    ),
    frontendFramework: z.array(
      z.enum(['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Custom', 'Preact'])
    ),
    templatingLanguage: z.array(z.enum(['JSX', 'TSX', 'DSL'])),
    routingType: z.array(z.enum(['file-based', 'programmatic'])),
    serverFramework: z.enum(['Express', 'Nitro', 'Vinxi', 'Custom']),
    renderingModes: z.array(z.enum(['SPA', 'SSR', 'SSG', 'Hybrid'])),
    enterpriseReadiness: z.enum(['High', 'Medium', 'Low']),
    complexityLevel: z.enum(['High', 'Medium', 'Low']),
    scalabilityLevel: z.enum(['High', 'Medium', 'Low']),
    bundleSizeLevel: z.enum(['High', 'Medium', 'Low']),
    batteriesIncludedLevel: z.enum(['High', 'Medium', 'Low']),
    documentationQuality: z.enum(['High', 'Medium', 'Low']),
    thoughtLeadershipImpact: z.enum(['High', 'Medium', 'Low'])
  })
});

export const collections = {
  archive,
  pages,
  metaframeworks
};
