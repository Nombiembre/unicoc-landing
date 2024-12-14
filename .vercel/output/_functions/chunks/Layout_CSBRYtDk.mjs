import { c as createComponent, r as renderTemplate, b as addAttribute, e as createAstro, a as renderComponent, k as renderHead, m as maybeRenderHead, d as renderSlot, F as Fragment, f as renderTransition } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$Astro$9 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/michi/dev/web/unicoc-landing/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$8 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Head.astro", void 0);

const $$Astro$7 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-10 md:py-10 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Section.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, bgUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`background-image: url(${bgUrl});`, "style")}${addAttribute(`min-h-[40svh] h-full bg-no-repeat bg-cover bg-center grid place-content-center`, "class")}> <div class="container text-white"> ${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` <div class="relative isolate space-y-4"> <div class="absolute bg-black -inset-4 filter blur-[80px] -z-10"></div> <h1 class="md:text-6xl text-4xl text-center leading-tight font-bricolage font-bold"> ${title} </h1> </div> ` })} </div> </div>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Hero.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      title: "Support",
      url: "/support"
    },
    {
      title: "Privacy Policy",
      url: "/privacy"
    },
    {
      title: "Terms and conditions",
      url: "/terms"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-default/80 relative z-40 text-default border-t border-gray-300 mt-auto bg-primary-900 py-4 text-white"> <div class="container flex items-center py-4 justify-between text-sm"> <div> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} TypeDecoration</span> </div> <ul class="flex items-center gap-6"> ${links.map(({ url, title }) => renderTemplate`<li> <a${addAttribute(url, "href")}>${title}</a> </li>`)} </ul> </div> </footer>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  const { href, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(className, "class")}> <img src="/images/logo-unicoc-blanco.png" alt="Unicoc Logo" class="w-auto md:max-h-12 max-h-10"> </a>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/common/Logo.astro", void 0);

