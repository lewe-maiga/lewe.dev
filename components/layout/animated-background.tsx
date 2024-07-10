import { Meteors } from "../meteors";
import { SparklesCore } from "../sparkles";

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
		</div>
	);
}
