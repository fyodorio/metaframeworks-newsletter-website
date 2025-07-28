import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const issues = await getCollection('archive');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: issues
      .filter((item) => item.data.published)
      .sort((a, b) => {
        if (b.data.pubDate && a.data.pubDate) {
          return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
        } else {
          return 0;
        }
      })
      .map((issue) => ({
        ...issue.data,
        link: `/archive/${issue.id}/`
      }))
  });
}
