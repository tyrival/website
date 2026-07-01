import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tailwind()],
  adapter: cloudflare()
});