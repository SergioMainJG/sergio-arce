export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export type Localized = Record<Lang, string>;

export const ui = {
  es: {
    'blog.title': 'Blog | Sergio Arce',
    'blog.heading': 'Blog',
    'blog.description': 'Artículos de Sergio Arce sobre desarrollo web, backend y las herramientas que uso día a día.',
    'blog.empty': 'Todavía no hay artículos publicados. ¡Vuelve pronto!',
    'blog.minRead': 'min de lectura',
    'blog.updated': 'Actualizado el',
    'blog.back': 'Volver al blog',
    'blog.readMore': 'Leer artículo',
    'blog.tags': 'Etiquetas',
    'blog.translation': 'Este artículo también está disponible en inglés',
    'blog.draft': 'Borrador',
    'cta.empty': 'Pronto publicaré mi primer artículo.',
    'cta.viewAll': 'Ver todos los artículos',
    'site.locale': 'es_MX',
    'site.skip': 'Saltar al contenido principal',
    'site.jobTitle': 'Desarrollador Fullstack',
    'story.description': 'La historia de Sergio Elias Arce Roldán, desarrollador Fullstack.',
    'notFound.title': 'Página no encontrada | Sergio Arce',
    'notFound.heading': 'Página no encontrada',
    'notFound.message': 'La página que buscas no existe o aún está en construcción.',
    'notFound.back': 'Volver al inicio',
    'nav.home': 'Inicio',
    'nav.main': 'Navegación principal',
    'footer.github': 'GitHub de Sergio Arce',
    'footer.instagram': 'Instagram de Sergio Arce',
    'footer.x': 'X (Twitter) de Sergio Arce',
    'common.newTab': '(se abre en una pestaña nueva)',
    'carousel.label': 'Carrusel de películas y series',
    'carousel.prev': 'Anterior',
    'carousel.next': 'Siguiente',
    'carousel.slide': 'Diapositiva',
    'carousel.of': 'de',
    'site.title': 'Sergio Arce',
    'site.description': 'Portafolio personal de Sergio Elias Arce Roldán, desarrollador Fullstack.',
    'story.title': 'Historia | Sergio Arce',

    'nav.story': 'Historia',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
    'nav.menu': 'Abrir menú',
    'nav.theme': 'Modo oscuro',
    'nav.language': 'Cambiar idioma',

    'footer.socials': 'Mis redes',

    'presentation.badge': '¿Quien soy?',
    'presentation.greeting': 'Saludos a todos',
    'presentation.name': 'Soy Sergio Elias Arce Roldán',
    'presentation.intro': 'Soy Fullstack developer con experiencia de desarrollo de proyectos web y escritorio.',
    'presentation.passion':
      'Mi pasión es estudiar y poner en practica mis conocimientos, así como liderar equipos para un desarrollo eficaz, pacifíco, y eficiente.',
    'presentation.img.salem': "Yo con el gato 'Salem', un gato vecino.",
    'presentation.img.me1': 'Yo 1',
    'presentation.img.me2': 'Yo 2',
    'presentation.support.title': 'Soporte',
    'presentation.support.description':
      'Solución a emergencias como perdida de credenciales de la BD, perdida de certificados, solucionar breaking changes; mantenimiento a la plataforma, extensión de servicio para uso interno de la empresa',
    'presentation.student.title': 'Estudiante',
    'presentation.student.description':
      'Estudiante de la mejor escuela de nivel medio-superior de México, ganador de becas proporcionadas y certificadas de conclusión y de conocimiento por parte de Oracle&Alura. Estudiante actual de Jala University',

    'technologies.title': 'Las tecnologías en las que me especializo son',
    'technologies.languages': 'lenguajes',
    'technologies.frameworks': 'frameworks',
    'technologies.databases': 'bases de datos',
    'technologies.platforms': 'plataformas',

    'cta.title': 'Explora mi blog',
    'cta.contact': 'contáctame aquí...',

    'hobbies.title': 'Mis hobbies personales',
    'hobbies.music': 'Música',
    'hobbies.podcasts': 'Podcasts',
    'hobbies.sports': 'Deportes',
    'hobbies.movies': 'Películas y Series',
    'hobbies.watch': 'Ver ahora',
    'hobbies.cover': 'Portada',

    'sports.title': 'Artes Marciales Mixtas',
    'sports.school.before': 'La escuela',
    'sports.school.after':
      'se especializa en enseñar distintas artes marciales, tales como Box, Kick Boxing, Wrestling (o lucha), Muay thai, etc.',
    'sports.experience':
      'En esta escuela he tenido la fortuna de aprender pelea. Aunque no tengo la necesidad de pelear o buscar conflicto fisico, si que ayuda mucho para controlar el estrés, así como sostener mi salud como desarrollador. Los profesores son bastante atentos, didacticos, pero si se exige disciplina y motivación para aprender.',
  },
  en: {
    'blog.title': 'Blog | Sergio Arce',
    'blog.heading': 'Blog',
    'blog.description': "Sergio Arce's articles about web development, backend and the tools I use every day.",
    'blog.empty': 'There are no published articles yet. Come back soon!',
    'blog.minRead': 'min read',
    'blog.updated': 'Updated on',
    'blog.back': 'Back to the blog',
    'blog.readMore': 'Read article',
    'blog.tags': 'Tags',
    'blog.translation': 'This article is also available in Spanish',
    'blog.draft': 'Draft',
    'cta.empty': 'My first article is coming soon.',
    'cta.viewAll': 'See all articles',
    'site.locale': 'en_US',
    'site.skip': 'Skip to main content',
    'site.jobTitle': 'Fullstack Developer',
    'story.description': 'The story of Sergio Elias Arce Roldán, Fullstack developer.',
    'notFound.title': 'Page not found | Sergio Arce',
    'notFound.heading': 'Page not found',
    'notFound.message': "The page you're looking for doesn't exist or is still under construction.",
    'notFound.back': 'Back to home',
    'nav.home': 'Home',
    'nav.main': 'Main navigation',
    'footer.github': "Sergio Arce's GitHub",
    'footer.instagram': "Sergio Arce's Instagram",
    'footer.x': "Sergio Arce's X (Twitter)",
    'common.newTab': '(opens in a new tab)',
    'carousel.label': 'Movies and shows carousel',
    'carousel.prev': 'Previous',
    'carousel.next': 'Next',
    'carousel.slide': 'Slide',
    'carousel.of': 'of',
    'site.title': 'Sergio Arce',
    'site.description': 'Personal portfolio of Sergio Elias Arce Roldán, Fullstack developer.',
    'story.title': 'Story | Sergio Arce',

    'nav.story': 'Story',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.menu': 'Open menu',
    'nav.theme': 'Dark mode',
    'nav.language': 'Change language',

    'footer.socials': 'My Socials',

    'presentation.badge': 'Who am I?',
    'presentation.greeting': 'Hello everyone',
    'presentation.name': "I'm Sergio Elias Arce Roldán",
    'presentation.intro': "I'm a Fullstack developer with experience building web and desktop projects.",
    'presentation.passion':
      'My passion is studying and putting my knowledge into practice, as well as leading teams toward effective, peaceful, and efficient development.',
    'presentation.img.salem': "Me with 'Salem', a neighbor's cat.",
    'presentation.img.me1': 'Me 1',
    'presentation.img.me2': 'Me 2',
    'presentation.support.title': 'Support',
    'presentation.support.description':
      "Handling emergencies such as lost database credentials, lost certificates, and fixing breaking changes; platform maintenance, and extending services for the company's internal use",
    'presentation.student.title': 'Student',
    'presentation.student.description':
      'Student at the best high school in Mexico, scholarship winner with completion and knowledge certifications from Oracle & Alura. Currently a student at Jala University',

    'technologies.title': 'The technologies I specialize in are',
    'technologies.languages': 'languages',
    'technologies.frameworks': 'frameworks',
    'technologies.databases': 'databases',
    'technologies.platforms': 'platforms',

    'cta.title': 'Explore my blog',
    'cta.contact': 'contact me here...',

    'hobbies.title': 'My personal hobbies',
    'hobbies.music': 'Music',
    'hobbies.podcasts': 'Podcasts',
    'hobbies.sports': 'Sports',
    'hobbies.movies': 'Movies & Shows',
    'hobbies.watch': 'Watch now',
    'hobbies.cover': 'Cover',

    'sports.title': 'Mixed Martial Arts',
    'sports.school.before': 'The',
    'sports.school.after':
      'school specializes in teaching different martial arts, such as Boxing, Kickboxing, Wrestling, Muay Thai, etc.',
    'sports.experience':
      "At this school I've been fortunate enough to learn how to fight. Although I have no need to fight or look for physical conflict, it helps a lot to manage stress and to stay healthy as a developer. The coaches are very attentive and great teachers, but discipline and motivation to learn are expected.",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
