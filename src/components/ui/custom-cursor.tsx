"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useIsTouchDevice } from "@/hooks/use-is-touch-device";

/**
 * Small signal-orange dot cursor with a ring that grows over interactive
 * elements. Desktop only — uses a fixed on-brand color rather than a blend
 * mode, so it reads consistently over every section background.
 */
export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && el.closest("a, button, [data-cursor-hover]") !== null;

    const over = (e: PointerEvent) => setIsHovering(isInteractive(e.target));

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [isTouch, prefersReducedMotion, isVisible, x, y]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full border-2 border-signal-orange"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        width: isHovering ? 44 : 16,
        height: isHovering ? 44 : 16,
        backgroundColor: isHovering ? "rgba(240,78,35,0.12)" : "rgba(240,78,35,1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
