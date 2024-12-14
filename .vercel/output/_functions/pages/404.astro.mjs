/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CSBRYtDk.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Pagina No Encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container text-center flex-1 grid place-content-center min-h-[600px]"> <h1 class="text-5xl md:text-8xl font-bold text-primary-700 mb-4">404 - Pagina No Encontrada</h1> <p>Lo sentimos, la página que buscas no existe.</p> </div> ` })}`;
}, "/home/michi/dev/web/unicoc-landing/src/pages/404.astro", void 0);

const $$file = "/home/michi/dev/web/unicoc-landing/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