const NAVIGATION = [
  {
    name: "Unicoc",
    sublinks: [
      {
        name: "Sobre Nosotros",
        items: [
          { name: "Noticias", href: "/unicoc/noticias" },
          { name: "Galería", href: "/unicoc/galeria" },
          { name: "Calendario", href: "/unicoc/calendario" },
          { name: "Directorio", href: "/unicoc/directorio" },
          { name: "Historia", href: "/unicoc/historia" },
          { name: "Principios", href: "/unicoc/principios" },
          { name: "Gobierno", href: "/unicoc/gobierno" },
          { name: "Recursos de Marca", href: "/unicoc/recursos" },
          { name: "Blogs", href: "/unicoc/blogs" }
        ]
      },
      {
        name: "Documentos y Políticas",
        items: [
          { name: "PEI", href: "/documentos/pei" },
          { name: "Reglamentos", href: "/documentos/reglamentos" },
          { name: "Políticas", href: "/documentos/politicas" },
          { name: "Resoluciones", href: "/documentos/resoluciones" },
          { name: "Formatos", href: "/documentos/formatos" },
          { name: "Documentos ESAL", href: "/documentos/esal" }
        ]
      }
    ]
  },
  {
    name: "Plataforma",
    items: [
      { name: "📚 Sistema Academico", href: "https://academico.unicoc.edu.co/", blank: true },
      { name: "💻 Moodle Unicoc", href: "https://moodle.unicoc.edu.co/login/index.php", blank: true },
      { name: "🗄️ Reserva de casilleros", href: "https://lockers.unicoc.edu.co/", blank: true },
      { name: "✍️ Actualizar Datos", href: "https://datos.unicoc.edu.co/", blank: true }
    ]
  },
  {
    name: "Biblioteca",
    sublinks: [
      {
        name: "Investigación",
        items: [
          { name: "Objetivos", href: "/investigacion/objetivos" },
          { name: "Políticas", href: "/investigacion/politicas" },
          { name: "Comité Ética", href: "/investigacion/etica" },
          { name: "Antiplagio", href: "/investigacion/antiplagio" },
          { name: "Journal", href: "/investigacion/journal" },
          { name: "Simposios", href: "/investigacion/simposios" },
          { name: "Proyectos", href: "/investigacion/proyectos" }
        ]
      },
      {
        name: "Biblioteca",
        items: [
          { name: "Acerca del SIBU", href: "/biblioteca/sibu" },
          { name: "Búsqueda", href: "/biblioteca/busqueda" },
          { name: "Apoyo al Aprendizaje e Investigación", href: "/biblioteca/apoyo" }
        ]
      }
    ]
  },
  {
    name: "Desarrollo",
    sublinks: [
      {
        name: "Bienestar",
        items: [
          { name: "Programas", href: "/desarrollo/bienestar/programas" },
          { name: "Actividades", href: "/desarrollo/bienestar/actividades" },
          { name: "Rutas de Atención", href: "/desarrollo/bienestar/rutas-de-atencion" }
        ]
      },
      {
        name: "Internacionalización",
        items: [
          { name: "Programas", href: "/desarrollo/internacionalizacion/programas" },
          { name: "Centro de Idiomas", href: "/desarrollo/internacionalizacion/idiomas" }
        ]
      },
      {
        name: "Proyección Social",
        items: [
          { name: "Programas", href: "/desarrollo/proyeccion-social/programas" },
          { name: "Objetivos", href: "/desarrollo/proyeccion-social/objetivos" }
        ]
      },
      {
        name: "Educación Continuada",
        items: [
          { name: "Conferencias", href: "/desarrollo/educacion-continuada/conferencias" },
          { name: "Diplomados", href: "/desarrollo/educacion-continuada/diplomados" },
          { name: "Seminarios", href: "/desarrollo/educacion-continuada/seminarios" }
        ]
      }
    ]
  }
  // {
  //   name: 'Clínicas',
  //   items: [
  //     { name: 'Derechos y Deberes', href: '/clinicas/derechos-deberes' },
  //     { name: 'Carpeta Institucional', href: '/clinicas/carpeta' },
  //   ],
  // },
];

