import { z } from 'astro:content';

export const metaframeworkSchema = z.object({
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
  routingType: z.array(z.enum(['file-based', 'programmatic', 'hybrid'])),
  serverFramework: z.enum([
    'Express',
    'Nitro',
    'Vinxi',
    'Hono',
    'Fetch API',
    'Custom'
  ]),
  renderingModes: z.array(z.enum(['SPA', 'SSR', 'SSG', 'Hybrid'])),
  enterpriseReadiness: z.enum(['High', 'Medium', 'Low']),
  complexityLevel: z.enum(['High', 'Medium', 'Low']),
  scalabilityLevel: z.enum(['High', 'Medium', 'Low']),
  bundleSizeLevel: z.enum(['High', 'Medium', 'Low']),
  batteriesIncludedLevel: z.enum(['High', 'Medium', 'Low']),
  documentationQuality: z.enum(['High', 'Medium', 'Low']),
  thoughtLeadershipImpact: z.enum(['High', 'Medium', 'Low']),
  securityByDefaultLevel: z.enum(['High', 'Medium', 'Low'])
});

export type Metaframework = z.infer<typeof metaframeworkSchema>;
