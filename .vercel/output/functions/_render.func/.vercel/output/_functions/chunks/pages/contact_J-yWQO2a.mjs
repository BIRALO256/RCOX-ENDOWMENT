/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_2MmpKQDv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main, a as $$H1, b as $$Section, c as $$Layouts } from './about_YxEptaqk.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layouts, { "title": "Contact Us", "pageUrl": "/contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Connect With Us" })} ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <!-- Twitter --> <a href="https://twitter.com/YourTwitterHandle" target="_blank" class="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 mr-4"> <path fill="currentColor" d="M22.46 5.52c-.84.37-1.74.62-2.68.73.96-.57 1.7-1.48 2.05-2.56-.9.53-1.9.92-2.96 1.13-.85-.9-2.06-1.46-3.4-1.46-2.57 0-4.65 2.08-4.65 4.65 0 .36.04.7.11 1.04-3.87-.2-7.3-2.04-9.6-4.85-.4.68-.63 1.47-.63 2.3 0 1.6.81 3.02 2.04 3.85-.75-.02-1.45-.23-2.07-.58v.06c0 2.24 1.59 4.1 3.7 4.52-.4.11-.82.17-1.25.17-.3 0-.6-.03-.89-.08.6 1.85 2.33 3.2 4.38 3.24-1.6 1.25-3.61 1.99-5.79 1.99-.38 0-.76-.02-1.14-.07 2.06 1.32 4.51 2.09 7.14 2.09 8.57 0 13.26-7.1 13.26-13.26 0-.2 0-.39-.01-.58.91-.66 1.7-1.49 2.32-2.43z"></path> </svg> <span class="text-lg font-semibold text-gray-800">Twitter</span> </a> <!-- Gmail --> <a href="mailto:youremail@gmail.com" class="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 mr-4"> <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.57L18.43 11H5.57L12 5.57zm7.28 8.15c-.19-.15-4.72-3.72-7.28-3.72-2.56 0-7.09 3.57-7.28 3.72-.25.2-.42.52-.42.87 0 .68.55 1.23 1.23 1.23h12.34c.68 0 1.23-.55 1.23-1.23 0-.35-.17-.67-.42-.87z"></path> </svg> <span class="text-lg font-semibold text-gray-800">Gmail</span> </a> <!-- Phone Contact --> <a href="tel:+1234567890" class="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 mr-4"> <path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm4.343 16.314c-.557-.578-1.398-.916-2.307-.916-.91 0-1.75.338-2.307.916-.319.33-.664.638-1.036.923-.45.316-.924.523-1.424.62-.512.102-.994.066-1.475-.102-.447-.157-.87-.396-1.263-.707-.366-.292-.658-.633-.884-1.024-.149-.26-.273-.534-.365-.82-.076-.244-.143-.481-.215-.717-.144-.48-.318-.94-.666-1.376-.29-.383-.656-.697-1.079-.94-.385-.212-.802-.348-1.272-.367-.48-.018-.973.058-1.475.224-.371.127-.724.297-1.038.546-.533.405-.914.936-1.168 1.564-.27.674-.379 1.413-.335 2.19.005.201.051.397.084.594.07.372.148.743.226 1.114.113.542.224 1.081.338 1.623.064.303.139.605.214.907.064.262.124.526.19.79.039.16.08.319.12.479.052.208.106.416.158.624.084.34.172.68.27 1.018.149.517.347 1.005.595 1.468.309.595.685 1.127 1.147 1.597.512.518 1.075.927 1.725 1.238.672.32 1.383.49 2.123.49.737 0 1.448-.17 2.121-.49.65-.311 1.213-.72 1.725-1.238.462-.47.838-1.002 1.146-1.597.248-.463.446-.951.594-1.468.097-.338.185-.678.27-1.018.052-.208.107-.416.159-.624.04-.16.08-.319.119-.479.064-.264.125-.528.19-.79.075-.302.15-.604.214-.907.113-.542.225-1.081.337-1.623.078-.372.156-.743.225-1.114.032-.197.078-.393.083-.594.044-.777-.064-1.516-.335-2.19-.254-.628-.635-1.16-1.167-1.564-.315-.249-.668-.419-1.038-.546-.503-.166-.996-.242-1.475-.224-.47.019-.887.155-1.272.367-.423.243-.79.557-1.08.94-.348.436-.522.896-.666 1.376-.072.236-.139.473-.215.717-.092.286-.216.56-.365.82-.226.39-.517.731-.884 1.024-.392.311-.816.55-1.263.707-.481.167-.963.203-1.475.102-.5-.097-.974-.304-1.424-.62-.372-.285-.717-.593-1.036-.923-.559-.578-1.398-.916-2.308-.916-.91 0-1.75.338-2.307.916-.319.33-.664.638-1.036.923-.45.316-.924.523-1.424.62-.512.102-.994.066-1.475-.102-.447-.157-.87-.396-1.263-.707-.366-.292-.658-.633-.884-1.024-.149-.26-.273-.534-.365-.82-.076-.244-.143-.481-.215-.717-.144-.48-.318-.94-.666-1.376-.29-.383-.656-.697-1.079-.94-.385-.212-.802-.348-1.272-.367-.48-.018-.973.058-1.475.224-.371.127-.724.297-1.038.546-.533.405-.914.936-1.168 1.564-.27.674-.379 1.413-.335 2.19.005.201.051.397.084.594.07.372.148.743.226 1.114.113.542.224 1.081.338 1.623.064.303.139.605.214.907.064.262.124.526.19.79.039.16.08.319.12.479.052.208.106.416.158.624.084.34.172.68.27 1.018.149.517.347 1.005.595 1.468.309.595.685 1.127 1.147 1.597.512.518 1.075.927 1.725 1.238.672.32 1.383.49 2.123.49.737 0 1.448-.17 2.121-.49.65-.311 1.213-.72 1.725-1.238.462-.47.838-1.002 1.146-1.597.248-.463.446-.951.594-1.468.097-.338.185-.678.27-1.018.052-.208.107-.416.159-.624.04-.16.08-.319.119-.479.064-.264.125-.528.19-.79.075-.302.15-.604.214-.907.113-.542.225-1.081.337-1.623.078-.372.156-.743.225-1.114.032-.197.078-.393.083-.594.044-.777-.064-1.516-.335-2.19-.254-.628-.635-1.16-1.167-1.564-.315-.249-.668-.419-1.038-.546-.503-.166-.996-.242-1.475-.224-.47.019-.887.155-1.272.367-.423.243-.79.557-1.08.94-.348.436-.522.896-.666 1.376-.072.236-.139.473-.215.717-.092.286-.216.56-.365.82-.226.39-.517.731-.884 1.024-.392.311-.816.55-1.263.707-.481.167-.963.203-1.475.102-.5-.097-.974-.304-1.424-.62-.372-.285-.717-.593-1.036-.923-.559-.578-1.398-.916-2.308-.916z"></path> </svg> <span class="text-lg font-semibold text-gray-800">Phone</span> </a> </div> ` })} ` })} ` })}`;
}, "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/contact.astro", void 0);

const $$file = "C:/JOVIC DISK/git repo/RCOX-ENDOWMENT/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
