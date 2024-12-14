/* empty css                                 */
import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/michi/dev/web/unicoc-landing/src/pages/noticias/index.astro", void 0);

const $$file = "/home/michi/dev/web/unicoc-landing/src/pages/noticias/index.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
