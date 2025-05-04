import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		categories: z.string().optional().default(""),
		tags: z.array(z.union([z.string(), z.number()])).optional().default([]),
		id: z.union([z.string(), z.number()]),
		cover: z.string().optional().default(""),
		recommend: z.boolean().optional().default(false),
		hide: z.boolean().optional().default(false),
		top: z.boolean().optional().default(false),
	}),
});

export const collections = { blog };
