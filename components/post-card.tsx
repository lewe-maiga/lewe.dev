import { CalendarIcon } from "lucide-react";
import { Card } from "./ui/card";

const jobs = [
	{
		title: "UI – Front End Dev",
		desc: "Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.",
		date: "May 17, 2022",
		salary: "98,000 USD",
		type: "Full-time",
		location: "Columbia, MD",
		href: "javascript:void(0)",
	},
	{
		title: "Back End Developer",
		desc: " Help us solve problems and develop great user interface tools for our developers.",
		date: "Nov 11, 2022",
		salary: "$105,000 USD",
		type: "Part-time",
		location: "Remote",
		href: "javascript:void(0)",
	},
	{
		title: "Full-Stack Developer",
		desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
		date: "Jan 2, 2022",
		salary: "163,273 USD",
		type: "Full-time",
		location: "Remote",
		href: "javascript:void(0)",
	},
];

export const PostCard = () => {
	return (
		<section className="max-w-2xl px-4">
			<div>
				<h3 className="font-medium">Explore my posts</h3>
			</div>

			<ul className="mt-12 space-y-6">
				{jobs.map((item, idx) => (
					<Card key={idx} className="p-5 bg-transparent border-none rounded-md shadow-sm">
						<div className="justify-between sm:flex">
							<div className="flex-1">
								<h3 className="text-xl font-medium text-primary">{item.title}</h3>
								<p className="text-muted-foreground text-sm mt-2 pr-2">{item.desc}</p>
							</div>
							<div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
								<span className="flex items-center text-muted-foreground">
									<CalendarIcon className="mr-2 h-4 w-4" />
									{item.date}
								</span>
							</div>
						</div>
					</Card>
				))}
			</ul>
		</section>
	);
};
