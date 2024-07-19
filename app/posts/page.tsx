import { AnimatedBackground } from "@/components/animated-background";
import { PostCard } from "@/components/post-card";
import { CONFIG } from "@/data/config";
import { compareDesc } from "date-fns";
import { Metadata } from "next";
import { posts } from "../source";

const title = "Lewe Maiga - Posts";
const description = "My personal blog";
const url = new URL("/posts", CONFIG.url);

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		url,
	},
	twitter: {
		title,
		description,
	},
	alternates: {
		canonical: CONFIG.url,
	},
};

export default function Page() {
	return (
		<>
			<AnimatedBackground />
			<main className="mx-auto max-w-2xl space-y-6  relative px-4 pb-24 flex w-full flex-1 flex-col gap-6 pt-10 md:px-6 md:pt-12">
				<div className="flex flex-col">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Posts</h1>
					<p className="text-muted-foreground text-sm mt-2">These are some of the posts I&apos;ve written.</p>
				</div>
				<ul className="flex flex-col gap-4">
					{posts
						.getPages()
						.sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)))
						.map((post) => (
							<PostCard key={post.url} post={post} />
						))}
				</ul>
			</main>
		</>
	);
}
