"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Scroll-linked vertical parallax strength in pixels. 0 disables it. */
  parallaxStrength?: number;
};

/**
 * Image that wipes in via a subtle clip-path reveal shortly after mount, with
 * an optional self-contained scroll parallax.
 *
 * This intentionally does NOT gate the reveal on `whileInView`/viewport
 * detection — in practice that left the clip-path stuck at its initial
 * (fully hidden) state for images nested inside a separate parallax wrapper
 * component, with no visible fallback. A mount-triggered `animate` always
 * runs, and the initial state only crops a small edge (never fully hides
 * the image), so the image is guaranteed to end up — and stay — visible.
 *
 * The parallax scroll tracking also lives entirely inside this component
 * (rather than a parent hook passing a ref/motion value down as props) so
 * there's a single ref with a single owner.
 */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
  parallaxStrength = 0,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { clipPath: "inset(10% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={parallaxStrength ? { y } : undefined}
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
}
