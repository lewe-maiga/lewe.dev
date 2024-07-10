import { allPosts } from "@/.contentlayer/generated";
import { CopyButton } from "@/components/copy-button";
import { LinkPreview } from "@/components/link-preview";
import { CardDemo } from "@/components/mdx/card-demo";
import { GradientBeam } from "@/components/mdx/gradiant-beam";
import { ReadProgress } from "@/components/mdx/read-progess";
import { TableOfContent } from "@/components/mdx/table-of-content";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { MDXComponents } from "mdx/types";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import readingDuration from "reading-duration";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return {
		title: post.title,
		description: post.description,
		openGraph: { title: post.title, description: post.description, url: `https://lewe.dev/posts/${post._raw.flattenedPath}` },
		twitter: { title: post.title, description: post.description, creator: "@lewe_maiga" },
	};
};
interface CustomProps extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
	"data-language"?: string;
	raw?: string;
}

const mdxComponents: MDXComponents = {
	a: ({ href, children }) => (
		<LinkPreview
			className="text-primary inline-block relative w-fit after:block after:content-[''] after:absolute after:h-px duration-100 after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-1"
			url={href as string}
		>
			{children}
		</LinkPreview>
	),
	CardDemo,
	GradientBeam,

	Image: (props) => (
		<AspectRatio ratio={16 / 9} className="bg-muted rounded overflow-hidden">
			<NextImage className="object-cover" fill {...props} />
		</AspectRatio>
	),

	p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground" {...props} />,
	h1: (props) => <h1 className="scroll-m-20 font-geist text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
	h2: (props) => <h2 className="scroll-m-20 font-geist text-2xl mt-8 mb-4 font-bold tracking-tight first:mt-0 " {...props} />,
	h3: (props) => <h3 className="scroll-m-20 font-geist text-xl font-semibold tracking-tight" {...props} />,
	h4: (props) => <h4 className="scroll-m-20 font-geist text-lgl font-semibold tracking-tight" {...props} />,
	blockquote: (props) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
	ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
	pre: ({ children, raw, ...props }: CustomProps) => {
		const lang = props["data-language"];
		return (
			<pre {...props} className="mt-6 overflow-x-auto rounded-lg space-y-1 px-2">
				<div className={"pl-4 flex items-center justify-between"}>
					<span className="text-sm bg-white/5 font-geist font-medium ring-input rounded px-2  text-gray-50">{lang}</span>
					<CopyButton text={raw || ""} />
				</div>
				{children}
			</pre>
		);
	},
	Card,
};

export default function Page({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<>
			<ReadProgress />
			<main className="mx-auto max-w-2xl my-10 md:my-16 px-4 space-y-6  relative">
				<Button asChild variant={"link"} className="gap-2 pl-0 text-muted-foreground">
					<Link href="/">
						<ArrowLeft className="h-4 w-4" />
						All Posts
					</Link>
				</Button>
				<div>
					<h1 className="scroll-m-20 text-4xl font-geist font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
					<div className="flex items-center my-4 gap-2 text-sm text-muted-foreground">
						<span>{readingDuration(post.body.raw, { emoji: false })}</span>
						<span>·</span>
						<time dateTime={post.date}>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
					</div>

					<article className="prose dark:prose-invert js-toc-content ">
						<MDXContent components={mdxComponents} />
					</article>
					<TableOfContent />
				</div>
			</main>
		</>
	);
}
