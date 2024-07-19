import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CONFIG } from "@/data/config";
import BlurFade from "./blur-fade";
import BoxReveal from "./box-reveal";

const BOX_REVEAL_DURATION = 0.25;

export const Header = () => {
	return (
		<header className="max-w-2xl px-4">
			<div className="flex flex-col gap-8">
				<div className="flex items-center gap-4">
					<BoxReveal boxColor="#15c16ea1" duration={BOX_REVEAL_DURATION}>
						<Avatar className="size-24">
							<AvatarImage src={CONFIG.avatarUrl} alt={CONFIG.name} />
							<AvatarFallback>{CONFIG.initials}</AvatarFallback>
						</Avatar>
					</BoxReveal>
					<div className="space-y-1">
						<BoxReveal boxColor="#15c16ea1" duration={BOX_REVEAL_DURATION}>
							<h1 className="scroll-m-20 text-lg md:text-3xl font-extrabold tracking-tight">{CONFIG.fullName}</h1>
						</BoxReveal>
						<BoxReveal boxColor="#15c16ea1" duration={BOX_REVEAL_DURATION}>
							<p className="text-sm text-muted-foreground">{CONFIG.bio}</p>
						</BoxReveal>
						<div>
							<BoxReveal boxColor="#15c16ea1" duration={BOX_REVEAL_DURATION}>
								<div className="gap-2 inline-flex items-center bg-green-100 rounded-full px-3 py-0.5 text-sm font-medium text-green-800 dark:text-green-50 dark:bg-green-400">
									<span className="inline-flex size-2 rounded-full bg-green-400 dark:bg-green-50"></span>
									Available for work
								</div>
							</BoxReveal>
						</div>
					</div>
				</div>
				<section className="flex flex-col gap-4">
					<BlurFade delay={BOX_REVEAL_DURATION * 2}>
						<h3 className="font-medium">About me</h3>
						<p className="text-muted-foreground leading-7">{CONFIG.summary}</p>
					</BlurFade>
				</section>
			</div>
		</header>
	);
};
