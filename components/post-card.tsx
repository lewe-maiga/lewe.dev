import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "./ui/card";

type Props = {
	post: Post;
};
export function PostCard({ post }: Props) {
	return (
		<li>
			<Link href={`/posts/${post._raw.flattenedPath}`}>
				<Card className="px-4 py-5 duration-200 hover:bg-muted/50 hover:rounded-xl  group/post">
					<div className="justify-between sm:flex">
						<div className="flex-1 space-y-2">
							<CardTitle className="text-xl font-medium group-hover/post:text-primary duration-200">{post.title}</CardTitle>
							<CardDescription className="line-clamp-2 group-hover/post:text-muted-foreground/90 duration-200">{post.description}</CardDescription>
						</div>
						<div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2 group-hover/post:-translate-x-2 duration-200">
							<span className="flex items-center text-muted-foreground">
								<CalendarIcon className="mr-2 h-4 w-4" />
								{format(parseISO(post.date), "LLLL d, yyyy")}
							</span>
						</div>
					</div>
				</Card>
			</Link>
		</li>
	);
}
