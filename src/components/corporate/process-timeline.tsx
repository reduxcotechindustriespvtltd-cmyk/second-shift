"use client";

import { motion } from "framer-motion";
import { corporate } from "@/data/content";

export function ProcessTimeline() {
  return (
    <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block"
      />
      {corporate.process.map((step, i) => (
        <motion.div
          key={step.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-3"
        >
          <span className="font-display flex h-12 w-12 items-center justify-center rounded-full border border-warm-gold bg-deep-navy text-sm font-black text-warm-gold">
            {step.key === "consult"
              ? "01"
              : step.key === "plan"
                ? "02"
                : step.key === "execute"
                  ? "03"
                  : step.key === "capture"
                    ? "04"
                    : "05"}
          </span>
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-off-white">
            {step.title}
          </h3>
          <p className="text-sm text-off-white/60">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
