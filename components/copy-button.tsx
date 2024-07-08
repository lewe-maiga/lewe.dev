"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const MotionCopy = motion(Copy);
const MotionCopyCheck = motion(CopyCheck);
type CopyButtonProps = {
	text: string;
};
export const CopyButton = ({ text }: CopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(text);
		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<AnimatePresence>
			<Button variant={"ghost"} className="bg-white/5 size-8 hover:bg-white/20 !text-white" size={"icon"} onClick={copy}>
				{isCopied ? (
					<MotionCopyCheck
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 10, opacity: 0 }}
						className="size-4"
						transition={{
							ease: "easeInOut",
							duration: 0.1,
							x: {
								type: "spring",
								damping: 10,
								stiffness: 80,
							},
						}}
					/>
				) : (
					<MotionCopy
						className="size-4"
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 10, opacity: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 0.1,
							x: {
								type: "spring",
								damping: 10,
								stiffness: 80,
							},
						}}
					/>
				)}
			</Button>
		</AnimatePresence>
	);
};
