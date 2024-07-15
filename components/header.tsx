import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code } from "./code";

export const Header = () => {
	return (
		<header className="max-w-2xl px-4">
			<div className="flex flex-col gap-8">
				<div className="flex items-center gap-4">
					<Avatar className="size-24">
						<AvatarImage src="/profile.jpg" alt="Profile picture" />
						<AvatarFallback>LM</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h1 className="scroll-m-20 text-lg md:text-3xl font-extrabold tracking-tight">Allewe Badra Aliyou MAIGA</h1>
						<p className="text-sm text-muted-foreground">Software Engineer and DevOps</p>
						<div>
							<Badge className="gap-2 inline-flex text-green-700 bg-green-100">
								<span className="inline-flex size-2 rounded-full bg-green-500"></span>
								Available for work
							</Badge>
						</div>
					</div>
				</div>
				<section className="flex flex-col gap-4">
					<h3 className="font-medium">About me</h3>
					<p className="text-muted-foreground leading-7">
						I&apos;m a young fullstack developer with a passion for DevOps, constantly immersed in the captivating challenges of programming, Cloud
						environments and system administration. Dynamic and avid for new technologies, I&apos;m constantly pushing my limits to design innovative
						solutions.
					</p>
					<p className="text-muted-foreground leading-7">
						Currently an intern at DigiImmo as a Fullstack engineer, I&apos;m developing an innovative ERP for the real estate industry using
						cutting-edge technologies such as <Code>react</Code>, <Code>zustand</Code>, <Code>next</Code>, <Code>@mui/material</Code>,<Code>swr</Code>
						, <Code>laravel</Code>, <Code>mysql</Code>, and <Code>docker</Code>.
					</p>
				</section>
			</div>
		</header>
	);
};
