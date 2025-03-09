import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

/**
 * Converts Markdown string to HTML
 * @param {string} markdown - The markdown string to convert
 * @returns {Promise<string>} - The HTML string
 */
export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm) // Support GitHub Flavored Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
    .use(rehypeRaw) // Allow raw HTML in markdown
    .use(rehypeStringify) // Convert to string
    .process(markdown);

  return String(result);
}
