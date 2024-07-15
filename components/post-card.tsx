import { posts } from "@/app/source";
import { format } from "date-fns";
import { InferPageType } from "fumadocs-core/source";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { Grid } from "./bento-grid";
import { Card, CardDescription, CardTitle } from "./ui/card";

type Props = {
	post: InferPageType<typeof posts>;
};
export function PostCard({ post }: Props) {
	return (
		<li>
			<Link href={post.url}>
				<Card className="px-4 py-5  group/post hover:bg-muted/20 dark:border bg-card dark:hover:bg-white/10 overflow-hidden dark:bg-[rgba(40,40,40,0.5)] relative dark:border-[rgba(255,_255,_255,_0.20)] dark:shadow-[0px_0px_8px_0px_rgba(248,248,248,0.08)_inset,0px_32px_24px_-16px_rgba(0,_0,_0,_0.40)_inset] transition-colors hover:scale-[0.98] duration-200">
					<Grid size={20} />
					<div className="justify-between sm:flex">
						<div className="flex-1 space-y-2">
							<CardTitle className="text-xl font-geist font-semibold group-hover/post:text-primary duration-200">{post.data.title}</CardTitle>
							<CardDescription className="line-clamp-2 group-hover/post:text-slate-700 text-muted-foreground duration-200 group-hover/post:dark:text-slate-50">
								{post.data.description}
							</CardDescription>
						</div>
						<div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2 md:group-hover/post:-translate-x-2  duration-200">
							<span className="flex items-center text-muted-foreground">
								<CalendarIcon className="mr-2 h-4 w-4" />
								{format(post.data.date, "LLLL d, yyyy")}
							</span>
						</div>
					</div>
				</Card>
			</Link>
		</li>
	);
}
