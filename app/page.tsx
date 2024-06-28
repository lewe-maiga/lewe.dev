import { BentoGridThirdDemo } from "@/components/bento-grid";
import { BorderBeam } from "@/components/border-beam";
import { Header } from "@/components/header";
import Meteors from "@/components/meteors";
import { PostCard } from "@/components/post-card";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<>
			<div className="fixed h-2/3 top-0 inset-0 overflow-hidden -z-10">
				<Meteors />
			</div>
			<main className=" flex flex-col items-center gap-16  antialiased relative pt-16 md:pt-32  ">
				<Header />

				<Skills />

				<section className="max-w-4xl px-0 md:px-4 overflow-hidden">
					<div className="bg-accent p-6 md:rounded-2xl relative">
						<BorderBeam />
						<h3 className="font-medium ">Side Project</h3>
						<p className="text-sm text-muted-foreground">Discover side projects that I&apos;ve been working on.</p>
						<BentoGridThirdDemo />
					</div>
				</section>
				<PostCard />
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
