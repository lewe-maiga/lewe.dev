import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import rehypeMetaAttributes from "./lib/rehype-meta-attributes";
import { rehypePrettyCodeOptions } from "./lib/rehype-pretty-code";
const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		date: {
			type: "date",
			description: "The date of the post",
			required: true,
		},
		description: {
			type: "string",
			description: "The description of the post",
			required: true,
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			() => (tree) => {
				visit(tree, (node) => {
					if (node?.type === "element" && node?.tagName === "pre") {
						const [codeEl] = node.children;

						if (codeEl.tagName !== "code") return;

						node.raw = codeEl.children?.[0].value;
					}
				});
			},
			rehypeSlug,

			// @ts-ignore
			[rehypePrettyCode, rehypePrettyCodeOptions],
			// [rehypePrettyCodeClasses],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor"],
					},
				},
			],
			() => (tree) => {
				visit(tree, (node) => {
					if (node?.type === "element" && node?.tagName === "figure") {
						if (!("data-rehype-pretty-code-figure" in node.properties)) {
							return;
						}

						for (const child of node.children) {
							if (child.tagName === "pre") {
								child.properties["raw"] = node.raw;
							}
						}
					}
				});
			},
			rehypeMetaAttributes,
		],
	},
});
