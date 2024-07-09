import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code } from "../code";

export const Header = () => {
	return (
		<header className="max-w-2xl px-4">
			<div className="flex flex-col gap-8">
				<div className="flex items-center gap-4">
					<Avatar className="size-24">
						<AvatarImage src="/profile.jpg" alt="Profile picture" />
						<AvatarFallback>LM</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h1 className="scroll-m-20 text-xl md:text-3xl font-extrabold tracking-tight">Allewe Badra Aliyou MAIGA</h1>
						<p className="text-sm text-muted-foreground">Software Engineer and DevOps</p>
						<div>
							<Badge className="gap-2 inline-flex text-green-700 bg-green-100">
								<span className="inline-flex size-2 rounded-full bg-green-500"></span>
								Available for work
							</Badge>
						</div>
					</div>
				</div>
				<section className="flex flex-col gap-4">
					<h3 className="font-medium">About me</h3>
					<p className="text-muted-foreground leading-7">
						I&apos;m a young fullstack developer with a passion for DevOps, constantly immersed in the captivating challenges of programming, Cloud
						environments and system administration. Dynamic and avid for new technologies, I&apos;m constantly pushing my limits to design innovative
						solutions.
					</p>
					<p className="text-muted-foreground leading-7">
						Currently an intern at DigiImmo as a Fullstack engineer, I&apos;m developing an innovative ERP for the real estate industry using
						cutting-edge technologies such as <Code>react</Code>, <Code>zustand</Code>, <Code>next</Code>, <Code>@mui/material</Code>,<Code>swr</Code>
						, <Code>laravel</Code>, <Code>mysql</Code>, and <Code>docker</Code>.
					</p>

					{/* <div className="flex flex-wrap gap-2 items-start mt-1">
						<Button
							asChild
							variant="outline"
							className="bg-background hover:bg-foreground/20 hover:text-accent-foreground  dark:border dark:bg-white/5 dark:hover:bg-white/20 gap-2 dark:text-muted-foreground"
						>
							<Link href="https://www.linkedin.com/in/allewe-badra-aliyou-maiga/" target="_blank" rel="noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 256 256">
									<g fill="none">
										<rect width="256" height="256" fill="#fff" rx="60" />
										<rect width="256" height="256" fill="#0A66C2" rx="60" />
										<path
											fill="#fff"
											d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
										/>
									</g>
								</svg>
								Allewe Badra Aliyou Maiga
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="bg-background hover:bg-foreground/20 hover:text-accent-foreground  dark:border dark:bg-white/5 dark:hover:bg-white/20 gap-2 dark:text-muted-foreground"
						>
							<Link href="https://github.com/lewe-maiga" target="_blank" rel="noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
									/>
								</svg>
								@lewe-maiga
							</Link>
						</Button>
						<SocialMediaButton Icon={<TwitterLogo className="size-5 text-foreground" />} href="https://x.com/lewe_maiga" label="@lewe-maiga" />

						<SocialMediaButton Icon={<InstagramLogo className="size-5" />} href="https://instagram.com/lewe_maiga" label="@lewe-maiga" />
					</div> */}
				</section>
			</div>
		</header>
	);
};

// type SocialMediaButtonProps = {
// 	Icon: React.ReactNode;
// 	href: string;
// 	label: string;
// };

// const SocialMediaButton = ({ Icon, href, label }: SocialMediaButtonProps) => (
// 	<Button
// 		asChild
// 		variant="outline"
// 		className="bg-background hover:bg-foreground/20 hover:text-accent-foreground  dark:border dark:bg-white/10 dark:hover:bg-white/20 gap-2 dark:text-muted-foreground"
// 	>
// 		<Link href={href} target="_blank" rel="noreferrer">
// 			{Icon}
// 			{label}
// 		</Link>
// 	</Button>
// );

// const TwitterLogo = (props: React.SVGProps<SVGSVGElement>) => (
// 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
// 		<g fill="none">
// 			<g clipPath="url(#primeTwitter0)">
// 				<path
// 					fill="currentColor"
// 					d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
// 				/>
// 			</g>
// 			<defs>
// 				<clipPath id="primeTwitter0">
// 					<path fill="#fff" d="M0 0h14v14H0z" />
// 				</clipPath>
// 			</defs>
// 		</g>
// 	</svg>
// );

// const InstagramLogo = (props: React.SVGProps<SVGSVGElement>) => (
// 	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" {...props}>
// 		<g fill="none">
// 			<rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
// 			<rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
// 			<path
// 				fill="#fff"
// 				d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
// 			/>
// 			<defs>
// 				<radialGradient
// 					id="skillIconsInstagram0"
// 					cx="0"
// 					cy="0"
// 					r="1"
// 					gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
// 					gradientUnits="userSpaceOnUse"
// 				>
// 					<stop stopColor="#FD5" />
// 					<stop offset=".1" stopColor="#FD5" />
// 					<stop offset=".5" stopColor="#FF543E" />
// 					<stop offset="1" stopColor="#C837AB" />
// 				</radialGradient>
// 				<radialGradient
// 					id="skillIconsInstagram1"
// 					cx="0"
// 					cy="0"
// 					r="1"
// 					gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
// 					gradientUnits="userSpaceOnUse"
// 				>
// 					<stop stopColor="#3771C8" />
// 					<stop offset=".128" stopColor="#3771C8" />
// 					<stop offset="1" stopColor="#60F" stopOpacity="0" />
// 				</radialGradient>
// 			</defs>
// 		</g>
// 	</svg>
// );
