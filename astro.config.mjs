import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://OmitaFutures.in',
  //site: 'http://localhost:4321',
  integrations: [tailwind()],
  adapter: netlify(),
});