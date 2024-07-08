import { ReactNode } from "react";

type Props<T> = {
	fallback?: ReactNode;
	when: T;
	children: ReactNode;
};

export const Show = <T,>(props: Props<T>) => {
	return props.when ? props.children : props.fallback;
};
