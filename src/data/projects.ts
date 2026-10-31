import type { Project } from '~interfaces/project';

export const github = 'https://github.com/SergioMainJG';

export const projects: Project[] = [
  {
    name: 'OrbitalJS',
    description: {
      es: 'Simulador de órbitas planetarias con efemérides reales de la NASA JPL. Motor de integración numérica Runge-Kutta de cuarto orden, visualización en Canvas 2D y panel de energía con Chart.js.',
      en: 'Planetary orbit simulator using real NASA JPL ephemerides. Fourth-order Runge-Kutta numerical integration engine, Canvas 2D rendering and an energy panel built with Chart.js.',
    },
    stack: ['TypeScript', 'SolidJS', 'Vite', 'Chart.js', 'Cloudflare'],
    repos: [{ label: 'OrbitalJS', href: `${github}/OrbitalJS` }],
    demo: 'https://orbitaljs.sergioar.dev',
    team: true,
  },
  {
    name: 'NestJS REST API Template',
    description: {
      es: 'Plantilla de API REST lista para producción: NestJS sobre Fastify con Bun, validación con ArkType, PostgreSQL con Drizzle ORM, caché en dos niveles con Redis y autenticación JWT.',
      en: 'Production-ready REST API template: NestJS on Fastify running on Bun, ArkType validation, PostgreSQL with Drizzle ORM, two-level Redis caching and JWT authentication.',
    },
    stack: ['NestJS', 'Fastify', 'Bun', 'PostgreSQL', 'Drizzle', 'Redis'],
    repos: [{ label: 'template-nest-rest-api', href: `${github}/template-nest-rest-api` }],
  },
  {
    name: 'Chat RSA',
    description: {
      es: 'Aplicación de chat con encriptación RSA. El backend en Deno incluye registro, login, contraseñas con Argon2id y JWT; el frontend está hecho con Vue 3.',
      en: 'Chat application with RSA encryption. The Deno backend handles sign-up, login, Argon2id password hashing and JWT; the frontend is built with Vue 3.',
    },
    stack: ['Deno', 'TypeScript', 'Vue', 'JWT'],
    repos: [
      { label: 'backend', href: `${github}/chatrsa-backend` },
      { label: 'frontend', href: `${github}/chatrsa-frontend` },
    ],
  },
  {
    name: 'Todo App',
    description: {
      es: 'Aplicación de tareas con autenticación de usuarios, construida con NestJS y PostgreSQL, ejecutada con Bun y contenerizada en pods con Podman.',
      en: 'Todo app with user authentication, built with NestJS and PostgreSQL, running on Bun and containerized in pods with Podman.',
    },
    stack: ['NestJS', 'PostgreSQL', 'Bun', 'Podman'],
    repos: [{ label: 'todo-app-nest', href: `${github}/todo-app-nest` }],
  },
  {
    name: 'March of the Legion',
    description: {
      es: 'Simulador de estrategia en consola. Despliega una legión en un campo de batalla, ordena las tropas por alcance de ataque con el algoritmo elegido y permite comandarlas de forma interactiva.',
      en: 'Console strategy simulator. Deploys a legion on a battlefield, sorts the troops by attack range with the chosen algorithm and lets you command them interactively.',
    },
    stack: ['Java 17'],
    repos: [{ label: 'legion', href: `${github}/legion` }],
  },
  {
    name: 'TutoEasy',
    description: {
      es: 'Aplicación de línea de comandos para gestionar asesorías entre estudiantes, tutores y administradores. Proyecto capstone de Desarrollo de Software.',
      en: 'Command-line application to manage tutoring sessions between students, tutors and admins. Capstone project for Software Development.',
    },
    stack: ['Java', 'Picocli', 'Hibernate', 'MySQL', 'JUnit'],
    repos: [{ label: 'tutoeasy-cli', href: `${github}/tutoeasy-cli` }],
    team: true,
  },
  {
    name: 'PlantMatica',
    description: {
      es: 'Plataforma web sobre plantas con cuentas de usuario, fichas, comentarios y paginación. Proyecto de equipo del CECyT 9.',
      en: 'Web platform about plants with user accounts, plant records, comments and pagination. Team project from CECyT 9.',
    },
    stack: ['JavaScript', 'Node.js'],
    repos: [
      { label: 'backend', href: `${github}/plantmatica-backend` },
      { label: 'frontend', href: `${github}/plantmatica-frontend` },
    ],
    team: true,
  },
  {
    name: 'Infrashield Systems',
    description: {
      es: 'Tienda en línea en etapa temprana, con componentes standalone de Angular, Tailwind CSS y daisyUI.',
      en: 'Early-stage online storefront using Angular standalone components, Tailwind CSS and daisyUI.',
    },
    stack: ['Angular', 'Tailwind CSS', 'daisyUI'],
    repos: [{ label: 'infrashields-systems', href: `${github}/infrashields-systems` }],
  },
];
