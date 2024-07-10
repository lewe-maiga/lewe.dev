import { Navbar } from "@/components/layout/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
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
		siteName: "Lewe Maiga",
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
			<body className={cn("font-sans antialiased overflow-visible", poppins.variable, jetbrains.variable, GeistSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<TooltipProvider>
						<div className="bg-primary">
							<div className="max-w-screen-xl mx-auto px-4 py-2 text-primary-foreground text-center md:px-8">
								<p className="font-medium">Website under construction</p>
							</div>
						</div>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
