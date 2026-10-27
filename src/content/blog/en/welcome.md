---
title: Welcome to my blog
description: I'm starting this space to share what I learn while building software, from frontend to backend.
pubDate: 2026-10-26
cover: ../../../assets/images/yo1.avif
coverAlt: Sergio Arce smiling
tags: [astro, web development]
translationKey: welcome
---

Hi! I'm Sergio and this is my blog. Here I'll write about what I learn day to day as a Fullstack developer.

## What will I write about?

- **Frontend**: Astro, Angular, SolidJS and how to build fast, accessible sites.
- **Backend**: NestJS, Spring Boot, Encore and databases like PostgreSQL.
- **Infrastructure**: Docker, Cloudflare and automation with n8n.

## A code example

This very site is built with Astro. This is what a content collection looks like:

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
});
```

> Writing is the best way to learn twice.

Thanks for reading!
