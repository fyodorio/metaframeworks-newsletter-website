# Styling Conventions

This project follows a specific styling approach without using external CSS/UI libraries.

## Core Principles
- No external CSS frameworks or UI libraries should be used
- Styles should be either:
  1. Global styles in @src/styles/global.css or @src/styles/base.css
  2. Component-specific styles within *.astro files

## Implementation Guidelines
- Use vanilla CSS with modern features (CSS variables, flexbox, grid, etc.)
- Component styles should be scoped to their respective .astro files
- Global styles should be minimal and focus on:
  - Reset/normalize styles
  - Typography
  - Color schemes
  - Layout utilities
  - Common patterns

## File Structure
- @src/styles/global.css: Global styles, CSS variables, and utilities
- @src/styles/base.css: Reset/normalize styles and base typography
- *.astro files: Component-specific styles using Astro's style block

## Best Practices
- Prefer semantic HTML elements
- Use CSS custom properties for theming
- Implement responsive design using modern CSS
- Keep specificity low
- Avoid !important declarations
- Use meaningful class names

## Examples

Good:
```astro
<style>
  .article-card {
    display: grid;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
  }
</style>
```

Bad:
```astro
<!-- Don't import external UI libraries -->
import { Card } from 'some-ui-library';

<!-- Don't use utility classes from frameworks -->
<div class="flex p-4 shadow-lg">
``` 