/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_2MmpKQDv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Oop's,Page Not Found | RCOX ENDOWMENT</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">${renderHead()}</head> <body class="bg-jovic"> <div class="flex justify-center items-center h-screen"> <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md text-center"> <h1 class="text-3xl text-gray-800 font-bold mb-4"> Page Not Found</h1> <p class="text-lg text-gray-600 mb-8">Oops! Looks like you're lost. The page you're looking for does not exist.</p> <a href="/" class="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Go Home</a> </div> </div> </body></html>`;
}, "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/404.astro", void 0);

const $$file = "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
