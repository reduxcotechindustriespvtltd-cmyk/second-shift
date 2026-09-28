"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Massive uppercase headline that reveals word-by-word, each word sliding up
 * out of a clipped mask, as it enters the viewport.
 */
export function SectionHeading({
  as: Tag = "h2",
  children,
  className,
  align = "left",
}: {
  as?: "h1" | "h2" | "h3";
  children: string;
  className?: string;
  align?: "left" | "center";
}) {
  const words = children.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "flex flex-wrap gap-x-[0.28em]",
        align === "center" && "justify-center text-center",
        className,
      )}
    >
      <Tag className="sr-only">{children}</Tag>
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden py-[0.08em] leading-[0.95]" aria-hidden="true">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
