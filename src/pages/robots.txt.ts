import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
	const SITEMAP_URL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(SITEMAP_URL));
};