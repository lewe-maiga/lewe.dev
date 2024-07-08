"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Card } from "./ui/card";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: "center" | "start" | "end";
	children?: React.ReactNode;
}

export function ComponentPreview({ children, className, align = "center", ...props }: ComponentPreviewProps) {
	return (
		<Card
			className={cn(
				"relative  flex w-full flex-col justify-center p-4",
				{
					"items-center": align === "center",
					"items-start": align === "start",
					"items-end": align === "end",
				},
				className
			)}
			{...props}
		>
			{children}
		</Card>
	);
}
