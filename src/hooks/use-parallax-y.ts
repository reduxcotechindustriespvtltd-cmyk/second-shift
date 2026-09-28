"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Returns a ref + a scroll-linked `y` motion value to apply directly on the
 * SAME element that ref is attached to (rather than a separate wrapping
 * motion component) — see reveal-image.tsx for why that separation broke
 * `whileInView` on the inner element.
 */
export function useParallaxY<T extends HTMLElement>(strength = 40) {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return { ref, y };
}
