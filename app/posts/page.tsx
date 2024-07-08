import { allPosts } from "@/.contentlayer/generated";
import { AnimatedBackground } from "@/components/animated-background";
import { PostCard } from "@/components/post-card";

export const metadata = {
	title: "Lewe Maiga - Posts",
	description: "My personal blog",
};

export default function Page() {
	const posts = allPosts;
	return (
		<>
			<AnimatedBackground />
			<main className="mx-auto max-w-2xl pt-10 px-4 space-y-6 ">
				<div className="flex flex-col gap-4">
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
