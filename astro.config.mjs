// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://metaframe.works',
	integrations: [mdx(), sitemap(), pagefind()],
});
