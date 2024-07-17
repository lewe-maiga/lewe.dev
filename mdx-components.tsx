import { LinkPreview } from "@/components/link-preview";
import { Callout } from "fumadocs-ui/components/callout";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Heading } from "fumadocs-ui/components/heading";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { cn } from "./lib/utils";
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...defaultComponents,
		...components,
		ImageZoom,
		Popup,
		PopupContent,
		PopupTrigger,
		a: ({ href, children }) => (
			<LinkPreview
				className="text-primary inline-block relative w-fit after:block after:content-[''] after:absolute after:h-px duration-100 after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-1"
				url={href as string}
			>
				{children}
			</LinkPreview>
		),
		pre: ({ ref: _ref, title, ...props }) => (
			<CodeBlock title={title}>
				<Pre {...props} />
			</CodeBlock>
		),
		Tabs,
		Tab,
		Step,
		Steps,
		Callout,
		File,
		Folder,
		Files,
		Image: ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
			<AspectRatio ratio={16 / 12} className="bg-muted relative rounded overflow-hidden">
				<Image src={src} alt={alt} className={cn("object-cover", className)} fill />
			</AspectRatio>
		),
		h1: (props) => <Heading as="h1" {...props} />,
		h2: (props) => <Heading as="h2" {...props} />,
		h3: (props) => <Heading as="h3" {...props} />,
		h4: (props) => <Heading as="h4" {...props} />,
		h5: (props) => <Heading as="h5" {...props} />,
		h6: (props) => <Heading as="h6" {...props} />,
	};
}
