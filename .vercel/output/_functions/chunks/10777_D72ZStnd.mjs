import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Nuestra institución continúa liderando el camino hacia la sostenibilidad con la instalación de nuevos paneles solares en nuestra sede campus. Esta importante iniciativa es parte de nuestro compromiso continuo con el cuidado del medio ambiente y el uso eficiente de los recursos naturales.</p>\n<p>En esta nueva fase de la implementación de energías renovables, hemos instalado paneles solares de última tecnología, instalados en la terraza superior del auditorio JAT. Con una capacidad de generación de hasta 96 kWp.</p>\n<p>Los paneles solares permitirán reducir el consumo de energía convencional (externa), generando electricidad limpia y contribuyendo a disminuir nuestra huella de carbono. Con esta acción, Unicoc no solo refuerza su enfoque en la educación de calidad, sino también su responsabilidad social y ambiental, alineándose con las mejores prácticas globales en sostenibilidad.</p>\n<p>Además, estos paneles solares abastecerán todas las áreas de la sede campus, como aulas, oficinas y espacios comunes, lo que se traducirá en un ahorro significativo en el consumo de electricidad. Esto permitirá una reinversión en otros proyectos de innovación sostenible y brindará a nuestros estudiantes y profesores un espacio ideal para aprender sobre el uso de tecnologías renovables y energías limpias.</p>\n<p>A través de esta iniciativa, seguimos comprometidos con el desarrollo integral de nuestros estudiantes, preparándolos no solo para enfrentar los desafíos profesionales, sino también para contribuir a un futuro más verde y consciente con el planeta.</p>";

				const frontmatter = {"title":"Unicoc Sigue Avanzando Hacia la Sostenibilidad con la Instalación de Nuevos Paneles Solares","date":"2024-11-27T00:00:00.000Z","heroImage":"https://www.unicoc.edu.co/img/cargas/Noticias/2024/11/2024-11-28-10776.jpeg"};
				const file = "/home/michi/dev/web/unicoc-landing/src/content/news/10777.md";
				const url = undefined;
				function rawContent() {
					return "\nNuestra institución continúa liderando el camino hacia la sostenibilidad con la instalación de nuevos paneles solares en nuestra sede campus. Esta importante iniciativa es parte de nuestro compromiso continuo con el cuidado del medio ambiente y el uso eficiente de los recursos naturales.\n\nEn esta nueva fase de la implementación de energías renovables, hemos instalado paneles solares de última tecnología, instalados en la terraza superior del auditorio JAT. Con una capacidad de generación de hasta 96 kWp.\n\nLos paneles solares permitirán reducir el consumo de energía convencional (externa), generando electricidad limpia y contribuyendo a disminuir nuestra huella de carbono. Con esta acción, Unicoc no solo refuerza su enfoque en la educación de calidad, sino también su responsabilidad social y ambiental, alineándose con las mejores prácticas globales en sostenibilidad.\n\nAdemás, estos paneles solares abastecerán todas las áreas de la sede campus, como aulas, oficinas y espacios comunes, lo que se traducirá en un ahorro significativo en el consumo de electricidad. Esto permitirá una reinversión en otros proyectos de innovación sostenible y brindará a nuestros estudiantes y profesores un espacio ideal para aprender sobre el uso de tecnologías renovables y energías limpias.\n\nA través de esta iniciativa, seguimos comprometidos con el desarrollo integral de nuestros estudiantes, preparándolos no solo para enfrentar los desafíos profesionales, sino también para contribuir a un futuro más verde y consciente con el planeta.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
