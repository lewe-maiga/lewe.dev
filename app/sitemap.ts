import { posts } from "./source";

const WEBSITE_HOST_URL = "https://www.lewe.dev";

export default async function sitemap() {
	const allPosts = posts.getPages().map((post) => ({
		url: `${WEBSITE_HOST_URL}/${post.slugs[0]}`,
		lastModified: post.data.date.toISOString().split("T")[0],
	}));

	const routes = ["", "posts"].map((route) => ({
		url: `${WEBSITE_HOST_URL}/${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...allPosts];
}
