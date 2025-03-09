# Styling Conventions

This project follows a specific styling approach without using external CSS/UI libraries.

## Core Principles

- No external CSS frameworks or UI libraries should be used
- Styles should be either:
  1. Global styles in @src/styles/global.css or @src/styles/base.css
  2. Component-specific styles within \*.astro files

## Layout Guidelines

- Use appropriate layout methods based on the use case:
  1. CSS Grid: For two-dimensional layouts
     - Page layouts
     - Complex component layouts
     - Areas that need both row and column control
     - Dashboard-like interfaces
  2. Flexbox: For one-dimensional layouts
     - Navigation menus
     - Button groups
     - Card containers
     - Simple rows or columns of elements
  3. Tables: Only for tabular data
     - Data tables
     - Pricing comparisons
     - Actual spreadsheet-like information

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
- \*.astro files: Component-specific styles using Astro's style block

## Best Practices

- Prefer semantic HTML elements
- Use CSS custom properties for theming
- Implement responsive design using modern CSS
- Keep specificity low
- Avoid !important declarations
- Use meaningful class names

## Examples

Good Layout Examples:

```astro
<!-- Two-dimensional page layout with CSS Grid -->
<style>
  .page-layout {
    display: grid;
    grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
    grid-template-columns: 250px 1fr;
    gap: var(--spacing-lg);
  }
</style>

<!-- One-dimensional navigation with Flexbox -->
<style>
  .nav-menu {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
  }
</style>

<!-- Proper table usage -->
<style>
  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
</style>
```

Bad Layout Examples:

```astro
<!-- Don't use Grid for simple one-dimensional layouts -->
<style>
  .button-group {
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
</style>

<!-- Don't use Flexbox for complex two-dimensional layouts -->
<style>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<!-- Don't use tables for layout -->
<style>
  .page-layout {
    display: table;
  }
</style>
```

Additional Good Examples:

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
<!-- Don't import external UI libraries -->import {Card} from 'some-ui-library';

<!-- Don't use utility classes from frameworks -->
<div class="flex p-4 shadow-lg"></div>
```
