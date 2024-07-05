import { allPosts } from "contentlayer/generated";

const WEBSITE_HOST_URL = "https://www.lewe.dev";

export default async function sitemap() {
	const posts = allPosts.map((post) => ({
		url: `${WEBSITE_HOST_URL}/posts/${post._raw.flattenedPath}`,
		lastModified: post.date,
	}));

	const routes = ["", "/posts"].map((route) => ({
		url: `${WEBSITE_HOST_URL}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...posts];
}
