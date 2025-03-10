# HTML Semantics and Accessibility Guidelines

This project follows strict semantic HTML and accessibility guidelines to ensure the best user experience for all users, including those with disabilities.

## Semantic HTML

### Core Principles

- Always use the most semantically appropriate HTML element for its purpose
- Structure content with proper hierarchy and meaning
- Avoid generic elements (div, span) when a semantic alternative exists

### Layout Elements

- `<header>`: For introductory content or navigational aids at the beginning of sections
- `<nav>`: For navigation menus and links
- `<main>`: For the main content of the document (only one per page)
- `<section>`: For thematic grouping of content
- `<article>`: For self-contained compositions (blog posts, news articles, etc.)
- `<aside>`: For content tangentially related to the main content
- `<footer>`: For footer information of sections or the document
- `<figure>` and `<figcaption>`: For self-contained content like images with captions
- `<details>` and `<summary>`: For expandable/collapsible content

### Lists

- Use `<ul>` and `<li>` for unordered lists
- Use `<ol>` and `<li>` for ordered lists
- Use `<dl>`, `<dt>`, and `<dd>` for definition lists
- All list-like UI components (menus, tabs, card collections) should use appropriate list semantics

### Interactive Elements

- `<button>`: For clickable actions that don't navigate to a new URL
- `<a>`: For links that navigate to a new URL or anchor
- Never use divs or spans as clickable elements
- Use `<dialog>` for modal dialogs
- Use `<popover>` attribute for popover content when appropriate
- Use `<menu>` for context menus and toolbar actions

## Accessibility (WCAG A Compliance)

### Core Requirements

- All interactive elements must be keyboard accessible
- All non-decorative images must have appropriate alt text
- Color must not be the only means of conveying information
- Content must be structured with proper heading hierarchy (h1-h6)
- Text must have sufficient color contrast (4.5:1 for normal text, 3:1 for large text)

### ARIA Attributes

- Use ARIA attributes only when necessary (native HTML semantics are preferred)
- Common ARIA attributes to use when appropriate:
  - `aria-label`: For elements without visible text labels
  - `aria-labelledby`: To reference visible text as a label
  - `aria-describedby`: To reference additional descriptive text
  - `aria-expanded`: For expandable/collapsible elements
  - `aria-controls`: To indicate which element is controlled by another
  - `aria-hidden`: To hide decorative elements from screen readers
  - `aria-live`: For dynamic content updates
  - `aria-current`: To indicate current item in a set

### Focus Management

- Ensure all interactive elements can receive focus
- Provide visible focus indicators
- Maintain logical tab order
- Use `tabindex="0"` to make non-interactive elements focusable when necessary
- Avoid `tabindex` values greater than 0

## Form Elements

### Input Elements

- Always use appropriate `<label>` elements for form controls
- Use the `for` attribute on labels to associate with input IDs
- Use appropriate input types (`email`, `tel`, `number`, `date`, etc.)
- Include placeholder text when helpful (but never as a replacement for labels)
- Use `required` attribute for mandatory fields
- Include `autocomplete` attributes for common data types
- Use `inputmode` attribute to optimize mobile keyboard types

### Form Structure

- Group related form controls with `<fieldset>` and `<legend>`
- Use appropriate button types (`submit`, `reset`, `button`)
- Provide clear error messages with `aria-invalid` and `aria-describedby`
- Use `<datalist>` for suggesting input values
- Include proper form validation with helpful error messages

### Additional Attributes

- `pattern`: For client-side validation patterns
- `min`/`max`/`step`: For number and date inputs
- `maxlength`/`minlength`: For text input constraints
- `autocapitalize`/`autocorrect`: For mobile text input behavior
- `spellcheck`: For text input spell checking

## Code Formatting

- Follow the project's Prettier configuration for all HTML/CSS code
- Use consistent indentation (2 spaces as per Prettier config)
- Use single quotes for attributes (as per Prettier config)
- Maintain proper nesting and hierarchy
- Keep lines at a reasonable length

## Examples

### Good Examples

```html
<!-- Semantic navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Proper button usage -->
<button type="button" aria-expanded="false" aria-controls="menu-content">
  Menu
  <span aria-hidden="true">▼</span>
</button>

<!-- Accessible form field -->
<div>
  <label for="email-input">Email Address</label>
  <input 
    id="email-input"
    type="email"
    name="email"
    required
    autocomplete="email"
    aria-describedby="email-hint"
  />
  <p id="email-hint">We'll never share your email with anyone else.</p>
</div>

<!-- Semantic article -->
<article>
  <header>
    <h2>Article Title</h2>
    <p>Published: <time datetime="2023-03-15">March 15, 2023</time></p>
  </header>
  <p>Article content goes here...</p>
  <footer>
    <p>Author: Jane Doe</p>
  </footer>
</article>

<!-- Accessible dialog -->
<dialog id="confirmation-dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-desc">Are you sure you want to proceed?</p>
  <div>
    <button type="button" autofocus>Confirm</button>
    <button type="button">Cancel</button>
  </div>
</dialog>
```

### Bad Examples

```html
<!-- Avoid: Non-semantic structure -->
<div class="nav">
  <div class="nav-item">Home</div>
  <div class="nav-item">About</div>
</div>

<!-- Avoid: Div as button -->
<div class="button" onclick="handleClick()">Click me</div>

<!-- Avoid: Missing form labels -->
<input type="text" placeholder="Enter your name">

<!-- Avoid: Non-semantic content structure -->
<div class="article">
  <div class="title">Article Title</div>
  <div class="content">Content goes here...</div>
</div>
``` 