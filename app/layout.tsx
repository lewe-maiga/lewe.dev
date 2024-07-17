import { Navbar } from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CONFIG } from "@/data/config";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/twoslash.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: CONFIG.name,
	description: CONFIG.description,
	metadataBase: new URL(CONFIG.url),

	twitter: {
		card: "summary_large_image",
		title: CONFIG.name,
		description: CONFIG.description,
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
		title: CONFIG.name,
		description: CONFIG.description,
		url: new URL(CONFIG.url),
		siteName: CONFIG.name,
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

export default function Page({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased overflow-visible", poppins.variable, jetbrains.variable, GeistSans.variable)}>
				<RootProvider>
					<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
						<TooltipProvider>
							{/* <Banner className="sticky top-0 z-50">Website under construction</Banner> */}

							{children}
							<Navbar />
						</TooltipProvider>
					</ThemeProvider>
				</RootProvider>
				<Analytics />
			</body>
		</html>
	);
}
