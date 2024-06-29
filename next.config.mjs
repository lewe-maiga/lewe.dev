import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
			},
		],
	},
};

export default withContentlayer(nextConfig);
