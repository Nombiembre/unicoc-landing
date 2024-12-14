/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as createAstro, a as renderComponent } from '../chunks/astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import { a as $$Section, $ as $$Layout } from '../chunks/Layout_CSBRYtDk.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Filter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Filter;
  let filter = Astro2.url.searchParams.get("filter");
  if (filter === null) {
    filter = "pregrado";
  }
  const { filters } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="filter" class="md:text-xl flex flex-wrap gap-8 justify-center" data-astro-cid-4xjrcmio> ${filters.map((f) => {
    return renderTemplate`<button${addAttribute(f, "value")}${addAttribute([" transition-all duration-300 px-3 md:px-5 md:py-2 py-2 bg-white border border-primary-800 text-black rounded-lg font-semibold font-bricolage max-w-fit hover:text-primary-900", [{ selected: filter === f }]], "class:list")} type="button" data-astro-cid-4xjrcmio> ${f} </button>`;
  })} </div>  `;
}, "/home/michi/dev/web/unicoc-landing/src/components/programas/Filter.astro", void 0);

const $$Book = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M5 8h4"></path> <path d="M9 16h4"></path> <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path> <path d="M14 9l4 -1"></path> <path d="M16 16l3.923 -.98"></path> </svg>`;
}, "/home/michi/dev/web/unicoc-landing/src/assets/icons/Book.astro", void 0);

const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg>`;
}, "/home/michi/dev/web/unicoc-landing/src/assets/icons/MapPin.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Conoce Nuestros Programas";
  const bgUrl = "/images/page_heading_bg.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Programas", "hero": { bgUrl, title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Section", $$Section, { "class": "grid gap-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Filter", $$Filter, { "filters": ["pregrado", "posgrado"] })} ${renderComponent($$result3, "RenderData", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "~/components/programas/RenderData.tsx", "client:component-export": "default" }, { "bookIcon": ($$result4) => renderTemplate`${renderComponent($$result4, "Book", $$Book, { "slot": "bookIcon" })}`, "geoIcon": ($$result4) => renderTemplate`${renderComponent($$result4, "MapPin", $$MapPin, { "slot": "geoIcon" })}` })} ` })} </div> ` })}`;
}, "/home/michi/dev/web/unicoc-landing/src/pages/programas/index.astro", void 0);

const $$file = "/home/michi/dev/web/unicoc-landing/src/pages/programas/index.astro";
const $$url = "/programas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
