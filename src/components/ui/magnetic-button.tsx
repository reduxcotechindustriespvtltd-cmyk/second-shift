"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/use-is-touch-device";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
  onClick?: () => void;
};

/**
 * Button/link with a magnetic hover pull on desktop and a volt fill sweep.
 * Falls back to a plain static button on touch devices or reduced motion.
 */
export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const magnetic = !isTouch && !prefersReducedMotion;

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseClasses = cn(
    "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors duration-300",
    variant === "solid"
      ? "bg-pure-black text-off-white"
      : "border-2 border-current bg-transparent",
    className,
  );

  const content = (
    <motion.span
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-volt transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-pure-black">
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target={target ?? "_blank"} rel={rel ?? "noopener noreferrer"} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
