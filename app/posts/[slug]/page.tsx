import { posts } from "@/app/source";
import { ReadProgress } from "@/components/read-progess";
import { TableOfContent } from "@/components/table-of-content";
import { CONFIG } from "@/data/config";
import { format } from "date-fns";
import { DocsBody } from "fumadocs-ui/page";
import { Metadata } from "next";

export const generateStaticParams = async () => posts.getPages().map((post) => ({ slug: post.slugs[0] }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
	const post = posts.getPages().find((post) => post.slugs[0] === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return {
		title: post.data.title,
		description: post.data.description,
		authors: [
			{
				name: CONFIG.name,
				url: new URL(CONFIG.url),
			},
		],
		openGraph: {
			title: post.data.title,
			description: post.data.description,
		},
		twitter: {
			title: post.data.title,
			description: post.data.description,
			creator: "@lewe_maiga",
		},
	};
};

export default function Blog({ params }: { params: { slug: string } }) {
	const post = posts.getPage([params.slug]);

	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	const MDXContent = post.data.exports.default;

	return (
		<main className="mx-auto max-w-2xl px-4 pb-24 flex w-full flex-1 flex-col gap-6 pt-10 md:px-6 md:pt-12 relative">
			<ReadProgress />
			<div>
				<h1 className="scroll-m-20 text-4xl font-geist font-extrabold tracking-tight lg:text-5xl">{post.data.title}</h1>
				<div className="flex items-center my-4 gap-2 text-sm text-muted-foreground">
					<time dateTime={format(post.data.date, "LLLL d, yyyy")}>{format(post.data.date, "LLLL d, yyyy")}</time>
				</div>

				<DocsBody>
					<MDXContent />
				</DocsBody>
				<TableOfContent toc={post.data.exports.toc} />
			</div>
		</main>
	);
}
