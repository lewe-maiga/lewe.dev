import { posts } from "@/app/source";
import { BentoGridThirdDemo } from "@/components/bento-grid";
import BlurFade from "@/components/blur-fade";
import { BorderBeam } from "@/components/border-beam";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { Header } from "@/components/layout/header";
import { PostCard } from "@/components/layout/post-card";
import { Skills } from "@/components/layout/skills";
import { ResumeCard } from "@/components/resume-card";
import { compareDesc } from "date-fns";
import Link from "next/link";

const DATA = {
	work: [
		{
			company: "Studio 3D",
			badges: [],
			location: "Casablanca, MA",
			href: "#",
			title: "Software Engineer",
			logoUrl: "/studio3d.png",
			start: "January 2021",
			end: "April 2021",
			description:
				"Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
		},
		{
			company: "Confledis SAS",
			badges: [],
			location: "Remote",
			href: "#",
			title: "DevOps Engineer",
			logoUrl: "/confledis.jpeg",
			start: "May 2021",
			end: "Oct 2022",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},

		{
			company: "Maroconcept",
			badges: [],
			location: "Remote",
			href: "#",
			logoUrl: "https://api.dicebear.com/9.x/icons/svg?icon=building&backgroundColor=b6e3f4,c0aede,d1d4f9",
			title: "Software Engineer",
			start: "January 2020",
			end: "April 2020",
			description:
				"Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
		},

		{
			company: "Confledis SAS",
			badges: [],
			location: "Remote",
			href: "#",
			title: "Frontend Engineer",
			logoUrl: "/confledis.jpeg",
			start: "January 2018",
			end: "April 2018",
			description:
				"Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
		},
	],
};

const BLUR_FADE_DELAY = 0.04;

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
						<BlurFade delay={BLUR_FADE_DELAY} inView>
							<h3 className="font-medium">Work Experience</h3>
						</BlurFade>
						{DATA.work.map((work, id) => (
							<BlurFade key={work.company} inView delay={BLUR_FADE_DELAY + id * 0.05}>
								<ResumeCard
									key={work.company}
									logoUrl={work.logoUrl}
									altText={work.company}
									title={work.company}
									subtitle={work.title}
									href={work.href}
									badges={work.badges}
									period={`${work.start} - ${work.end ?? "Present"}`}
									description={work.description}
								/>
							</BlurFade>
						))}
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
					<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
						<BlurFade delay={BLUR_FADE_DELAY} inView>
							<div className="space-y-3">
								<h2 className="text-xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
								<p className="mx-auto max-w-[600px] text-muted-foreground">
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
