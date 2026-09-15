// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const previewSite = process.env.PUBLIC_SITE_URL;
const previewBase = process.env.PUBLIC_BASE_PATH;

// https://astro.build/config
export default defineConfig({
  site: previewSite || 'https://celesteyoga.co.uk',
  ...(previewBase ? { base: previewBase } : {}),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
