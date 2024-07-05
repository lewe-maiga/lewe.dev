"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Box, File, SendToBackIcon, Signature, TableColumnsSplit } from "lucide-react";
import Image from "next/image";
import React from "react";
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
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4 border border-transparent justify-between flex flex-col space-y-4",
				className
			)}
		>
			{header}
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
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-4 relative">
			{items.map((item, i) => (
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
			className="flex flex-1 w-full h-full md:min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 min-h-[12rem] "
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
			className="flex flex-1 w-full h-full md:min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 min-h-[12rem] "
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
			className="flex flex-1 w-full h-full md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 min-h-[12rem]"
		>
			<motion.div variants={first} className="h-full w-1/3 rounded-2xl bg-background p-4  border  flex flex-col items-center justify-center">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Just code in Vanilla Javascript</p>
				<p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">Delusional</p>
			</motion.div>
			<motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-background p-4 ] border flex flex-col items-center justify-center">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Tailwind CSS is cool, you know</p>
				<p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">Sensible</p>
			</motion.div>
			<motion.div variants={second} className="h-full w-1/3 rounded-2xl p-4 bg-background border  flex flex-col items-center justify-center">
				<Image src="/profile.jpg" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">I love angular, RSC, and Redux.</p>
				<p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">Helpless</p>
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
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 min-h-[12rem]"
		>
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
		className: "md:col-span-1",
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

	{
		title: "Text Summarization",
		description: <span className="text-sm">Summarize your lengthy documents with AI technology.</span>,
		header: <SkeletonFive />,
		className: "md:col-span-1",
		icon: <Box className="h-4 w-4 text-muted-foreground" />,
		tag: <Badge className="bg-violet-400">Strapi</Badge>,
		url: "",
	},
];
