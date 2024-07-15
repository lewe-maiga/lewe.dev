import { Meteors } from "./meteors";
import { SparklesCore } from "./sparkles";

export function AnimatedBackground() {
	return (
		<div className="w-full fixed inset-0 h-screen -z-10">
			<div className="absolute h-2/3 top-0 inset-0 left-1/4">
				<Meteors number={4} />
			</div>
			<SparklesCore
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.6}
				maxSize={1.4}
				particleDensity={50}
				className="w-full h-full"
				particleColor="#FFFFFF"
			/>
			<div className="absolute inset-0 dark:bg-grid-white/[0.06] bg-grid-black/[0.04] [mask-image:linear-gradient(to_bottom,white_5%,transparent_70%)] pointer-events-none select-none"></div>
		</div>
	);
}
