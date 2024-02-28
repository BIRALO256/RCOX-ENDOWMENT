/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_2MmpKQDv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main, a as $$H1, b as $$Section, c as $$Layouts } from './about_YxEptaqk.mjs';

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "Gallery | RCOX ENDOWMENT", "pageUrl": "/stories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Gallery" })} ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<a href="/stories" class="underline text-jovic-background font-bold text-xl  text-xephas-white p-7 ">Back to Stories</a> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- First image --> <img src="src/images/gallery/photoe1.jpg" alt="Photo 1" class="object-cover w-full h-96 md:h-80 lg:h-96"> <!-- Second image --> <img src="src/images/gallery/photoe3.jpg" alt="Photo 2" class="object-cover w-full h-96 md:h-80 lg:h-96"> <!-- Third image --> <img src="src/images/gallery/photoe2.jpg" alt="Photo 3" class="object-cover w-full h-96 md:h-80 lg:h-96"> <!-- Fourth image --> <img src="src/images/gallery/photoe7.jpg" alt="Photo 4" class="object-cover w-full h-96 md:h-80 lg:h-96"> <!-- Fifth image --> <img src="src/images/gallery/photoe11.jpg" alt="Photo 5" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- Sixth image --> <img src="src/images/gallery/photoe18.jpg" alt="Photo 6" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- 7th image --> <img src="src/images/gallery/photoe10.jpg" alt="Photo 7" class="object-contain w-fullh-96 md:h-80 lg:h-96"> <!-- 8th image --> <img src="src/images/gallery/photoe13.jpg" alt="Photo 8" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- 9th image --> <img src="src/images/gallery/photoe8.jpg" alt="Photo 9" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- 10th image --> <img src="src/images/gallery/photoe14.jpg" alt="Photo 10" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- 11th image --> <img src="src/images/gallery/photoe15.jpg" alt="Photo 11" class="object-cover w-fullh-96 md:h-80 lg:h-96"> <!-- 12th image --> <img src="src/images/gallery/photoe9.jpg" alt="Photo 12" class="object-contain w-full h-96 md:h-80 lg:h-96"> </div> <a href="/stories" class="underline text-jovic-background font-bold text-xl  text-xephas-white m-7 ">Back to Stories</a> ` })} ` })} ` })}`;
}, "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/gallery.astro", void 0);

const $$file = "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
