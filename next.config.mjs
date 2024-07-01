import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: false,
	},
};

export default withContentlayer(nextConfig);
