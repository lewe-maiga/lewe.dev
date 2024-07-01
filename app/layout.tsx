import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Lewe Maiga",
	description: "This is my portfolio, designed to showcase my work to the world online, and also my personal blog to share recent discoveries.",
	openGraph: {
		title: "Lewe Maiga",
		description: "This is my portfolio, designed to showcase my work to the world online, and also my personal blog to share recent discoveries.",
		images: [
			{
				url: "https://lewe.dev/og-image.jpg",
				width: 100,
				height: 100,
			},
		],
		locale: "en-US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased overflow-visible h-full ", poppins.variable)}>
				{/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
				{children}
				{/* </ThemeProvider> */}
				<Analytics />
			</body>
		</html>
	);
}
