# Sergioarweb

Sitio personal construido con [Astro](https://astro.build), Tailwind CSS 4 y daisyUI 5, usando [Bun](https://bun.sh) como gestor de paquetes.

## Comandos

| Comando                 | Acción                                              |
| ----------------------- | --------------------------------------------------- |
| `bun install`           | Instala las dependencias                            |
| `bun run dev`           | Servidor de desarrollo en `http://localhost:4321`   |
| `bun run dev:local-net` | Servidor de desarrollo accesible en la red local    |
| `bun run build`         | Revisa tipos (`astro check`) y genera `dist/`       |
| `bun run preview`       | Sirve localmente el build de producción             |

## Estructura

```
public/                 # Assets estáticos (íconos, imágenes, favicon)
src/
  components/
    home/               # Secciones de la página principal
    shared/             # Navbar y Footer
  interfaces/           # Tipos compartidos (alias ~interfaces/*)
  layouts/Layout.astro  # Layout base (html, head, navbar, footer)
  content/blog/<lang>/  # Artículos del blog en Markdown (es/ y en/)
  i18n/                 # Traducciones (ui.ts) y helpers de rutas por idioma
  pages/                # Rutas en español (/) y en inglés (/en/)
  styles/global.css     # Tailwind + daisyUI
```

## Blog

Cada artículo es un archivo Markdown en `src/content/blog/es/` o `src/content/blog/en/`; la carpeta define el idioma y el nombre del archivo la URL (`es/bienvenida.md` → `/blog/bienvenida/`, `en/welcome.md` → `/en/blog/welcome/`).

```md
---
title: Título del artículo
description: Resumen de hasta 160 caracteres (se usa en SEO y en las tarjetas).
pubDate: 2026-10-26
updatedDate: 2026-11-02          # opcional
cover: ../../../assets/images/portada.avif   # opcional, se optimiza con <Image>
coverAlt: Descripción de la portada
tags: [astro, backend]
draft: false                     # true = solo visible en `bun run dev`
translationKey: mi-articulo      # mismo valor en ambas versiones para enlazar la traducción
---
```
