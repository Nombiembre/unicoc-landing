import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como parte de los programas de movilidad internacional de Unicoc, tres estudiantes de la especialización en Periodoncia, sede Cali, se encuentran realizando estancias académicas en reconocidas universidades de Chile y España. Estas iniciativas buscan proporcionarles acceso a diferentes perspectivas educativas, así como fortalecer sus habilidades profesionales en un entorno global.</p>\n<p>En Chile, Rosa Emilia Gómez Torres, residente de III semestre, realiza su movilidad académica en la Universidad San Sebastián, donde cursará actividades en las sedes de Santiago y Concepción. Este programa le permitirá interactuar con expertos locales y adquirir conocimientos prácticos en un contexto académico diverso.\nPor su parte, en España, las residentes de IV semestre, Vivian Alejandra Muñoz Mena y Natalia Amézquita Perdomo, están desarrollando su estancia en la Universidad Internacional de Cataluña (UIC), en Barcelona. Este programa no solo refuerza su formación académica, sino que también les brinda la oportunidad de experimentar una cultura diferente, enriqueciendo su visión profesional y personal.</p>\n<p>Estas experiencias reflejan el compromiso de Unicoc con la formación de profesionales integrales, capaces de enfrentar los retos globales del campo odontológico. Extendemos nuestras felicitaciones a Rosa Emilia, Vivian Alejandra y Natalia por asumir este desafío con dedicación y compromiso.</p>";

				const frontmatter = {"title":"Estudiantes de Periodoncia de Unicoc Cali fortalecen su formación con movilidad internacional en Chile y España.","date":"2024-12-01T00:00:00.000Z","heroImage":"https://www.unicoc.edu.co/img/cargas/Noticias/2024/12/2024-12-2-10778.png"};
				const file = "/home/michi/dev/web/unicoc-landing/src/content/news/10778.md";
				const url = undefined;
				function rawContent() {
					return "\nComo parte de los programas de movilidad internacional de Unicoc, tres estudiantes de la especialización en Periodoncia, sede Cali, se encuentran realizando estancias académicas en reconocidas universidades de Chile y España. Estas iniciativas buscan proporcionarles acceso a diferentes perspectivas educativas, así como fortalecer sus habilidades profesionales en un entorno global.\n\nEn Chile, Rosa Emilia Gómez Torres, residente de III semestre, realiza su movilidad académica en la Universidad San Sebastián, donde cursará actividades en las sedes de Santiago y Concepción. Este programa le permitirá interactuar con expertos locales y adquirir conocimientos prácticos en un contexto académico diverso.\nPor su parte, en España, las residentes de IV semestre, Vivian Alejandra Muñoz Mena y Natalia Amézquita Perdomo, están desarrollando su estancia en la Universidad Internacional de Cataluña (UIC), en Barcelona. Este programa no solo refuerza su formación académica, sino que también les brinda la oportunidad de experimentar una cultura diferente, enriqueciendo su visión profesional y personal.\n\nEstas experiencias reflejan el compromiso de Unicoc con la formación de profesionales integrales, capaces de enfrentar los retos globales del campo odontológico. Extendemos nuestras felicitaciones a Rosa Emilia, Vivian Alejandra y Natalia por asumir este desafío con dedicación y compromiso.\n";
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
