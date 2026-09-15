import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : getRobotsTxt(new URL('sitemap-index.xml', new URL(import.meta.env.BASE_URL, site)));

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
