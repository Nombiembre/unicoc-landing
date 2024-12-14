export interface Navigationnterface {
  name: string;
  sublinks?: Sublink[];
  items?: Item[];
}

export interface Sublink {
  name: string;
  items: Item[];
}

export interface Item {
  name: string;
  href: string;
  blank?: boolean;
}

const NAVIGATION = [
  {
    name: 'Unicoc',
    sublinks: [
      {
        name: 'Sobre Nosotros',
        items: [
          { name: 'Noticias', href: '/unicoc/noticias' },
          { name: 'Galería', href: '/unicoc/galeria' },
          { name: 'Calendario', href: '/unicoc/calendario' },
          { name: 'Directorio', href: '/unicoc/directorio' },
          { name: 'Historia', href: '/unicoc/historia' },
          { name: 'Principios', href: '/unicoc/principios' },
          { name: 'Gobierno', href: '/unicoc/gobierno' },
          { name: 'Recursos de Marca', href: '/unicoc/recursos' },
          { name: 'Blogs', href: '/unicoc/blogs' },
        ],
      },

      {
        name: 'Documentos y Políticas',
        items: [
          { name: 'PEI', href: '/documentos/pei' },
          { name: 'Reglamentos', href: '/documentos/reglamentos' },
          { name: 'Políticas', href: '/documentos/politicas' },
          { name: 'Resoluciones', href: '/documentos/resoluciones' },
          { name: 'Formatos', href: '/documentos/formatos' },
          { name: 'Documentos ESAL', href: '/documentos/esal' },
        ],
      },
    ],
  },
  {
    name: 'Plataforma',
    items: [
      { name: '📚 Sistema Academico', href: 'https://academico.unicoc.edu.co/', blank: true },
      { name: '💻 Moodle Unicoc', href: 'https://moodle.unicoc.edu.co/login/index.php', blank: true },
      { name: '🗄️ Reserva de casilleros', href: 'https://lockers.unicoc.edu.co/', blank: true },
      { name: '✍️ Actualizar Datos', href: 'https://datos.unicoc.edu.co/', blank: true },
    ],
  },

  {
    name: 'Biblioteca',
    sublinks: [
      {
        name: 'Investigación',
        items: [
          { name: 'Objetivos', href: '/investigacion/objetivos' },
          { name: 'Políticas', href: '/investigacion/politicas' },
          { name: 'Comité Ética', href: '/investigacion/etica' },
          { name: 'Antiplagio', href: '/investigacion/antiplagio' },
          { name: 'Journal', href: '/investigacion/journal' },
          { name: 'Simposios', href: '/investigacion/simposios' },
          { name: 'Proyectos', href: '/investigacion/proyectos' },
        ],
      },
      {
        name: 'Biblioteca',
        items: [
          { name: 'Acerca del SIBU', href: '/biblioteca/sibu' },
          { name: 'Búsqueda', href: '/biblioteca/busqueda' },
          { name: 'Apoyo al Aprendizaje e Investigación', href: '/biblioteca/apoyo' },
        ],
      },
    ],
  },
  {
    name: 'Desarrollo',
    sublinks: [
      {
        name: 'Bienestar',
        items: [
          { name: 'Programas', href: '/desarrollo/bienestar/programas' },
          { name: 'Actividades', href: '/desarrollo/bienestar/actividades' },
          { name: 'Rutas de Atención', href: '/desarrollo/bienestar/rutas-de-atencion' },
        ],
      },
      {
        name: 'Internacionalización',
        items: [
          { name: 'Programas', href: '/desarrollo/internacionalizacion/programas' },
          { name: 'Centro de Idiomas', href: '/desarrollo/internacionalizacion/idiomas' },
        ],
      },
      {
        name: 'Proyección Social',
        items: [
          { name: 'Programas', href: '/desarrollo/proyeccion-social/programas' },
          { name: 'Objetivos', href: '/desarrollo/proyeccion-social/objetivos' },
        ],
      },
      {
        name: 'Educación Continuada',
        items: [
          { name: 'Conferencias', href: '/desarrollo/educacion-continuada/conferencias' },
          { name: 'Diplomados', href: '/desarrollo/educacion-continuada/diplomados' },
          { name: 'Seminarios', href: '/desarrollo/educacion-continuada/seminarios' },
        ],
      },
    ],
  },
  // {
  //   name: 'Clínicas',
  //   items: [
  //     { name: 'Derechos y Deberes', href: '/clinicas/derechos-deberes' },
  //     { name: 'Carpeta Institucional', href: '/clinicas/carpeta' },
  //   ],
  // },
];

export default NAVIGATION;
