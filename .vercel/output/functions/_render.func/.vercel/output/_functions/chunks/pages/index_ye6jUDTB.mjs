/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_2MmpKQDv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { c as $$Layouts } from './about_7buypSyT.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "RCOX ENDOWMENT ", "pageUrl": "/" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div>  <div class="  md:bg-[url('src/images/home.jpg')] bg-[url('src/images/about.jpg')] bg-cover overflow-hidden h-screen"> <div class="text-white text- h-[100dvh]"> <div class=" bg-gray-800 bg-opacity-40 h-[100%] flex justify-center items-center flex-col"> <p class="md:text-5xl  sm:text-4xl lg:text-6xl text-2xl font-bold md:text-white text-xephas-yellow  pt-28">RCOX ENDOWMENT SERVICES</p> <p class="md:text-3xl pt-2 font-thin text-2xl  ">Empowering  Futures</p> </div> </div> </div> </div>  ` })}`;
}, "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/index.astro", void 0);

const $$file = "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
