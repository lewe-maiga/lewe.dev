import { map } from "@/.map";
import { loader } from "fumadocs-core/source";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { z } from "zod";
export const posts = loader({
	baseUrl: "/posts",
	rootDir: "posts",
	source: createMDXSource(map, {
		schema: {
			frontmatter: defaultSchemas.frontmatter.extend({
				date: z.string({ required_error: "Date is required" }).transform((date) => new Date(date)),
			}),
		},
	}),
});
