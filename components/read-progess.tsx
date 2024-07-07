"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ReadProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return <motion.div className="fixed top-0 inset-x-0 h-[2px] z-50 bg-accent origin-left lg:hidden" style={{ scaleX }} aria-hidden="true" />;
}
