---
title: Bienvenido a mi blog
description: Arranco este espacio para compartir lo que aprendo construyendo software, del frontend al backend.
pubDate: 2026-10-26
cover: ../../../assets/images/yo1.avif
coverAlt: Sergio Arce sonriendo
tags: [astro, desarrollo web]
translationKey: welcome
---

¡Hola! Soy Sergio y este es mi blog. Aquí voy a escribir sobre lo que aprendo en mi día a día como desarrollador Fullstack.

## ¿De qué voy a escribir?

- **Frontend**: Astro, Angular, SolidJS y cómo hacer sitios rápidos y accesibles.
- **Backend**: NestJS, Spring Boot, Encore y bases de datos como PostgreSQL.
- **Infraestructura**: Docker, Cloudflare y automatización con n8n.

## Un ejemplo de código

Este mismo sitio está hecho con Astro. Así se ve una colección de contenido:

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
});
```

> Escribir es la mejor forma de aprender dos veces.

¡Gracias por leer!
