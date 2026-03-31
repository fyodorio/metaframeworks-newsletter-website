# AGENTS.md

Rules and conventions for AI assistants working in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run dev:expose` — dev server exposed on LAN
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run format` — format project files with Prettier
- `npm run astro -- add <integration>` — add an Astro integration
- `npm run astro -- check` — run Astro diagnostics

No test runner is configured. If one is added (e.g. Vitest), document single-test invocation here.

## Architecture

Astro 5 site with MD/MDX content collections and a small amount of custom JavaScript utilities. Renders a newsletter with an archive, FAQ content, tag data, and a full-text search index. Generates an RSS feed and sitemap at build time.

### Key structure

- **Astro config**: `astro.config.mjs` — site URL (`https://metaframe.works`), integrations: `@astrojs/mdx`, `@astrojs/sitemap`
- **Content collections**: `src/content.config.ts`
  - `archive` — Markdown issues (`src/content/archive/**`) with frontmatter: title, description, pubDate, updatedDate, heroImage, published, tags
  - `pages` — Markdown pages (`src/content/pages/**`)
  - `metaframeworks` — JSON collection from `src/data/metaframeworks.json` (zod-validated)
  - `tags` — JSON tag metadata (`src/content/tags/**`)
  - `faqs` — JSON FAQ entries (`src/content/faqs/**`)
- **Schemas**: `src/schemas/*.ts` — zod schemas for metaframeworks, tags, and FAQs
- **Pages and routing**: `src/pages/**`
  - `index.astro` — homepage with latest published issues, components (IssueCard, SubscriptionForm, FaqSection)
  - `archive/[...slug].astro`, `archive/index.astro` — issue detail and archive list
  - `tags/[tag].astro` — tag-filtered lists
  - `rss.xml.js` — RSS feed via `@astrojs/rss` and `getCollection('archive')`
  - Additional static pages: about, faq, comparison, subscription flows, 404
- **Components**: `src/components/**` — presentational (head, header/footer, issue cards, subscription form, FAQ)
- **Layouts**: `src/layouts/**` — `ContentNarrow.astro` and `ContentWide.astro`
- **Styling**: `src/styles/base.css` and `src/styles/global.css` for global styles; component-scoped styles in `.astro` files
- **Utilities**: `src/utils/markdown.js` — `markdownToHtml` helper (remark/rehype, supports raw HTML)
- **Search**: `astro-pagefind` integration for full-text search
- **Static assets**: `public/**` — images, icons, cover images
- **Site metadata**: `SITE_TITLE` and `SITE_DESCRIPTION` in `src/consts.ts`, reused across pages and RSS

### Data flow

Content lives as Markdown (issues, pages) and JSON (tags, FAQs, metaframeworks). `src/content.config.ts` defines and validates collections via zod schemas and Astro loaders (glob/file). Pages pull data with `getCollection()` at build time. Homepage and RSS filter by `published: true` and sort by `pubDate`. Sitemap and RSS are produced during build.

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

- **Content gating**: only items with `published: true` appear on archive pages and in RSS. Set `published: false` while drafting.
- **Dates**: frontmatter dates are coerced (`z.coerce.date`); use valid ISO date strings.
- **Network testing**: `npm run dev:expose` binds the dev server on LAN for device testing.
