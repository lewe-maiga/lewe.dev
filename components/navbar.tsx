import Link from "next/link";
import { LogoIcon } from "./icons/logo";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
	return (
		<div className="mx-auto py-4 px-4 sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="flex items-center justify-between max-w-2xl mx-auto">
				<Link href={"/"} aria-label="Home">
					<LogoIcon className="h-4 w-12" />
				</Link>

				<div className="flex gap-4 items-center ">
					<Link
						className="text-muted-foreground relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-foreground duration-100 after:bg-foreground after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
						href={"#"}
					>
						about
					</Link>
					<Link
						className="text-muted-foreground relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-foreground duration-100 after:bg-foreground after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
						href={"/posts"}
					>
						posts
					</Link>
					<ThemeSwitcher />
				</div>
			</nav>
		</div>
	);
}
