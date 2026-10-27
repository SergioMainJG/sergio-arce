import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts live in `src/content/blog/<lang>/<slug>.md`; the folder sets the language.
const blog = defineCollection({
  loader: glob({ pattern: '{es,en}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Same value in every language version of a post, to link its translations.
      translationKey: z.string().optional(),
    }),
});

export const collections = { blog };
