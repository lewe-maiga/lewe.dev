import { allPosts } from "@/.contentlayer/generated";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { PostCard } from "@/components/layout/post-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Lewe Maiga - Posts",
	description: "My personal blog",
};

export default function Page() {
	const posts = allPosts;
	return (
		<>
			<AnimatedBackground />
			<main className="mx-auto max-w-2xl px-4 space-y-6  my-10 md:my-16 relative">
				<Button asChild variant={"link"} className="gap-2 pl-0 text-muted-foreground">
					<Link href="/">
						<ArrowLeft className="h-4 w-4" />
						Get back to home
					</Link>
				</Button>
				<div className="flex flex-col">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Posts</h1>
					<p className="text-muted-foreground text-sm mt-2">These are some of the posts I&apos;ve written.</p>
				</div>
				<ul className="flex flex-col gap-4">
					{posts.map((post) => (
						<PostCard key={post._raw.flattenedPath} post={post} />
					))}
				</ul>
			</main>
		</>
	);
}