const $$Astro$4 = createAstro();
const $$Items = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Items;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${data.length > 4 && "md:columns-2"}`, "class")}> ${data.map(({ name, href }) => renderTemplate`<li class=""> <a${addAttribute(href, "href")}${addAttribute(`group px-3 py-1 md:px-6 md:py-4 hover:bg-primary-50 rounded md:font-medium text-gray-800 text-sm md:text-lg hover:text-primary-800 transition-all duration-200 ease-in-out flex justify-between items-center`, "class")}> <span class="inline-block">${name}</span>${" "} <span class="hidden md:inline-block opacity-0 transition-all duration-200 pl-2 group-hover:opacity-100"> ${" "}
➜
</span> </a> </li>`)} </ul>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/Items.astro", void 0);

const $$Astro$3 = createAstro();
const $$Sublinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sublinks;
  const { data, mobile } = Astro2.props;
  return renderTemplate`${data.map(({ name, items }, index) => renderTemplate`${maybeRenderHead()}<li${addAttribute(`${index !== 0 && "md:border-l border-slate-300 md:pl-10"} `, "class")} data-astro-cid-hvibjqjb>${!mobile ? renderTemplate`<span${addAttribute(`font-bold text-primary-700/80 mb-10 uppercase text-sm inline-block px-6`, "class")} data-astro-cid-hvibjqjb>${name}</span>` : ""}${renderComponent($$result, "Items", $$Items, { "hidden": false, "data": items, "data-astro-cid-hvibjqjb": true })}</li>`)}`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/Sublinks.astro", void 0);

const $$Astro$2 = createAstro();
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavItem;
  const classesDesktop = "w-[1350px] z-50 p-10 bg-white border border-gray-300 rounded-2xl shadow-md flex gap-10";
  const classesMobile = "container ";
  const { mobile, navItem } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="nav-item || p-4 md:hover:bg-primary-100/80 rounded" data-astro-cid-5npfxspf> <a href="#"${addAttribute(`transition-all duration-200 ease-in-out cursor-default font-bricolage font-semibold ${mobile && "text-black font-bold text-lg"}`, "class")} data-astro-cid-5npfxspf> ${navItem.name} </a> <div${addAttribute(`nav-item nav-item-card || ${mobile ? "" : "absolute hidden nav-item pt-8 left-0 top-14"}`, "class")} data-astro-cid-5npfxspf> <ul${addAttribute(mobile ? classesMobile : classesDesktop, "class")} data-astro-cid-5npfxspf> ${navItem.sublinks && renderTemplate`${renderComponent($$result, "Sublinks", $$Sublinks, { "mobile": mobile, "data": navItem.sublinks, "data-astro-cid-5npfxspf": true })}`} ${navItem.items && renderTemplate`${renderComponent($$result, "Items", $$Items, { "data": navItem.items, "data-astro-cid-5npfxspf": true })}`} </ul> </div> </li> `;
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/NavItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const { class: className, mobile } = Astro2.props;
  let isMobile = false;
  if (mobile) {
    isMobile = true;
  }
  return renderTemplate`${maybeRenderHead()}<nav> <ul${addAttribute(`gap-x-0 items-center ${className}`, "class")}> ${NAVIGATION.map((item, i) => {
    if (i == 1) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavItem", $$NavItem, { "mobile": isMobile, "navItem": item })} ${renderComponent($$result2, "Logo", $$Logo, { "href": "/", "class": "mx-10" })} ` })}`;
    }
    return renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { "mobile": isMobile, "navItem": item })}`;
  })} </ul> </nav>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<svg id="mobile-hamburger" width="40px" height="40px" class="max-h-10 cursor-pointer md:hidden" viewBox="0 0 24 24" fill="none"> <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"></path> </svg> <div id="mobile-nav" data-expanded="false" class="absolute bg-white top-16 px-2 mx-auto left-0 w-full z-[100] hidden"> ', " </div> <script>\n  document.addEventListener('astro:page-load', () => {\n    const navHamburger = document.getElementById('mobile-hamburger');\n    const mobileNav = document.getElementById('mobile-nav');\n\n    navHamburger.addEventListener('click', () => {\n      const isOpen = mobileNav.getAttribute('data-expanded');\n\n      if (isOpen === 'true') {\n        mobileNav.classList.add('hidden');\n        mobileNav.setAttribute('data-expanded', 'false');\n      } else {\n        mobileNav.classList.remove('hidden');\n        mobileNav.setAttribute('data-expanded', 'true');\n      }\n      console.log('the value is', isOpen);\n    });\n  });\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Nav", $$Nav, { "mobile": true, "class": "border rounded-lg px-5" }));
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/MobileNav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 shadow z-50 bg-primary-900 text-white top-0 w-full"> <div class="container relative flex justify-between md:justify-center items-center"> ${renderComponent($$result, "Logo", $$Logo, { "href": "/", "class": "md:hidden" })} ${renderComponent($$result, "Nav", $$Nav, { "mobile": false, "class": "hidden md:flex" })} ${renderComponent($$result, "MobileNav", $$MobileNav, {})} </div> </header>`;
}, "/home/michi/dev/web/unicoc-landing/src/components/Header/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, hero } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Head", $$Head, { "title": title, "data-astro-cid-sckkx6r4": true })}${maybeRenderHead()}<body class="flex flex-col min-h-dvh" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4${addAttribute(renderTransition($$result, "yxpohs6f", "fade", ""), "data-astro-transition-scope")}> ${hero && renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "title": hero.title, "bgUrl": hero.bgUrl, "data-astro-cid-sckkx6r4": true })}`} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/michi/dev/web/unicoc-landing/src/layouts/Layout.astro", "self");

export { $$Layout as $, $$Section as a };
