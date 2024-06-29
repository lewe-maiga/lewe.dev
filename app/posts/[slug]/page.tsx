import { allPosts } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const mdxComponents: MDXComponents = {
	a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
	Image: (props) => <NextImage className="rounded-lg" {...props} />,
	p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground" {...props} />,
	h1: (props) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
	h2: (props) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />,
	h3: (props) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
	h4: (props) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
	blockquote: (props) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
	ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
	pre: (props) => <pre className="mt-6 overflow-x-auto rounded-lg px-4" {...props} />,
};

export default function Page({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<main className="mx-auto max-w-2xl pt-10 px-4 space-y-6 ">
			<Button asChild variant={"link"} className="gap-2 pl-0 text-muted-foreground">
				<Link href="/posts">
					<ArrowLeft className="h-4 w-4" />
					Get back all posts
				</Link>
			</Button>
			<div>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
				<time className="my-4 block text-sm text-muted-foreground" dateTime={post.date}>
					{format(parseISO(post.date), "LLLL d, yyyy")}
				</time>
				<article className="prose dark:prose-invert">
					<MDXContent components={mdxComponents} />
				</article>
			</div>
		</main>
	);
}
