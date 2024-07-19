"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Book, ExternalLink, Headphones, Presentation, SendToBackIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";
import { Each } from "./each";
import { StrapiIcon } from "./icons/strapi";
import { Icons } from "./navbar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, description, header, icon, url, tag }: Item) => {
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
			<CardFooter className="px-0 flex items-center pb-0 justify-between">
				{tag}
				{url}
			</CardFooter>
		</Card>
	);
};

export function BentoGridThirdDemo() {
	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] relative">
			<Each of={items}>
				{(item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={cn("[&>p:text-lg]", item.className)}
						icon={item.icon}
						url={item.url}
						tag={item.tag}
					/>
				)}
			</Each>
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
				background: "linear-gradient(-45deg, #4945FFa1, #fff, #fff, #9593FFa1)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg flex items-center justify-center ">
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
				background: "linear-gradient(-45deg, #41d1ffa1, #bd34fea1, #ffea83a1, #ffdd35a1)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="size-24" viewBox="0 0 128 128">
					<defs>
						<linearGradient
							id="deviconVitejs0"
							x1="6"
							x2="235"
							y1="33"
							y2="344"
							gradientTransform="translate(0 .937)scale(.3122)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#41d1ff" />
							<stop offset="1" stop-color="#bd34fe" />
						</linearGradient>
						<linearGradient
							id="deviconVitejs1"
							x1="194.651"
							x2="236.076"
							y1="8.818"
							y2="292.989"
							gradientTransform="translate(0 .937)scale(.3122)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#ffea83" />
							<stop offset=".083" stop-color="#ffdd35" />
							<stop offset="1" stop-color="#ffa800" />
						</linearGradient>
					</defs>
					<path
						fill="url(#deviconVitejs0)"
						d="M124.766 19.52L67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.1 3.1 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594m0 0"
					/>
					<path
						fill="url(#deviconVitejs1)"
						d="M91.46 1.43L48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968l34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43m0 0"
					/>
				</svg>
			</motion.div>
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
			<motion.div
				className="h-full relative z-20 w-1/3 rounded-2xl bg-muted/40 p-4 border flex flex-col items-center justify-center"
				variants={first}
			>
				<Image src="/listening.png" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Listen to music</p>
			</motion.div>
			<motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-muted/40 p-4  border flex flex-col items-center justify-center">
				<Image src="/meeting.png" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">Meet the artist</p>
			</motion.div>
			<motion.div variants={second} className="h-full w-1/3 rounded-2xl p-4 bg-muted/40 border flex flex-col items-center justify-center">
				<Image src="/sharing.png" alt="avatar" height="100" width="100" className="rounded-full h-10 w-10" />
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

type UrlProps = {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	href: string;
};

const Url = ({ Icon, title, href }: UrlProps) => (
	<Badge
		asChild
		className="gap-2 py-1 dark:text-muted-foreground dark:bg-[rgba(40,40,40)]
      hover:bg-accent/40 hover:scale-[0.98] dark:border dark:hover:bg-white/10 overflow-hidden dark:bg-[rgba(40,40,40,0.5)] relative dark:border-[rgba(255,_255,_255,_0.20)] dark:shadow-[0px_0px_8px_0px_rgba(248,248,248,0.08)_inset,0px_32px_24px_-16px_rgba(0,_0,_0,_0.40)_inset] transition duration-200 inline-flex items-center justify-center whitespace-nowrap text-xs font-medium hover:text-accent-foreground"
		variant={"outline"}
	>
		<Link href={href} target="_blank" rel="noopener noreferrer">
			<Icon className="size-3 text-muted-foreground align-middle whitespace-nowrap" />
			<span className="leading-none">{title}</span>
		</Link>
	</Badge>
);

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
		url: <Url Icon={Icons.github} href="https://github.com/lewe-maiga/online-library-backend" title="View on Github" />,
		tag: <Badge className="bg-violet-600 group-hover/bento:bg-violet-500 text-violet-50 transition duration-200">Strapi</Badge>,
	},
	{
		title: "Online library frontend",
		description: "Interface for your online library with ease.",
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <Book className="h-4 w-4 text-muted-foreground" />,
		url: <Url Icon={Icons.github} href="https://github.com/lewe-maiga/online-library-frontend" title="View on Github" />,
		tag: <Badge className="bg-black group-hover/bento:bg-black/50 text-white transition duration-200">Nextjs</Badge>,
	},
	{
		title: "Image studio",
		description: <span className="text-sm">Edit your images with ease.</span>,
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <Presentation className="h-4 w-4 text-muted-foreground" />,
		url: <Url Icon={Icons.github} href="https://github.com/lewe-maiga/image-studio" title="View on Github" />,
		tag: <Badge className="bg-yellow-600 group-hover/bento:bg-yellow-500 text-yellow-50 transition duration-200">Javascript</Badge>,
	},

	{
		title: "Black Industry Music",
		description:
			"Development of a web application dedicated to the talented Malian producer Black Soninké, integrating content management and artistic promotion functions.",
		header: <SkeletonFour />,
		className: "md:col-span-2",
		icon: <Headphones className="h-4 w-4 text-muted-foreground" />,
		url: <Url Icon={ExternalLink} href="https://black-in.vercel.app" title="Live demo" />,
		tag: <Badge className="bg-black group-hover/bento:bg-black/50 text-white transition duration-200">Nextjs</Badge>,
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
