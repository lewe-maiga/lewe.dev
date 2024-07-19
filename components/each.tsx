import { Children, ReactNode } from "react";

type Props<T> = {
	children: (item: T, index: number) => ReactNode;
	of: T[];
	fallback?: ReactNode;
};

const render = <T,>(props: Props<T>) => {
	const fn = props.children,
		len = props.of.length,
		list = props.of;

	if (len) {
		return Children.toArray(list.map((item, index) => fn(item, index)));
	}
	return props.fallback;
};

export const Each = <T,>(props: Props<T>) => render(props);
