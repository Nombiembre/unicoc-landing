import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El pasado 23 de noviembre, Unicoc celebró un encuentro muy especial para los egresados de dos de sus Colegios: el Colegio Jurídico y de Ciencias Sociales, y el Colegio Administrativo y de Ciencias Económicas. Este evento, organizado por Fiorella Sánchez, Coordinadora de Egresados, reunió a antiguos estudiantes para compartir experiencias, fortalecer lazos y continuar aprendiendo.</p>\n<p>El momento destacado de la jornada fue la conferencia sobre Inteligencia Artificial, dictada por Jim Fadi Haikal Vélez. En su charla, el subdirector de la oficina de internacionalización, ofreció una visión profunda sobre el impacto de la inteligencia artificial en diversas áreas profesionales, destacando sus aplicaciones, oportunidades y desafíos en el mundo actual.</p>\n<p>El encuentro no solo permitió a los egresados actualizarse sobre temas de vanguardia, sino también fortalecer su conexión con la universidad y con colegas de distintas generaciones. Unicoc sigue comprometido con el desarrollo profesional continuo de sus egresados, creando espacios de aprendizaje y colaboración para todos.</p>\n<p>Agradecemos a todos los que hicieron posible este evento y extendemos una cordial invitación para que sigan siendo parte activa de la comunidad Unicoc.</p>";

				const frontmatter = {"title":"Encuentro de Egresados de Unicoc: Una jornada de aprendizaje y networking","date":"2024-11-26T00:00:00.000Z","heroImage":"https://www.unicoc.edu.co/img/cargas/Noticias/2024/11/2024-11-27-10774.png"};
				const file = "/home/michi/dev/web/unicoc-landing/src/content/news/10774.md";
				const url = undefined;
				function rawContent() {
					return "\nEl pasado 23 de noviembre, Unicoc celebró un encuentro muy especial para los egresados de dos de sus Colegios: el Colegio Jurídico y de Ciencias Sociales, y el Colegio Administrativo y de Ciencias Económicas. Este evento, organizado por Fiorella Sánchez, Coordinadora de Egresados, reunió a antiguos estudiantes para compartir experiencias, fortalecer lazos y continuar aprendiendo.\n\nEl momento destacado de la jornada fue la conferencia sobre Inteligencia Artificial, dictada por Jim Fadi Haikal Vélez. En su charla, el subdirector de la oficina de internacionalización, ofreció una visión profunda sobre el impacto de la inteligencia artificial en diversas áreas profesionales, destacando sus aplicaciones, oportunidades y desafíos en el mundo actual.\n\nEl encuentro no solo permitió a los egresados actualizarse sobre temas de vanguardia, sino también fortalecer su conexión con la universidad y con colegas de distintas generaciones. Unicoc sigue comprometido con el desarrollo profesional continuo de sus egresados, creando espacios de aprendizaje y colaboración para todos.\n\nAgradecemos a todos los que hicieron posible este evento y extendemos una cordial invitación para que sigan siendo parte activa de la comunidad Unicoc.\n";
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
