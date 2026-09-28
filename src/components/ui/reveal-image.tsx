"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Optional scroll-linked motion value applied as a `translateY` parallax offset. */
  parallaxY?: MotionValue<number>;
};

/**
 * Image that wipes in via a subtle clip-path reveal shortly after mount.
 *
 * This intentionally does NOT gate the reveal on `whileInView`/viewport
 * detection — in practice that left the clip-path stuck at its initial
 * (fully hidden) state for images nested inside a scroll-linked parallax
 * wrapper, with no visible fallback. A mount-triggered `animate` always
 * runs, and the initial state only crops a small edge (never fully hides
 * the image), so the image is guaranteed to end up — and stay — visible.
 */
export const RevealImage = forwardRef<HTMLDivElement, RevealImageProps>(function RevealImage(
  { src, alt, className, imgClassName, sizes, priority, parallaxY }: RevealImageProps,
  ref,
) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { clipPath: "inset(10% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={parallaxY ? { y: parallaxY } : undefined}
      className={cn("relative overflow-hidden", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </motion.div>
  );
});
