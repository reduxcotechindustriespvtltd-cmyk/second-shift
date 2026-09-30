"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Pin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialProof } from "@/data/content";

export function SocialProof() {
  return (
    <section className="relative bg-jet py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-off-white/40 sm:text-sm">
          {socialProof.eyebrow}
        </span>
        <SectionHeading className="font-display mb-14 max-w-4xl text-3xl font-black uppercase leading-[1.1] text-off-white sm:text-5xl">
          {socialProof.headline}
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-3">
          {socialProof.reels.map((reel, i) => (
            <motion.a
              key={reel.key}
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-pure-black"
            >
              <Image
                src={reel.image.src}
                alt={reel.image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-pure-black/10 to-pure-black/40" />

              <Pin className="absolute right-4 top-4 h-4 w-4 -rotate-45 text-off-white/70" />

              <div className="absolute bottom-0 flex w-full flex-col gap-2 p-5">
                <span className="flex w-fit items-center gap-1.5 rounded-full bg-pure-black/60 px-3 py-1 text-xs font-semibold text-off-white backdrop-blur-sm">
                  <Eye className="h-3.5 w-3.5" />
                  {reel.views}
                </span>
                <span className="font-display text-sm font-bold uppercase leading-tight text-off-white sm:text-base">
                  {reel.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
