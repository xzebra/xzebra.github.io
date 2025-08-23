// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	image: {
		// Enable Astro's global responsive image styles
		responsiveStyles: true,
	},
	site: 'https://xzebra.dev',
	integrations: [sitemap()]
});
