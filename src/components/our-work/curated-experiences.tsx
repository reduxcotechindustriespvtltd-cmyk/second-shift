"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ourWork } from "@/data/content";

export function CuratedExperiences() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {ourWork.curatedExperiences.map((item, i) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-tight text-off-white sm:text-xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-off-white/60">{item.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
