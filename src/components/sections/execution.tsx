"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardList,
  MapPin,
  Settings2,
  Smartphone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { execution } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  ClipboardList,
  MapPin,
  Settings2,
  Smartphone,
  Sparkles,
  Users,
};

export function Execution() {
  return (
    <section className="relative bg-jet py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading className="font-display max-w-4xl text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl">
          {execution.headline}
        </SectionHeading>
        <p className="mt-5 max-w-xl text-sm font-semibold uppercase tracking-wide text-off-white/50 sm:text-base">
          {execution.subheadline}
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {execution.capabilities.map((cap, i) => {
            const Icon = icons[cap.icon];
            return (
              <motion.div
                key={cap.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-volt/50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-volt text-pure-black transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-tight text-off-white">
                  {cap.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {execution.sponsorActivations.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
