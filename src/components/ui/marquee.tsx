"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  speedClassName = "animate-marquee",
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speedClassName?: string;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : speedClassName,
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
