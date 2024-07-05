import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

import { LogoIcon } from "@/components/icons/logo";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Lewe Maiga",
	description: "This is my portfolio, designed to showcase my work to the world online, and also my personal blog to share recent discoveries.",
	metadataBase: new URL("https://lewe.dev"),

	twitter: {
		card: "summary_large_image",
		title: "Lewe Maiga",
		description: "This is my portfolio, designed to showcase my work to the world online, and also my personal blog to share recent discoveries.",
		creator: "@lewe_maiga",
		images: [
			{
				url: "https://lewe.dev/og.png",
				width: 700,
				height: 700,
			},
		],
	},

	openGraph: {
		title: "Lewe Maiga",
		description: "This is my portfolio, designed to showcase my work to the world online, and also my personal blog to share recent discoveries.",
		url: "https://lewe.dev",
		siteName: "Lewe Maiga - Portfolio",
		countryName: "Morocco",
		images: [
			{
				url: "https://lewe.dev/og.png",
				width: 700,
				height: 700,
			},
		],
		locale: "en-US",
		type: "website",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased overflow-visible h-full", poppins.variable)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div className="mx-auto py-8 max-w-2xl px-4">
						<nav className=" flex items-center justify-between">
							<Link href={"/"}>
								<LogoIcon className="h-4 w-12" />
							</Link>

							<div className="flex gap-4">
								<Link href={"#"}>about</Link>
								<Link href={"posts"}>posts</Link>
							</div>
						</nav>
					</div>

					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
