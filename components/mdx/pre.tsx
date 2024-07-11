"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CodeBlock } from "./code-block";

interface CustomProps extends React.HTMLAttributes<HTMLPreElement> {
	"data-language"?: string;
	raw?: string;
}

export const Pre = ({ children, raw, className, ...props }: CustomProps) => {
	const value = raw || "";
	const live = React.isValidElement(children) && "props" in children && "live" in children.props;
	return (
		<CodeBlock.Root className="my-5">
			{live && <CodeBlock.LivePreview className="rounded-b-none" code={value} />}
			<CodeBlock.Content>
				<CodeBlock.Pre className={cn(className, live && "rounded-t-none border-t-2")} {...props}>
					{children}
				</CodeBlock.Pre>
				<CodeBlock.CopyButton text={value} />
			</CodeBlock.Content>
		</CodeBlock.Root>
	);
};
