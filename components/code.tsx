import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function Code(props: PropsWithChildren<{ className?: string }>) {
	return <code className={cn("rounded px-1.5 py-0.5 text-sm bg-secondary text-secondary-foreground", props.className)}>{props.children}</code>;
}
