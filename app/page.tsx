import { allPosts } from "@/.contentlayer/generated";
import { AnimatedBackground } from "@/components/animated-background";
import { BentoGridThirdDemo } from "@/components/bento-grid";
import { BorderBeam } from "@/components/border-beam";
import { Header } from "@/components/header";
import { PostCard } from "@/components/post-card";
import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function Home() {
	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);
	return (
		<>
			<AnimatedBackground />

			<main className="flex flex-col items-center gap-16  antialiased relative pt-10 md:pt-16  ">
				<Header />

				<Skills />

				<section className="max-w-4xl px-0 md:px-4 overflow-hidden">
					<div className="bg-muted p-6 md:rounded-2xl relative">
						<BorderBeam />
						<h3 className="font-medium ">Side Project</h3>
						<p className="text-sm text-muted-foreground">Discover side projects that I&apos;ve been working on.</p>
						<BentoGridThirdDemo />
					</div>
				</section>

				<section className="max-w-2xl px-4">
					<div className="flex flex-col gap-4">
						<h3 className="font-medium">Explore my posts</h3>
						<p className="text-muted-foreground text-sm mt-2">These are some of the posts I&apos;ve written.</p>
						<ul className="space-y-6 mt-2">
							{posts.map((post) => (
								<PostCard key={post._raw.flattenedPath} post={post} />
							))}
						</ul>
					</div>
				</section>

				{/* Contact me */}

				<section className="max-w-2xl px-4 flex flex-col items-center justify-center gap-2">
					<p className="text-muted-foreground text-sm">A good old mailto, you never know it might come in handy 😅</p>
					<Button asChild>
						<Link href="mailto:badraliyoumaiga199@gmail.com">Let&apos;s talk</Link>
					</Button>
				</section>

				<footer>
					<p className="text-sm text-muted-foreground">Copyright &copy; 2024 - Allewe Badra Aliyou MAIGA</p>
				</footer>
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr dark:from-cyan-400 from-cyan-700  dark:to-teal-400 to-teal-700  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					></div>
				</div>

				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr dark:from-cyan-400 from-cyan-700  dark:to-teal-400 to-teal-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					></div>
				</div>
			</main>
		</>
	);
}
