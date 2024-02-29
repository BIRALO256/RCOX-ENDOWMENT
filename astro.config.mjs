import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 30
  },
  integrations: [tailwind(), partytown()]
});