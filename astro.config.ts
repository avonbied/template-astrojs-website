import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pwa from '@vite-pwa/astro';

const DEFAULT_PORT = 8080;

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? `http://localhost:${process.env.PORT ?? DEFAULT_PORT}`,
	base: process.env.SITE_BASE,
	integrations: [sitemap(), pwa()],
	server: {
		port: Number(process.env.PORT ?? DEFAULT_PORT),
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
