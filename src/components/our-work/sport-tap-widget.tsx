"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { sports } from "@/data/content";

/** Tap a sport to swap the featured photo and description below. */
export function SportTapWidget() {
  const [activeKey, setActiveKey] = useState(sports.list[0].key);
  const active = sports.list.find((s) => s.key === activeKey) ?? sports.list[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {sports.list.map((sport) => (
          <button
            key={sport.key}
            type="button"
            onClick={() => setActiveKey(sport.key)}
            className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
              sport.key === activeKey
                ? "border-volt bg-volt text-pure-black"
                : "border-white/15 text-off-white/70 hover:border-white/30"
            }`}
          >
            {sport.name}
          </button>
        ))}
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={active.image.src}
              alt={active.image.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-pure-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <h3 className="font-display text-3xl font-black uppercase text-off-white sm:text-4xl">
                {active.name}
              </h3>
              <p className="mt-2 max-w-md text-sm text-off-white/80 sm:text-base">
                {active.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
