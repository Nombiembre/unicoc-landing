import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DxtgcS9E.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_ClQdoEDt.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/michi/dev/web/unicoc-landing/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.CMFekIx1.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.container{--_max-width: 1350px;--_padding: 1rem;width:min(100%,var(--_max-width));margin-inline:auto;padding-inline:var(--_padding)}span[data-astro-cid-hvibjqjb]{font-family:Bricolage Grotesque,sans-serif}.nav-item[data-astro-cid-5npfxspf]{transition:all .3s ease-in-out;&:hover .nav-item-card[data-astro-cid-5npfxspf]{display:flex}@media (min-width: 768px){&:hover a[data-astro-cid-5npfxspf]{--tw-text-opacity: 1;color:rgb(152 53 73 / var(--tw-text-opacity))}}}body{font-family:poppins,sans-serif}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.CMFekIx1.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.container{--_max-width: 1350px;--_padding: 1rem;width:min(100%,var(--_max-width));margin-inline:auto;padding-inline:var(--_padding)}span[data-astro-cid-hvibjqjb]{font-family:Bricolage Grotesque,sans-serif}.nav-item[data-astro-cid-5npfxspf]{transition:all .3s ease-in-out;&:hover .nav-item-card[data-astro-cid-5npfxspf]{display:flex}@media (min-width: 768px){&:hover a[data-astro-cid-5npfxspf]{--tw-text-opacity: 1;color:rgb(152 53 73 / var(--tw-text-opacity))}}}body{font-family:poppins,sans-serif}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/noticias/[slug]","isIndex":false,"type":"page","pattern":"^\\/noticias\\/([^/]+?)\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/noticias/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMFekIx1.css"}],"routeData":{"route":"/noticias","isIndex":true,"type":"page","pattern":"^\\/noticias\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/noticias/index.astro","pathname":"/noticias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BbzUxFlq.js"}],"styles":[{"type":"external","src":"/_astro/index.CMFekIx1.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.container{--_max-width: 1350px;--_padding: 1rem;width:min(100%,var(--_max-width));margin-inline:auto;padding-inline:var(--_padding)}span[data-astro-cid-hvibjqjb]{font-family:Bricolage Grotesque,sans-serif}.nav-item[data-astro-cid-5npfxspf]{transition:all .3s ease-in-out;&:hover .nav-item-card[data-astro-cid-5npfxspf]{display:flex}@media (min-width: 768px){&:hover a[data-astro-cid-5npfxspf]{--tw-text-opacity: 1;color:rgb(152 53 73 / var(--tw-text-opacity))}}}body{font-family:poppins,sans-serif}\n.selected[data-astro-cid-4xjrcmio]{--tw-bg-opacity: 1;background-color:rgb(137 12 37 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.selected[data-astro-cid-4xjrcmio]:hover{--tw-saturate: saturate(.5);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/programas","isIndex":true,"type":"page","pattern":"^\\/programas\\/?$","segments":[[{"content":"programas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programas/index.astro","pathname":"/programas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.CMFekIx1.css"},{"type":"inline","content":".bento[data-astro-cid-fbuedaya]{display:grid;grid-template-areas:\"one\" \"two\" \"three\" \"four\" \"five\";grid-template-columns:1fr;grid-template-rows:repeat(2,400px)}@media (min-width: 768px){.bento[data-astro-cid-fbuedaya]{display:grid;grid-template-areas:\"one one two two\" \"three four four five\";grid-template-columns:1fr 200px 200px 1fr}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.container{--_max-width: 1350px;--_padding: 1rem;width:min(100%,var(--_max-width));margin-inline:auto;padding-inline:var(--_padding)}span[data-astro-cid-hvibjqjb]{font-family:Bricolage Grotesque,sans-serif}.nav-item[data-astro-cid-5npfxspf]{transition:all .3s ease-in-out;&:hover .nav-item-card[data-astro-cid-5npfxspf]{display:flex}@media (min-width: 768px){&:hover a[data-astro-cid-5npfxspf]{--tw-text-opacity: 1;color:rgb(152 53 73 / var(--tw-text-opacity))}}}body{font-family:poppins,sans-serif}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/michi/dev/web/unicoc-landing/src/pages/noticias/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/noticias/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/michi/dev/web/unicoc-landing/src/components/Bento.astro",{"propagation":"in-tree","containsHead":false}],["/home/michi/dev/web/unicoc-landing/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/michi/dev/web/unicoc-landing/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/home/michi/dev/web/unicoc-landing/src/pages/programas/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/michi/dev/web/unicoc-landing/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/programas/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/noticias/index@_@astro":"pages/noticias.astro.mjs","\u0000@astro-page:src/pages/noticias/[slug]@_@astro":"pages/noticias/_slug_.astro.mjs","\u0000@astro-page:src/pages/programas/index@_@astro":"pages/programas.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/michi/dev/web/unicoc-landing/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10773.md?astroContentCollectionEntry=true":"chunks/10773_C81E2VFJ.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10774.md?astroContentCollectionEntry=true":"chunks/10774_BOj20eg5.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10777.md?astroContentCollectionEntry=true":"chunks/10777_BQoyQ8yJ.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10778.md?astroContentCollectionEntry=true":"chunks/10778_B8zKSXBX.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10781.md?astroContentCollectionEntry=true":"chunks/10781_DS6370Nl.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10773.md?astroPropagatedAssets":"chunks/10773_CX89CXwP.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10774.md?astroPropagatedAssets":"chunks/10774_hPokE9SB.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10777.md?astroPropagatedAssets":"chunks/10777_BMSzu8dw.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10778.md?astroPropagatedAssets":"chunks/10778_Ufp489z1.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10781.md?astroPropagatedAssets":"chunks/10781_BwcwXb_r.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10773.md":"chunks/10773_B_t7V5w2.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10774.md":"chunks/10774_rZym6KEY.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10777.md":"chunks/10777_D72ZStnd.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10778.md":"chunks/10778_DmCFZPQI.mjs","/home/michi/dev/web/unicoc-landing/src/content/news/10781.md":"chunks/10781_DqEJ4Yd0.mjs","\u0000@astrojs-manifest":"manifest_D_gNDmpN.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BbzUxFlq.js","@astrojs/react/client.js":"_astro/client.DBuskA0s.js","~/components/programas/RenderData.tsx":"_astro/RenderData.CHjemK7d.js","/astro/hoisted.js?q=1":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CMFekIx1.css","/favicon.svg","/_astro/RenderData.CHjemK7d.js","/_astro/client.DBuskA0s.js","/_astro/filterStore.B6g75g0i.js","/_astro/hoisted.2daoxv0f.js","/_astro/hoisted.BbzUxFlq.js","/_astro/index.DTD2g3-w.js","/images/Campus-Unicoc.avif","/images/administracion-de-empresas.jpeg","/images/derecho.jpeg","/images/hero_bg_1.jpg","/images/ingeneria-industrail.jpg","/images/ingenieria-de-sistemas.jpeg","/images/logo-unicoc-blanco.png","/images/odontologia.jpeg","/images/page_heading_bg.jpg","/images/unicoc-logo.webp","/images/programas/administracion-de-empresas.avif","/images/programas/derecho.avif","/images/programas/endodoncia.avif","/images/programas/gerencia-servicios-salud.avif","/images/programas/ingenieria-de-sistemas.avif","/images/programas/ingenieria-industrial.avif","/images/programas/negocios-internacionales.avif","/images/programas/odontologia.avif","/images/programas/ortopedia.avif","/images/programas/periodoncia.avif","/images/programas/prostodoncia.avif","/images/programas/psicologia.avif","/images/programas/rehabilitacion.avif","/images/programas/grandes/administracion-de-empresas.avif","/images/programas/grandes/derecho.avif","/images/programas/grandes/ingenieria-de-sistemas.avif","/images/programas/grandes/ingenieria-industrial.avif","/images/programas/grandes/negocios-internacionales.avif","/images/programas/grandes/odontologia.avif","/images/programas/grandes/psicologia.avif"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"gco5mu309CaJaopl54fyuRzGrsf53aElEcUu6jt0iWc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
