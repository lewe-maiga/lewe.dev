"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className={cn("px-2", className)}
			aria-label={"Toggle theme"}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
			<MoonIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
		</Button>
	);
}
