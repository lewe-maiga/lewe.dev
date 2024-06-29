import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/components/post-card";

export default function Page() {
	const posts = allPosts;
	return (
		<main className="antialiased relative pt-16 px-4 md:pt-32 max-w-2xl mx-auto space-y-6">
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
	);
}
