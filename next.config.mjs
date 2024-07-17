// @ts-ignore
import createBundleAnalyzer from "@next/bundle-analyzer";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { fileGenerator, remarkDocGen, remarkInstall, typescriptGenerator } from "fumadocs-docgen";
import createMDX from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkUnwrapImages from "remark-unwrap-images";

const withAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "api.microlink.io",
				port: "",
			},
		],
	},
	webpack: (config) => {
		config.module.noParse = [/typescript\/lib\/typescript.js/];

		return config;
	},
};

const withMDX = createMDX({
	buildSearchIndex: {
		filter: (v) => {
			return !v.match(/.+\.model\.mdx/);
		},
	},
	mdxOptions: {
		rehypeCodeOptions: {
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-mocha",
			},
			transformers: [
				...rehypeCodeDefaultOptions.transformers,
				transformerTwoslash(),
				{
					name: "fumadocs:remove-escape",
					code(element) {
						element.children.forEach((line) => {
							if (line.type !== "element") return;

							line.children.forEach((child) => {
								if (child.type !== "element") return;
								const textNode = child.children[0];
								if (!textNode || textNode.type !== "text") return;

								textNode.value = textNode.value.replace(/\[\\!code/g, "[!code");
							});
						});

						return element;
					},
				},
			],
		},
		lastModifiedTime: "git",
		remarkPlugins: [
			remarkMath,
			[remarkInstall, { persist: { id: "package-manager" } }],
			[remarkDocGen, { generators: [typescriptGenerator(), fileGenerator()] }],
			remarkUnwrapImages,
		],
		rehypePlugins: (v) => [rehypeKatex, ...v],
	},
});

export default withAnalyzer(withMDX(config));
