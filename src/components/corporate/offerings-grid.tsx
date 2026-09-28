"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { corporate } from "@/data/content";

export function OfferingsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {corporate.offerings.map((offering, i) => (
        <motion.div
          key={offering.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={offering.image.src}
              alt={offering.image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="font-display text-base font-bold uppercase leading-tight text-warm-gold sm:text-lg">
              {offering.title}
            </h3>
            <p className="text-sm text-off-white/70">{offering.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
