import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SERVER_PORT =300
//the url to access your blog after deploying it somewhere like(github pages ectc)
const LIVE_URL ="https://biralo256.github.io/";
//this is  the astro command your  npm scripts runs
const SCRIPT =process.env.npm_lifecycle_script || "";
const isBuild =SCRIPT.includes("astro build");
let  BASE_URL = LOCALHOST_URL;
//when you're building your site in local or CI , you could just set your URL Manually
const  base='https://github.com/BIRALO256/RCOX-ENDOWMENT'

if(isBuild){
  BASE_URL =LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server:{
    port:SERVER_PORT
  },
  site:BASE_URL,
  integrations: [tailwind()]
});