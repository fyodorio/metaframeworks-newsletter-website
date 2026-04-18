# AGENTS.md

Rules and conventions for AI assistants working in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run dev:expose` — dev server exposed on LAN
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run format` — format project files with Prettier
- `npm run check` — run Astro type checking and diagnostics
- `npm run upgrade` — upgrade Astro and official integrations via `@astrojs/upgrade`
- `npm run astro -- add <integration>` — add an Astro integration

No test runner is configured. If one is added (e.g. Vitest), document single-test invocation here.

## Architecture

Astro 6 site with MD/MDX content collections and a small amount of custom JavaScript utilities. Renders a newsletter archive, a blog, FAQ content, tag-filtered views, a metaframework comparison table, and a full-text search index. Generates an RSS feed and sitemap at build time.

### Key structure

- **Astro config**: `astro.config.mjs` — site URL (`https://metaframe.works`), integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `astro-pagefind`; rehype plugins for heading anchors (see "Authoring tools" below)
- **Content collections**: `src/content.config.ts`
  - `archive` — Markdown/MDX issues (`src/content/archive/**`) with frontmatter: title, description, pubDate, updatedDate, heroImage, published, tags
  - `blog` — Markdown/MDX blog posts (`src/content/blog/**`) with frontmatter: title, description, pubDate, updatedDate, heroImage, published, tags
  - `metaframeworks` — JSON collection from `src/data/metaframeworks.json` (zod-validated)
  - `tags` — JSON tag definitions from `src/data/tags.json` (zod-validated)
  - `faqs` — JSON FAQ entries from `src/data/faqs.json` (zod-validated)
- **Schemas**: `src/schemas/*.ts` — zod schemas for archive issues, blog posts, metaframeworks, tags, and FAQs
- **Pages and routing**: `src/pages/**`
  - `index.astro` — homepage with latest published issues, featured FAQs, and subscription form
  - `archive/[...slug].astro`, `archive/index.astro` — issue detail and archive list (with Pagefind search)
  - `blog/[...slug].astro`, `blog/index.astro` — blog post detail and blog list
  - `tags/[tag].astro` — tag-filtered issue/post lists
  - `rss.xml.js` — RSS feed via `@astrojs/rss` and `getCollection('archive')`
  - Additional static pages: about, faq, comparison, ai-usage, subscription flows, 404
- **Components**: `src/components/**` — presentational (BaseHead, Header, Footer, IssueCard, SubscriptionForm, FaqSection, FaqCard, FormattedDate, HeaderLink, ShowMoreButton)
- **Layouts**: `src/layouts/**` — `ContentNarrow.astro` (articles, blog posts) and `ContentWide.astro` (comparison table)
- **Styling**: `src/styles/base.css` and `src/styles/global.css` for global styles; component-scoped styles in `.astro` files
- **Utilities**: `src/utils/markdown.js` — `markdownToHtml` helper (remark/rehype pipeline with GFM, raw HTML); `src/utils/sorting.js` — client-side table sorting for comparison page
- **Search**: `astro-pagefind` integration for full-text search on the archive page
- **Static assets**: `public/**` — images, icons, cover images
- **Site metadata**: `SITE_TITLE` and `SITE_DESCRIPTION` in `src/consts.ts`, reused across pages and RSS

### Tags

Tags are defined in `src/data/tags.json` (50+ entries). Each tag has an `id`, `name`, optional `description`, and optional `color`. Archive issues and blog posts reference tags by ID in frontmatter (`tags: ["nextjs", "react"]`). Tag-filtered pages are generated at `/tags/[tag]`. The `IssueCard` component and `ContentNarrow` layout display tag links.

### FAQs

FAQs are defined in `src/data/faqs.json`. Each FAQ has an `id`, `question`, `answer` (markdown), and optional `featured` boolean. Featured FAQs appear on the homepage via `FaqSection` with `featuredOnly` prop. The `/faq` page shows all FAQs. `FaqCard` uses `<details>`/`<summary>` for accordion behavior and converts markdown answers to HTML via `markdownToHtml()`.

### Blog

The blog (`src/content/blog/`) is a separate content collection from the newsletter archive. Blog posts use the same frontmatter shape (title, description, pubDate, tags, etc.) and share components (`IssueCard`, `ContentNarrow` layout) with archive issues. Blog pages live at `/blog` (list) and `/blog/[slug]` (detail).

### Data flow

