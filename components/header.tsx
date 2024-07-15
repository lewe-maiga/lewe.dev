import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CONFIG } from "@/data/config";
import { Code } from "./code";

export const Header = () => {
	return (
		<header className="max-w-2xl px-4">
			<div className="flex flex-col gap-8">
				<div className="flex items-center gap-4">
					<Avatar className="size-24">
						<AvatarImage src={CONFIG.avatarUrl} alt={CONFIG.name} />
						<AvatarFallback>{CONFIG.initials}</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h1 className="scroll-m-20 text-lg md:text-3xl font-extrabold tracking-tight">{CONFIG.fullname}</h1>
						<p className="text-sm text-muted-foreground">
							<Code>{CONFIG.bio}</Code>
						</p>
						<div>
							<div className="gap-2 inline-flex items-center bg-green-100 rounded-full px-3 py-0.5 text-sm font-medium text-green-800 dark:text-green-50 dark:bg-green-400">
								<span className="inline-flex size-2 rounded-full bg-green-400 dark:bg-green-50"></span>
								Available for work
							</div>
						</div>
					</div>
				</div>
				<section className="flex flex-col gap-4">
					<h3 className="font-medium">About me</h3>
					<p className="text-muted-foreground leading-7">{CONFIG.summary}</p>
				</section>
			</div>
		</header>
	);
};
