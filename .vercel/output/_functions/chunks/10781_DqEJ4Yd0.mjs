import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El 28 de noviembre, tras más de un mes de rigurosas evaluaciones, los estudiantes de octavo semestre de Psicología, David Garzón y Tatiana Hernández, brillaron en el proceso de selección de pasantías con Nutresa. Enfrentándose a cinco aspirantes más y superando cuatro exigentes fases, es asi como lograron obtener los dos cupos, a pesar de que inicialmente solo se contemplaba uno.</p>\n<p>Este logro es aún más significativo al considerar que competían con estudiantes de algunas de las universidades más reconocidas de Colombia. El desempeño de David y Tatiana resalta la calidad formativa de la Institución Universitaria Colegios de Colombia (UNICOC) y el alto nivel académico de su programa de Psicologia.</p>\n<p>La Institución Universitaria Colegios de Colombia felicita a David Garzón y Tatiana Hernández por este destacado logro, fruto de su dedicación y esfuerzo. Les deseamos el mayor de los éxitos en esta nueva etapa que inician como pasantes en Nutresa, confiando en que continuarán dejando en alto el nombre de nuestra institución y demostrando su compromiso y excelencia profesional.</p>";

				const frontmatter = {"title":"Estudiantes de Psicología de UNICOC en Pasantías con Nutresa","date":"2024-12-04T00:00:00.000Z","heroImage":"https://www.unicoc.edu.co/img/cargas/Noticias/2024/12/2024-12-5-10779.jpg"};
				const file = "/home/michi/dev/web/unicoc-landing/src/content/news/10781.md";
				const url = undefined;
				function rawContent() {
					return "\nEl 28 de noviembre, tras más de un mes de rigurosas evaluaciones, los estudiantes de octavo semestre de Psicología, David Garzón y Tatiana Hernández, brillaron en el proceso de selección de pasantías con Nutresa. Enfrentándose a cinco aspirantes más y superando cuatro exigentes fases, es asi como lograron obtener los dos cupos, a pesar de que inicialmente solo se contemplaba uno.\n\nEste logro es aún más significativo al considerar que competían con estudiantes de algunas de las universidades más reconocidas de Colombia. El desempeño de David y Tatiana resalta la calidad formativa de la Institución Universitaria Colegios de Colombia (UNICOC) y el alto nivel académico de su programa de Psicologia.\n\nLa Institución Universitaria Colegios de Colombia felicita a David Garzón y Tatiana Hernández por este destacado logro, fruto de su dedicación y esfuerzo. Les deseamos el mayor de los éxitos en esta nueva etapa que inician como pasantes en Nutresa, confiando en que continuarán dejando en alto el nombre de nuestra institución y demostrando su compromiso y excelencia profesional.\n";
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
