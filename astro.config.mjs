import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const LIVE_URL ="https://"


// https://astro.build/config
export default defineConfig({
  server:{
    port:300,
  },
  integrations: [tailwind()]
});