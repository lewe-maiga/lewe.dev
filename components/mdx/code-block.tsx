"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";
import { LivePreview as LiveCode, LiveError, LiveProvider } from "react-live";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const MotionCopy = motion(Copy);
const MotionCopyCheck = motion(CopyCheck);
type CopyButtonProps = {
	text: string;
};

export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(({ text }, ref) => {
	const [isCopied, setIsCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(text);
		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<AnimatePresence>
			<Button
				variant={"ghost"}
				className="bg-white/5 size-8 hover:bg-white/20 !text-white absolute top-2 right-2 opacity-0 group-hover/code:opacity-100 transition-opacity duration-100"
				size={"icon"}
				onClick={copy}
			>
				{isCopied ? (
					<MotionCopyCheck
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 10, opacity: 0 }}
						className="size-4"
						transition={{
							ease: "easeInOut",
							duration: 0.1,
							x: {
								type: "spring",
								damping: 10,
								stiffness: 80,
							},
						}}
					/>
				) : (
					<MotionCopy
						className="size-4"
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 10, opacity: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 0.1,
							x: {
								type: "spring",
								damping: 10,
								stiffness: 80,
							},
						}}
					/>
				)}
			</Button>
		</AnimatePresence>
	);
});

CopyButton.displayName = "CodeBlock.CopyButton";

type RootProps = React.ComponentPropsWithoutRef<"div">;
const Root = React.forwardRef<HTMLDivElement, RootProps>(({ className, ...props }, ref) => (
	<div
		className={cn(
			"not-prose min-w-full relative box-border after:content-[''] after:absolute after:inset-0 after after:shadow-[0_0_0_1px_rgba(0,0,0,.1)] after:rounded-lg rounded-lg after:pointer-events-none",
			className
		)}
		ref={ref}
		{...props}
	/>
));

Root.displayName = "CodeBlock.Root";

type ContentProps = React.ComponentPropsWithoutRef<"div">;
const Content = React.forwardRef<HTMLDivElement, ContentProps>(({ className, ...props }, ref) => (
	<div className={cn("relative h-full box-border group/code", className)} ref={ref} {...props} />
));

Content.displayName = "CodeBlock.Content";

interface PreProps extends React.ComponentPropsWithoutRef<"pre"> {
	overflow?: "scroll" | "hidden";
}
const Pre = React.forwardRef<HTMLPreElement, PreProps>(({ className, overflow = "hidden", ...props }, ref) => {
	if (overflow === "hidden") {
		return (
			<pre ref={ref} className={cn("overflow-hidden relative h-full space-y-1 py-3 px-4 text-sm whitespace-pre rounded-lg", className)} {...props} />
		);
	}
	return (
		<ScrollArea>
			<pre ref={ref} className={cn("h-full space-y-1 py-3 px-4 text-sm whitespace-pre relative", className)} {...props} />
		</ScrollArea>
	);
});

type LivePreviewProps = React.ComponentPropsWithoutRef<typeof Card> & {
	code: string;
};

const LivePreview = React.forwardRef<HTMLDivElement, LivePreviewProps>(({ className, code, ...props }, ref) => (
	<Card className={cn("p-4", className)} ref={ref} {...props}>
		<ScrollArea>
			<LiveProvider code={code} scope={{ Button, motion }} transformCode={(code) => `<>${code}</>`}>
				<LiveCode />
				<LiveError className="text-destructive-foreground bg-destructive bg-red-100 mt-2" />
			</LiveProvider>
		</ScrollArea>
	</Card>
));

LivePreview.displayName = "CodeBlock.LivePreview";

Pre.displayName = "CodeBlock.Pre";

export const CodeBlock = {
	Root: Root,
	Pre: Pre,
	Content: Content,
	CopyButton: CopyButton,
	LivePreview: LivePreview,
};