Content lives as Markdown (issues, blog posts) and JSON (tags, FAQs, metaframeworks). `src/content.config.ts` defines and validates collections via zod schemas and Astro loaders (glob/file). Pages pull data with `getCollection()` at build time. Homepage and RSS filter by `published: true` and sort by `pubDate`. Sitemap and RSS are produced during build.

### Authoring tools

Heading anchor links are auto-generated for all Markdown/MDX content via two rehype plugins configured in `astro.config.mjs`:

- **rehype-slug** — adds `id` attributes to `h2`–`h6` headings based on their text
- **rehype-autolink-headings** (`behavior: 'append'`) — appends clickable `#` anchor links after each heading

Anchor links are hidden by default and appear on hover (styled in `src/styles/global.css`). This enables deep-linking to specific sections within articles and blog posts.

The `markdownToHtml()` utility in `src/utils/markdown.js` provides a standalone remark/rehype pipeline (with `remark-gfm` and `rehype-raw`) used for rendering markdown outside of Astro's built-in content rendering (e.g. FAQ answers).

## Formatting

Always run `npm run format` after edits. Prettier is configured (`.prettierrc`) with `prettier-plugin-astro` to format `.astro`, `.md`, `.js`, `.ts`, `.css` under `src/`.

Key Prettier settings: single quotes, 2-space indent, no trailing commas, semicolons, bracket spacing.

## Styling

- No external CSS frameworks or UI libraries
- Global styles go in `src/styles/global.css` (variables, utilities) and `src/styles/base.css` (reset, typography)
- Component styles are scoped within `.astro` files
- Use CSS Grid for 2D layouts, Flexbox for 1D layouts
- Tables are only for tabular data, never for layout
- Prefer semantic HTML elements
- Use CSS custom properties for theming
- Keep specificity low; avoid `!important`
- Use meaningful class names

## HTML and accessibility

- Use the most semantically appropriate HTML element (avoid generic `div`/`span` when a semantic alternative exists)
- Proper heading hierarchy (`h1`–`h6`)
- All interactive elements must be keyboard accessible
- All non-decorative images need `alt` text
- Sufficient colour contrast (4.5:1 normal text, 3:1 large text)
- Use native HTML semantics over ARIA where possible
- Use `<button>` for actions, `<a>` for navigation; never use `div`/`span` as clickable elements
- Forms: always use `<label>` with `for`, appropriate input types, `required` for mandatory fields
- Group related form controls with `<fieldset>` and `<legend>`

## Proofreading (newsletter content)

- British style English, American spelling (e.g. "color", "organize")
- Sentence case for titles (capitalize first word and proper nouns only) except newsletter issue, blogpost, and page titles
- En-dashes wrapped in spaces (`–`) instead of em-dashes
- Oxford comma in lists of three or more items
- Straight apostrophes (`'`), not curly
- "metaframework" / "metaframeworks" — no hyphen, ever
- Casual, informal tone appropriate for a technical newsletter
- Prefer simple words ("use" not "utilize")
- Use "they/them/their" as neutral pronouns
- Long sentences are fine for nuanced thoughts; don't force active voice when passive is intentional
- Maintain consistent voice and tense within sections
- Preserve the author's voice; flag issues with explicit alternatives rather than rewriting
- Do not alter quotes inside Markdown blockquotes (`>`)

## Dependencies

- Use exact versions for all dependencies — no `^` or `~` prefixes
- Install with `npm install <package>@X.Y.Z --save-exact`
- Review and update dependencies intentionally; test thoroughly after updates
- Document significant dependency updates in commit messages
- Run `npm audit` regularly

## Development tips

- **Content gating**: only items with `published: true` appear on archive/blog pages and in RSS. Set `published: false` while drafting.
- **Dates**: frontmatter dates are coerced (`z.coerce.date`); use valid ISO date strings.
- **Network testing**: `npm run dev:expose` binds the dev server on LAN for device testing.
- **Type checking**: run `npm run check` before committing to catch Astro/TypeScript diagnostics.
- **Anchor links**: headings in content automatically get IDs and clickable `#` links; use standard markdown headings to create deep-linkable sections.
- **Adding tags**: add new entries to `src/data/tags.json`; tag pages are generated automatically. Reference tags by `id` in frontmatter.
- **Adding FAQs**: add new entries to `src/data/faqs.json`; set `featured: true` to show on the homepage.
- **Blog vs. archive**: newsletter issues go in `src/content/archive/`, standalone articles go in `src/content/blog/`. Both share the same component infrastructure.
