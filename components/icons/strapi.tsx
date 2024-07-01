import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="none" {...props}>
		<path
			fill="#4945FF"
			d="M0 208C0 109.948 0 60.922 30.46 30.46 60.923 0 109.949 0 208 0h184c98.052 0 147.078 0 177.539 30.46C600 60.923 600 109.949 600 208v184c0 98.052 0 147.078-30.461 177.539C539.078 600 490.052 600 392 600H208c-98.052 0-147.078 0-177.54-30.461C0 539.078 0 490.052 0 392V208Z"
		/>
		<path fill="#fff" fillRule="evenodd" d="M414 182H212v103h103v103h103V186a4 4 0 0 0-4-4Z" clipRule="evenodd" />
		<path fill="#fff" d="M311 285h4v4h-4z" />
		<path
			fill="#9593FF"
			d="M212 285h99a4 4 0 0 1 4 4v99h-99a4 4 0 0 1-4-4v-99ZM315 388h103l-99.586 99.586c-1.26 1.26-3.414.367-3.414-1.414V388ZM212 285h-98.172c-1.782 0-2.674-2.154-1.414-3.414L212 182v103Z"
		/>
	</svg>
);
export { SvgComponent as StrapiIcon };