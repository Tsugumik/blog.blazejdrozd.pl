import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const article = defineCollection({
    loader: glob({pattern: "**/*.md", base: "src/data/articles"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional()
    })
});

const announcement = defineCollection({
    loader: glob({pattern: "**/*.md", base: "src/data/announcements"}),
    schema: z.object({
        pubDate: z.date(),
    }),
});

export const collections = {article, announcement}