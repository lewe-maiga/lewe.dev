import { cn } from "@/lib/utils";
import { AWSIcon } from "./icons/aws";
import { DockerIcon } from "./icons/docker";
import DynamodbIcon from "./icons/dynamodb";
import { GithubactionsIcon } from "./icons/githubactions";
import { GitlabIcon } from "./icons/gitlab";
import { LaravelIcon } from "./icons/laravel";
import MongodbIcon from "./icons/mongodb";
import { MysqlIcon } from "./icons/mysql";
import { NestjsIcon } from "./icons/nestjs";
import { NextjsIcon } from "./icons/nextjs";
import PostgresqlIcon from "./icons/postgresql";
import { PythonIcon } from "./icons/python";
import { ReactIcon } from "./icons/react";
import { SassIcon } from "./icons/sass";
import { SonarqubeIcon } from "./icons/sonarqube";
import { TailwindcssIcon } from "./icons/tailwind";
import { TerraformIcon } from "./icons/terraform";
import { TypescriptIcon } from "./icons/typescript";
import { VercelIcon } from "./icons/vercel";

export const Skills = () => {
	return (
		<section className="max-w-2xl px-4 ">
			<div className="flex flex-col gap-4">
				<h3 className="font-medium text-lg">Skills</h3>
				<p className="text-muted-foreground">These are some of the technologies I&apos;ve been working with.</p>
				<div className="flex flex-col gap-4">
					<div className="space-y-2">
						<h4 className="font-medium">Web Development</h4>
						<div className="flex flex-wrap gap-2 items-start mt-1">
							<SkillItem Icon={ReactIcon} label="React" iconClassName="group-hover/skill:animate-spin" />

							<SkillItem Icon={LaravelIcon} label="Laravel" />

							<SkillItem Icon={NextjsIcon} label="Next.js" />

							<SkillItem Icon={NestjsIcon} label="Nest.js" />

							<SkillItem Icon={SassIcon} label="Sass" />

							<SkillItem Icon={TailwindcssIcon} label="TailwindCSS" />

							<SkillItem Icon={TypescriptIcon} label="Typescript" />
						</div>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium">Database</h4>
						<div className="flex flex-wrap gap-2 items-start mt-1">
							<SkillItem Icon={MysqlIcon} label="MySQL" />

							<SkillItem Icon={PostgresqlIcon} label="PostgreSQL" />

							<SkillItem Icon={DynamodbIcon} label="DynamoDB" />

							<SkillItem Icon={MongodbIcon} label="MongoDB" />
						</div>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium">DevOps</h4>
						<div className="flex flex-wrap gap-2 items-start mt-1">
							<SkillItem Icon={AWSIcon} label="Amazon Web Services" />

							<SkillItem Icon={VercelIcon} label="Vercel" iconClassName="group-hover/skill:animate-slide-down" />

							<SkillItem Icon={TerraformIcon} label="Terraform" />

							<SkillItem Icon={GithubactionsIcon} label="GitHub Actions" />

							<SkillItem Icon={SonarqubeIcon} label="SonarQube" />

							<SkillItem Icon={DockerIcon} label="Docker" />

							<SkillItem Icon={PythonIcon} label="Python" />

							<SkillItem Icon={GitlabIcon} label="GitLab" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type SkillItemProps = {
	label: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	iconClassName?: string;
};
function SkillItem({ label, Icon, iconClassName }: SkillItemProps) {
	return (
		<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-foreground/20 cursor-pointer hover:text-accent-foreground h-10 px-2 py-2 gap-2 group/skill dark:border dark:bg-white/5 dark:hover:bg-white/20 dark:text-muted-foreground">
			<Icon className={cn("size-5 group-hover/skill:animate-pulse", iconClassName)} />
			{label}
		</div>
	);
}
