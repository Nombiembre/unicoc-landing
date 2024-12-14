/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderTransition, s as spreadAttributes, e as createAstro } from '../chunks/astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_69xU5mcg.mjs';
import { a as $$Section, $ as $$Layout } from '../chunks/Layout_CSBRYtDk.mjs';
/* empty css                                 */
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Bento = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getCollection("news");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-fbuedaya": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bento || gap-3" data-astro-cid-fbuedaya> ${data.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  }).map((post, i) => {
    const { title, date, heroImage } = post.data;
    const transitionName = `post-img-${post.slug}`;
    const defaultClasses = `p-8 border border-zinc-400/40 rounded-default bg-black/40 flex flex-col content-between h-full text-white bg-blend-multiply md:hover:bg-black/70 transition-all duration-200 relative overflow-hidden group`;
    let indexClasses = "";
    if (i === 0) {
      indexClasses = "md:rounded-tl-5xl [grid-area:one]";
    } else if (i === 1) {
      indexClasses = "md:rounded-tr-5xl [grid-area:two]";
    } else if (i === 2) {
      indexClasses = "md:rounded-bl-5xl [grid-area:three]";
    } else if (i === 3) {
      indexClasses = " [grid-area:four]";
    } else if (i === 4) {
      indexClasses = "md:rounded-br-5xl [grid-area:five]";
    }
    return renderTemplate`<div${addAttribute(`${defaultClasses} ${indexClasses} `, "class")} data-astro-cid-fbuedaya> <img class="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500 -z-10"${addAttribute(heroImage, "src")} alt="" data-astro-cid-fbuedaya${addAttribute(renderTransition($$result2, "wfgmp764", "", transitionName), "data-astro-transition-scope")}> <div class="space-y-4 mb-4" data-astro-cid-fbuedaya> <h2 class="text-2xl font-bricolage font-medium text-white line-clamp-2 truncate text-balance" data-astro-cid-fbuedaya> ${title} </h2> <p class="text-sm text-zinc-100 font-medium" data-astro-cid-fbuedaya> ${date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })} </p> </div> <a class="block border border-white rounded-full px-2 py-1 max-w-fit mt-auto hover:bg-white font-bricolage hover:text-black transition-all duration-200"${addAttribute(`/noticias/${post.slug}`, "href")} data-astro-cid-fbuedaya>
Ver más
</a> </div>`;
  })} </div> ` })} `;
}, "/home/michi/dev/web/unicoc-landing/src/components/Bento.astro", "self");

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div></div>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Features.astro", void 0);

const $$Convenios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div></div>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Convenios.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { placeholder, href, class: className, variant, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a referrerpolicy="no-referrer"${addAttribute(href, "href")}${addAttribute(`block hover:saturate-50 transition-all px-4 md:px-7 md:py-4 py-2 bg-primary-900 rounded-xl font-semibold font-bricolage max-w-fit ${className}`, "class")}${spreadAttributes(props)}> ${placeholder}</a>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Button.astro", void 0);

const $$HeroIndex = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`background-image: url('/images/hero_bg_1.jpg');`, "style")} class="min-h-[85svh] bg-zinc-800 h-full bg-no-repeat bg-cover flex flex-col justify-center"> <div class="container text-white"> ${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` <div class="relative max-w-2xl isolate space-y-4"> <div class="absolute bg-black -inset-0 filter blur-[100px] -z-10"></div> <span class="uppercase text-zinc-200 inline-block font-semibold tracking-wider text-xl">El Conocimiento es poder</span> <h1 class="text-6xl leading-tight font-bricolage font-bold"> <span class="bg-primary-900">Unicoc</span> - El mejor lugar para invertir en tu conocimiento.
</h1> <p>
Una universidad es una institución vibrante que actúa como un centro de educación superior e investigación,
          ofreciendo un entorno dinámico y estimulante.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/programas", "variant": "primary", "placeholder": "Explora Nuestros Programas" })} </div> ` })} </div> </div>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/HeroIndex.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroIndex, { "fullHeight": true }, { "button": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "button", "href": "/programas", "variant": "primary", "placeholder": "Explora Nuestros Programas" })}` })} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Convenios", $$Convenios, {})} ${renderComponent($$result2, "NewsBento", $$Bento, {})} </div> ` })}`;
}, "/home/michi/dev/web/unicoc-landing/src/pages/index.astro", void 0);

const $$file = "/home/michi/dev/web/unicoc-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
