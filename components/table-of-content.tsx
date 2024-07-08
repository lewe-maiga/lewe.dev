"use client";

import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect } from "react";
import tocbot from "tocbot";

export function TableOfContent() {
	const readingProgress = useProgress();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		tocbot.init({
			tocSelector: ".js-toc",
			contentSelector: ".js-toc-content",
			headingSelector: "h2",
			listClass: "flex flex-col max-w-52 mb-6 ml-6 p-0 ",
			listItemClass: "mb-3 font-medium capitalize font-geist text-muted-foreground",
			linkClass: "text-sm",
			activeLinkClass: "text-primary font-semibold",
		});

		return () => {
			tocbot.destroy();
		};
	}, []);

	const shouldShowTableOfContent = readingProgress > 0.07 && readingProgress < 0.95;

	/**
	 * Variants handling hidding/showing the table of content
	 * based on the amount scrolled by the reader
	 */
	const variants = {
		hide: {
			opacity: shouldReduceMotion ? 1 : 0,
		},
		show: (shouldShowTableOfContent: boolean) => ({
			opacity: shouldReduceMotion || shouldShowTableOfContent ? 1 : 0,
		}),
	};

	return (
		<motion.div hidden={!shouldShowTableOfContent} className={cn("top-52 fixed left-2.5 hidden md:flex")}>
			<ProgressBar progress={readingProgress} />
			<motion.div
				variants={variants}
				animate="show"
				transition={{ type: "spring" }}
				custom={shouldShowTableOfContent}
				className="js-toc lg:block hidden"
			></motion.div>
		</motion.div>
	);
}
type ProgressBarProps = {
	progress: number;
};
const ProgressBar = ({ progress }: ProgressBarProps) => {
	const [visibility, setVisibility] = React.useState(true);
	const shouldReduceMotion = useReducedMotion();

	const progressBarWrapperVariants = {
		hide: {
			opacity: shouldReduceMotion ? 1 : 0,
		},
		show: (visibility: boolean) => ({
			opacity: shouldReduceMotion ? 1 : visibility ? 0.7 : 0,
		}),
	};

	useEffect(() => setVisibility(progress >= 0.07 && progress <= 0.95), [progress]);

	return (
		<motion.div
			initial="hide"
			variants={progressBarWrapperVariants}
			animate="show"
			transition={{ type: "spring" }}
			className="h-[calc(88vh-40px)] max-h-[425px] w-[2px] bg-muted hidden md:block"
			custom={visibility}
		>
			<motion.div
				style={{
					scaleY: progress,
				}}
				className="bg-primary/80 w-[2px] h-full origin-top"
			/>
		</motion.div>
	);
};
