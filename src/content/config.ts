import { defineCollection, z } from "astro:content";

const quotes = defineCollection({
  schema: z.object({
    lang: z.enum(["en", "es"]),
  }),
});

export const collections = {
  quotes
};
