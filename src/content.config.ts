import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tags: z.array(z.string()).min(1),
    readingTime: z.string(),
    cover: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  journal,
};
