"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { File, Headphones, SendToBackIcon, Signature, TableColumnsSplit } from "lucide-react";
import Image from "next/image";
import React, { useId } from "react";
import { StrapiIcon } from "./icons/strapi";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, description, header, icon, tag, url }: Item) => {
	return (
		<Card
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4 border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
				className
			)}
		>
			{header}
			{/* <Grid size={20} /> */}
			<CardContent className="group-hover/bento:translate-x-2 max-md:space-y-3 transition duration-200 px-0 pb-0">
				{icon}
				<CardTitle className="font-sans font-bold text-base mb-2 mt-2">{title}</CardTitle>
				<CardDescription className="font-sans font-normal ">{description}</CardDescription>
			</CardContent>
			<CardFooter className="px-0 flex items-center justify-between pb-0 ">{tag}</CardFooter>
		</Card>
	);
};

export function BentoGridThirdDemo() {
	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] relative">
			{items.map((item, i) => (
				// <BlurFade key={i} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
					icon={item.icon}
					tag={item.tag}
					url={item.url}
				/>
				// </BlurFade>
			))}
		</BentoGrid>
	);
}

const SkeletonOne = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full md:min-h-[6rem]  rounded-lg  flex-col space-y-2 min-h-[12rem] "
			style={{
				background: "linear-gradient(-45deg, #4945FF, #fff, #fff, #9593FF)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg flex items-center justify-center animate-pulse ">
				<StrapiIcon className="size-24" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			scale: 1,
		},
		animate: {
			scale: 1,
		},
		hover: {
			scale: 1.02,
		},
	};
	return (
		<motion.div className="flex flex-1 w-full h-full md:min-h-[6rem] flex-col rounded-xl relative min-h-[12rem] ">
			<motion.div
				className="overflow-hidden border relative h-full w-full rounded-[inherit] "
				initial="initial"
				animate="animate"
				variants={variants}
				whileHover={"hover"}
				transition={{
					duration: 0.5,
					repeatType: "reverse",
				}}
			>
				<Image src="/online-library-front.jpg" alt="Online Library Preview" fill className="object-cover" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full md:min-h-[6rem]  rounded-lg  flex-col space-y-2 min-h-[12rem] "
			style={{
				background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg"></motion.div>
		</motion.div>
	);
};
const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full md:min-h-[6rem]   flex-row space-x-2 min-h-[12rem]"
		>
			<motion.div variants={first} className="h-full w-1/3 rounded-2xl bg-background p-4  border  flex flex-col items-center justify-center">
				<div className="w-10 h-10">
					<Headphones className="rounded-full h-10 w-10" />
				</div>
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Listen beats</p>
			</motion.div>
			<motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-background p-4 ] border flex flex-col items-center justify-center">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Meet the artist</p>
			</motion.div>
			<motion.div variants={second} className="h-full w-1/3 rounded-2xl p-4 bg-background border  flex flex-col items-center justify-center">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Share with friends</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full md:min-h-[6rem]   flex-col space-y-2 min-h-[12rem]">
			<motion.div variants={variants} className="flex flex-row rounded-2xl border  p-2  items-start space-x-2 bg-background">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="text-xs text-muted-foreground">
					There are a lot of cool framerworks out there like React, Angular, Vue, Svelte that can make your life ....
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border  p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-background"
			>
				<p className="text-xs text-muted-foreground">Use PHP.</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
			</motion.div>
		</motion.div>
	);
};

type Item = {
	title: string;
	description: React.ReactNode;
	header: React.ReactNode;
	icon: React.ReactNode;
	className: string;
	url: React.ReactNode;
	tag: React.ReactNode;
};

const items: Item[] = [
	{
		title: "Online library backend",
		description: "Create and manage your online library with ease.",
		header: <SkeletonOne />,
		className: "md:col-span-2",
		icon: <SendToBackIcon className="h-4 w-4 text-muted-foreground" />,
		url: "https://github.com/lewe-maiga/online-library-backend",
		tag: <Badge className="bg-violet-600 group-hover/bento:bg-violet-500 text-violet-50 transition duration-200">Strapi</Badge>,
	},
	{
		title: "Online library frontend",
		description: "Interface for your online library with ease.",
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <File className="h-4 w-4 text-muted-foreground" />,
		url: "",
		tag: <Badge className="bg-sky-600 group-hover/bento:bg-sky-500 text-sky-50">React</Badge>,
	},
	{
		title: "Contextual Suggestions",
		description: <span className="text-sm">Get AI-powered suggestions based on your writing context.</span>,
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <Signature className="h-4 w-4 text-muted-foreground" />,
		tag: <Badge className="bg-violet-400">Strapi</Badge>,
		url: "https://github.com/lewe-maiga/contextual-suggestions",
	},

	{
		title: "Black Industry Music",
		description:
			"Development of a web application dedicated to the talented Malian producer Black Soninké, integrating content management and artistic promotion functions.",
		header: <SkeletonFour />,
		className: "md:col-span-2",
		icon: <TableColumnsSplit className="h-4 w-4 text-muted-foreground" />,
		tag: <Badge className="bg-violet-400">Strapi</Badge>,
		url: "",
	},

	// {
	// 	title: "Text Summarization",
	// 	description: <span className="text-sm">Summarize your lengthy documents with AI technology.</span>,
	// 	header: <SkeletonFive />,
	// 	className: "md:col-span-1",
	// 	icon: <Box className="h-4 w-4 text-muted-foreground" />,
	// 	tag: <Badge className="bg-violet-400">Strapi</Badge>,
	// 	url: "",
	// },
];

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
	const p = pattern ?? [
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
	];
	return (
		<div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
			<div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
				<GridPattern
					width={size ?? 20}
					height={size ?? 20}
					x="-12"
					y="4"
					squares={p}
					className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
				/>
			</div>
		</div>
	);
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y]: any) => (
						<rect strokeWidth="0" key={`${x}-${y}`} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}
