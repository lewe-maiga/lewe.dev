import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

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

						console.log(codeEl.children?.[0].value);

						node.raw = codeEl.children?.[0].value;
					}
				});
			},
			rehypeSlug,

			[
				//@ts-ignore
				rehypePrettyCode,
				{
					theme: "one-dark-pro",
					onVisitLine(node: LineElement): void {
						if (node.children.length === 0) {
							// if code block has a empty line, add a space instead of keeping it blank
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node: LineElement) {
						node.properties.className = ["line--highlighted"];
					},
					onVisitHighlightedWord(node: LineElement) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
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
		],
	},
});
