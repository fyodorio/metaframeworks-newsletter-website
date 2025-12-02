# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

- Install dependencies
  - npm install
- Develop locally
  - npm run dev
  - Expose on local network: npm run dev:expose
- Build and preview
  - npm run build
  - npm run preview
- Astro CLI (useful subcommands)
  - npm run astro -- add <integration>
  - npm run astro -- check
  - npm run astro -- --help
- Formatting
  - Format project files: npm run format

Notes
- No test runner is configured in this repo. If you add one (e.g., Vitest/Jest), document single-test invocation here.

## Architecture overview

This is an Astro 5 site with MD/MDX content collections and a small amount of custom JavaScript utilities. The site renders a newsletter with an archive, FAQ content, and tag data, and generates an RSS feed and sitemap.

Key parts
- Astro config: astro.config.mjs
  - Site URL configured (https://metaframe.works)
  - Integrations: @astrojs/mdx, @astrojs/sitemap
- Content collections: src/content.config.ts
  - archive: Markdown issues (src/content/archive/**) with frontmatter schema (title, description, pubDate, updatedDate, heroImage, published, tags)
  - pages: Markdown pages (src/content/pages/**) with frontmatter schema
  - metaframeworks: JSON-backed collection from src/data/metaframeworks.json validated by a zod schema
  - tags: JSON tag metadata (src/content/tags/**)
  - faqs: JSON FAQ entries (src/content/faqs/**)
- Schemas: src/schemas/*.ts
  - zod schemas for metaframeworks, tags, and FAQ entries used by content collections
- Pages and routing: src/pages/**
  - index.astro renders the homepage, pulling latest published issues from the archive collection and rendering components (IssueCard, SubscriptionForm, FaqSection)
  - archive/[...slug].astro and archive/index.astro render issue detail and archive list
  - tags/[tag].astro builds tag-filtered lists
  - rss.xml.js generates the RSS feed using @astrojs/rss and getCollection('archive')
  - Additional static pages (about, faq, comparison, subscription flows, 404)
- Components and layouts
  - src/components/**: presentational site components (head, header/footer, issue cards, subscription form, FAQ)
  - src/layouts/**: ContentNarrow.astro and ContentWide.astro for page-level layout structure
- Styling
  - Global styles: src/styles/base.css and src/styles/global.css
  - Component-scoped styles live within .astro files
- Utilities
  - src/utils/markdown.js: markdownToHtml helper built on remark/rehype for rendering Markdown that may include raw HTML
- Static assets
  - public/**: site images, icons, and cover images used by pages and issues

Data flow (big picture)
- Content lives primarily as Markdown (issues, pages) and JSON (tags, FAQs, metaframeworks).
- src/content.config.ts defines and validates collections via zod schemas and Astro loaders (glob/file).
- Pages pull data via getCollection() at build time. The homepage and RSS generator filter by published=true and sort by pubDate.
- Astro and integrations build the site; sitemap and RSS are produced during build.

## Conventions and local rules

Cursor rules (./.cursor/rules)
- Formatting: Always run npm run format after edits; Prettier is configured with prettier-plugin-astro (.prettierrc) to format .astro, .md, .js, .ts, .css under src/.
- Styling: No external CSS/UI frameworks. Use global CSS (src/styles/global.css, src/styles/base.css) for shared styles; keep component styles local to .astro files. Prefer semantic HTML. Use CSS Grid for 2D layouts and Flexbox for 1D layouts; avoid tables for layout.
- Proofreading (newsletter content): Maintain the project’s tone and conventions (e.g., sentence case titles, Oxford comma, consistent tense/voice, use “metaframework(s)” without hyphens). Do not alter quotes inside Markdown blockquotes.
- Dependencies: Prefer exact versions (no caret/tilde) to ensure reproducible builds; document and test intentional updates. Security audits via npm audit are encouraged.

## Development tips specific to this repo

- Content gating: The site shows only items with published: true in archive pages and RSS. When drafting new issues, set published to false until ready.
- Dates: Frontmatter dates are coerced (z.coerce.date); ensure valid ISO date strings to avoid schema failures.
- Site metadata: SITE_TITLE and SITE_DESCRIPTION live in src/consts.ts and are reused across pages and RSS.
- Network testing: Use npm run dev:expose to bind the dev server on your LAN for testing on devices.
