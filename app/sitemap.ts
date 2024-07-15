import { posts } from "./source";

const WEBSITE_HOST_URL = "https://www.lewe.dev";

export default async function sitemap() {
	const allPosts = posts.getPages().map((post) => ({
		url: `${WEBSITE_HOST_URL}/${post.slugs[0]}`,
		lastModified: new Date(post.data.exports.lastModified || post.data.date).toISOString().split("T")[0],
		changeFrequency: "weekly",
		priority: 0.5,
	}));

	const routes = ["", "posts"].map((route) => ({
		url: `${WEBSITE_HOST_URL}/${route}`,
		lastModified: new Date().toISOString().split("T")[0],
		changeFrequency: "monthly",
		priority: 1,
	}));

	return [...routes, ...allPosts];
}
