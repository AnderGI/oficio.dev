import { defineCollection, z } from "astro:content";

const quotes = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(["en", "es"]),
    position: z.enum(["l", "r"]),
  }),
});

export const collections = {
  quotes
};
