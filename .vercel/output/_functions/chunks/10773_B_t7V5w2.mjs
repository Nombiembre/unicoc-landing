import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ClQdoEDt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Con el propósito de mejorar continuamente nuestras instalaciones y ofrecer un entorno más seguro y cómodo, hemos habilitado un nuevo sistema para que todos los miembros de nuestra comunidad puedan reportar cualquier daño o problema que encuentren en nuestras sedes. Este servicio está disponible tanto en Bogotá como en Cali, y permite a estudiantes, profesores y personal informar de manera directa sobre inconvenientes como fallos en el mobiliario, equipos, instalaciones y más.</p>\n<p>Lo mejor es que, al hacer un reporte, la información llegará inmediatamente a las personas encargadas de gestionarlo, asegurando una respuesta ágil y efectiva. Con esta herramienta, buscamos involucrar a toda la comunidad en la mejora del espacio que compartimos, haciendo más fácil la identificación y solución de problemas.</p>\n<p>¡Tu colaboración es esencial para construir un entorno mejor y más funcional para todos! Para realizar tu reporte, solo debes acceder al siguiente enlace:</p>";

				const frontmatter = {"title":"Mejora en Infraestructura: ¡Tu voz cuenta en todas las sedes!","date":"2024-11-26T00:00:00.000Z","heroImage":"https://unicoc.edu.co/img/cargas/Noticias/2024/11/2024-11-27-10773.jpeg"};
				const file = "/home/michi/dev/web/unicoc-landing/src/content/news/10773.md";
				const url = undefined;
				function rawContent() {
					return "\nCon el propósito de mejorar continuamente nuestras instalaciones y ofrecer un entorno más seguro y cómodo, hemos habilitado un nuevo sistema para que todos los miembros de nuestra comunidad puedan reportar cualquier daño o problema que encuentren en nuestras sedes. Este servicio está disponible tanto en Bogotá como en Cali, y permite a estudiantes, profesores y personal informar de manera directa sobre inconvenientes como fallos en el mobiliario, equipos, instalaciones y más.\n\nLo mejor es que, al hacer un reporte, la información llegará inmediatamente a las personas encargadas de gestionarlo, asegurando una respuesta ágil y efectiva. Con esta herramienta, buscamos involucrar a toda la comunidad en la mejora del espacio que compartimos, haciendo más fácil la identificación y solución de problemas.\n\n¡Tu colaboración es esencial para construir un entorno mejor y más funcional para todos! Para realizar tu reporte, solo debes acceder al siguiente enlace:\n";
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
