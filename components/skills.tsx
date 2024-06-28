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
							<SkillItem>
								<ReactIcon className="size-5" />
								React
							</SkillItem>
							<SkillItem>
								<LaravelIcon className="size-5" />
								Laravel
							</SkillItem>
							<SkillItem>
								<NextjsIcon className="size-5" />
								Next.js
							</SkillItem>
							<SkillItem>
								<NestjsIcon className="size-5" />
								Nest.js
							</SkillItem>
							<SkillItem>
								<SassIcon className="size-5" />
								Sass
							</SkillItem>
							<SkillItem>
								<TailwindcssIcon className="size-5" />
								TailwindCSS
							</SkillItem>
							<SkillItem>
								<TypescriptIcon className="size-5" />
								Typescript
							</SkillItem>
						</div>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium">Database</h4>
						<div className="flex flex-wrap gap-2 items-start mt-1">
							<SkillItem>
								<MysqlIcon className="size-5" />
								MySQL
							</SkillItem>
							<SkillItem>
								<PostgresqlIcon className="size-5" />
								PostgreSQL
							</SkillItem>
							<SkillItem>
								<DynamodbIcon className="size-5" />
								DynamoDB
							</SkillItem>
							<SkillItem>
								<MongodbIcon className="size-5" />
								MongoDB
							</SkillItem>
						</div>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium">DevOps</h4>
						<div className="flex flex-wrap gap-2 items-start mt-1">
							<SkillItem>
								<AWSIcon className="size-5" />
								Amazon Web Services
							</SkillItem>
							<SkillItem>
								<VercelIcon className="size-5" />
								Vercel
							</SkillItem>
							<SkillItem>
								<TerraformIcon className="size-5" />
								Terraform
							</SkillItem>
							<SkillItem>
								<GithubactionsIcon className="size-5" />
								GitHub Actions
							</SkillItem>
							<SkillItem>
								<SonarqubeIcon className="size-5" />
								SonarQube
							</SkillItem>
							<SkillItem>
								<DockerIcon className="size-5" />
								Docker
							</SkillItem>
							<SkillItem>
								<PythonIcon className="size-5" />
								Python
							</SkillItem>
							<SkillItem>
								<GitlabIcon className="size-5" />
								Gitlab
							</SkillItem>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type SkillItemProps = React.PropsWithChildren<{}>;
function SkillItem({ children }: SkillItemProps) {
	return (
		<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-2 py-2 gap-2 dark:bg-white/5">
			{children}
		</div>
	);
}
