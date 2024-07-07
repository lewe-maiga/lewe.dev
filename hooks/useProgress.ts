import { useMotionValueEvent, useScroll } from "framer-motion";
import React from "react";

export const useProgress = () => {
	const [readingProgress, setReadingProgress] = React.useState(0);
	const { scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setReadingProgress(latest);
	});

	return readingProgress;
};
