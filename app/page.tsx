import { posts } from "@/app/source";
import { AnimatedBackground } from "@/components/animated-background";
import { BentoGridThirdDemo } from "@/components/bento-grid";
import BlurFade from "@/components/blur-fade";
import { BorderBeam } from "@/components/border-beam";
import { Header } from "@/components/header";
import { PostCard } from "@/components/post-card";
import { Skills } from "@/components/skills";
import { WorkCard } from "@/components/work-card";
import { CONFIG } from "@/data/config";
import { compareDesc } from "date-fns";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.1;

export default function Home() {
	const sortedPost = posts
		.getPages()
		.sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)))
		.slice(0, 3);
	return (
		<>
			<AnimatedBackground />

			<main className="flex flex-col items-center gap-16 my-16 md:my-32 relative">
				<Header />
				<section id="work" className="max-w-2xl px-4">
					<div className="flex min-h-0 flex-col gap-4">
						<BlurFade delay={BLUR_FADE_DELAY + 0.05}>
							<h3 className="font-medium">Work Experience</h3>
						</BlurFade>
						<BlurFade delay={BLUR_FADE_DELAY + 0.05}>
							<ul className="mb-4 ml-4 divide-y divide-dashed border-l">
								{CONFIG.work.map((work, id) => (
									// <BlurFade key={work.company} inView delay={BLUR_FADE_DELAY + id * 0.005}>
									// 	<ResumeCard
									// 		key={work.company}
									// 		logoUrl={work.logoUrl}
									// 		altText={work.company}
									// 		title={work.company}
									// 		subtitle={work.title}
									// 		href={work.href}
									// 		badges={work.badges}
									// 		period={`${work.start} - ${work.end ?? "Present"}`}
									// 		description={work.description}
									// 	/>
									// </BlurFade>
									<BlurFade key={work.title + work.start} delay={BLUR_FADE_DELAY + id * 0.05}>
										<WorkCard
											title={work.title}
											description={work.description}
											location={work.location}
											dates={`${work.start} - ${work.end ?? "Present"}`}
											image={work.logoUrl}
											// links={work.links}
										/>
									</BlurFade>
								))}
							</ul>
						</BlurFade>
					</div>
				</section>

				<Skills />

				<section className="max-w-4xl px-0 md:px-4 overflow-hidden">
					<div className="bg-muted p-6 md:rounded-2xl relative">
						<BorderBeam />
						<BlurFade delay={BLUR_FADE_DELAY * 4}>
							<h3 className="font-medium">Side Project</h3>
							<p className="text-sm text-muted-foreground">Discover side projects that I&apos;ve been working on.</p>
						</BlurFade>
						<BentoGridThirdDemo />
					</div>
				</section>

				<section className="max-w-2xl px-4">
					<div className="flex flex-col gap-4">
						<h3 className="font-medium text-lg">Explore my posts</h3>
						<p className="text-muted-foreground text-sm mt-2">These are some of the posts I&apos;ve written.</p>
						<ul className="space-y-6 mt-2">
							{sortedPost.map((post) => (
								<PostCard key={post.url} post={post} />
							))}
						</ul>
					</div>
				</section>

				<section id="contact">
					<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
						<BlurFade delay={BLUR_FADE_DELAY}>
							<div className="space-y-3">
								<h2 className="text-xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
								<p className="mx-auto max-w-2xl text-sm text-muted-foreground">
									Want to chat or ask a question? Feel free to send me a private message on my social networks, including{" "}
									<Link className="text-primary underline-offset-4 hover:underline" href={"https://x.com/lewe_maiga"}>
										X
									</Link>{" "}
									and{" "}
									<Link className="text-primary underline-offset-4 hover:underline" href={"https://www.linkedin.com/in/allewe-badra-aliyou-maiga/"}>
										LinkedIn
									</Link>
									.
								</p>
							</div>
						</BlurFade>
					</div>
				</section>

				<footer>
					<p className="text-sm text-muted-foreground">Copyright &copy; 2024 - Allewe Badra Aliyou MAIGA</p>
				</footer>
				<div className="absolute inset-x-0 -top-40  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[40rem]" aria-hidden="true">
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
