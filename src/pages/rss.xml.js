import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const issues = await getCollection('archive');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: issues.map((issue) => ({
      ...issue.data,
      link: `/archive/${issue.id}/`
    }))
  });
}
