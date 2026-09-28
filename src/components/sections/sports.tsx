"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { sports } from "@/data/content";
import { useIsTouchDevice } from "@/hooks/use-is-touch-device";
import { cn } from "@/lib/utils";

function SportCard({ sport, index }: { sport: (typeof sports.list)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const canTilt = !isTouch && !prefersReducedMotion;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!canTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="group relative aspect-[3/4] w-full"
      data-cursor-hover
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-transparent transition-colors duration-300 group-hover:border-volt"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={sport.image.src}
          alt={sport.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <h3 className="font-display text-4xl font-black uppercase leading-none text-off-white sm:text-5xl">
            {sport.name}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-xs translate-y-4 text-sm text-off-white/80 opacity-0 transition-all duration-500",
              "group-hover:translate-y-0 group-hover:opacity-100",
            )}
          >
            {sport.description}
          </p>
        </div>

        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(229,255,0,0)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_60px_rgba(229,255,0,0.25)]" />
      </motion.div>
    </motion.div>
  );
}

export function Sports() {
  return (
    <section className="relative bg-jet py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading className="font-display mb-14 max-w-4xl text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl">
          {sports.headline}
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sports.list.map((sport, i) => (
            <SportCard key={sport.key} sport={sport} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
