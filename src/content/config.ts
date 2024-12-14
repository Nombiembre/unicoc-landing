import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    heroImage: z.string().url(),
  }),
});

export const collections = { news };
