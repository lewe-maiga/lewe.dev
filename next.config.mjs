import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"api.microlink.io", // Microlink Image Preview
		],
	},

	experimental: {
		mdxRs: false,
	},
};

export default withContentlayer(nextConfig);
