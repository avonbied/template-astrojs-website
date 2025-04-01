import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pwa from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? `http://localhost:${process.env.PORT}`,
	base: process.env.SITE_BASE,
	integrations: [sitemap(), pwa()],
	server: {
		port: Number(process.env.PORT ?? 8080),
		host: true,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 10000
			}
		}
	}
});
