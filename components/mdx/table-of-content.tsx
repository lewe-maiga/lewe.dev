"use client";

import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { TableOfContents } from "fumadocs-core/server";
import React, { useEffect } from "react";

import type { TOCItemType } from "fumadocs-core/server";
import * as Primitive from "fumadocs-core/toc-internal";
import { Text } from "lucide-react";
import { useCallback, useRef, type ReactElement, type ReactNode } from "react";
import { ScrollArea } from "../ui/scroll-area";

type PosType = [top: number, height: number];
interface TOCProps {
	items: TOCItemType[];

	/**
	 * Custom content in TOC container, before the main TOC
	 */
	header?: ReactNode;
	/**
	 * Custom content in TOC container, after the main TOC
	 */
	footer?: ReactNode;
}

const TocProvider = Primitive.AnchorProvider;

export function Toc({ items, header, footer }: TOCProps): ReactElement {
	return (
		<div className="relative flex h-dvh w-[220px] shrink-0 flex-col gap-4 pe-2 pt-12 max-lg:hidden xl:w-[260px] mb-6 ml-6 p-0 ">
			{header}
			<h3 className="-mb-1 -ms-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
				<Text className="size-4" />
				On this page
			</h3>
			<TOCItems items={items} />
			{footer}
		</div>
	);
}

function TOCItems({ items, isMenu = false }: { items: TOCItemType[]; isMenu?: boolean }): React.ReactElement {
	const containerRef = useRef<HTMLDivElement>(null);
	const markerRef = useRef<HTMLDivElement>(null);

	const setPos = useCallback(([top, height]: PosType) => {
		const element = markerRef.current;
		if (!element || containerRef.current?.clientHeight === 0) return;

		element.style.setProperty("top", `${top.toString()}px`);
		element.style.setProperty("height", `${height.toString()}px`);
		element.style.setProperty("display", "block");
	}, []);

	if (items.length === 0) return <div className="rounded-lg border bg-card p-3 text-xs text-muted-foreground">No Heading</div>;

	return (
		<ScrollArea className={cn("flex flex-col", isMenu && "-mx-3")}>
			<div role="none" ref={markerRef} className="absolute start-0 hidden w-0.5 bg-primary/50 transition-all" />
			<Primitive.ScrollProvider containerRef={containerRef}>
				<div className={cn("flex flex-col gap-1 text-muted-foreground", !isMenu && "border-s-2")}>
					{items.map((item) => (
						<TOCItem key={item.url} item={item} setMarker={setPos} />
					))}
				</div>
			</Primitive.ScrollProvider>
		</ScrollArea>
	);
}

function TOCItem({ item, setMarker }: { item: TOCItemType; setMarker: (v: PosType) => void }): React.ReactElement {
	const ref = useRef<HTMLAnchorElement>(null);

	return (
		<Primitive.TOCItem
			ref={ref}
			href={item.url}
			onActiveChange={(active) => {
				const element = ref.current;
				if (active && element) setMarker([element.offsetTop, element.clientHeight]);
			}}
			className={cn(
				"py-1 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary",
				item.depth <= 2 && "ps-4",
				item.depth === 3 && "ps-7",
				item.depth >= 4 && "ps-10"
			)}
		>
			{item.title}
		</Primitive.TOCItem>
	);
}
type TableOfContentProps = {
	toc: TableOfContents;
};
export function TableOfContent({ toc }: TableOfContentProps) {
	const readingProgress = useProgress();
	const shouldReduceMotion = useReducedMotion();

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
		<TocProvider toc={toc}>
			<motion.div hidden={!shouldShowTableOfContent} className={cn("top-52 fixed left-2.5 hidden md:flex")}>
				<ProgressBar progress={readingProgress} />
				<motion.div variants={variants} animate="show" transition={{ type: "spring" }} custom={shouldShowTableOfContent} className=" lg:block hidden">
					<Toc items={toc} />
				</motion.div>
			</motion.div>
		</TocProvider>
	);
}
type ProgressBarProps = {
	progress: number;
};
const ProgressBar = ({ progress }: ProgressBarProps) => {
	const [visibility, setVisibility] = React.useState(true);
	const shouldReduceMotion = useReducedMotion();
	const scaleX = useSpring(progress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
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
		<>
			<motion.div
				initial="hide"
				animate="show"
				transition={{ type: "spring" }}
				className="h-[calc(88vh-40px)] max-h-[425px] w-[2px] bg-muted hidden md:block"
				variants={progressBarWrapperVariants}
				custom={visibility}
			>
				<motion.div
					style={{
						scaleY: progress,
					}}
					className="bg-primary/50 w-[2px] h-full origin-top"
				/>
			</motion.div>

			<motion.div className="fixed top-0 inset-x-0 h-[2px] z-50 bg-primary origin-left md:hidden" style={{ scaleX }} aria-hidden="true" />
		</>
	);
};
