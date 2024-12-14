/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as createAstro, a as renderComponent, f as renderTransition } from '../../chunks/astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_69xU5mcg.mjs';
import 'clsx';
import { a as $$Section, $ as $$Layout } from '../../chunks/Layout_CSBRYtDk.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Prose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Prose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`prose dark:prose-invert max-w-3xl
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-img:rounded-xl
  prose-headings:underline ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Prose.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("news");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntry("news", slug);
  const { Content } = await post.render();
  const transitionName = `post-img-${post.slug}`;
  const { title, date, heroImage } = post.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "container space-y-8 max-w-6xl" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<img class="w-full object-cover mx-auto rounded-lg h-auto shadow-2xl"${addAttribute(heroImage, "src")} alt="Hero Image"${addAttribute(renderTransition($$result3, "xemdjpxc", "", transitionName), "data-astro-transition-scope")}> <div class="py-4 space-y-4 max-w-3xl mx-auto"> <!-- Make the date format like this: 01 Dec 2022 --> <p class="w-full block text-center font-bricolage text-gray-500 text-lg"> ${date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })} </p> <h1 class="text-center text-4xl font-bold font-bricolage text-balance">${title}</h1> </div> ${renderComponent($$result3, "Prose", $$Prose, { "class": "border-t mx-auto py-8 border-gray-300 text-lg" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Content", Content, {})} ` })} ` })} ` })}`;
}, "/home/michi/dev/web/unicoc-landing/src/pages/noticias/[slug].astro", "self");

const $$file = "/home/michi/dev/web/unicoc-landing/src/pages/noticias/[slug].astro";
const $$url = "/noticias/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
