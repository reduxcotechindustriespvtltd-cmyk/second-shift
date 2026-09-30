"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { corporate } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function PackagesGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {corporate.packages.map((pkg, i) => (
        <motion.div
          key={pkg.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col gap-5 rounded-2xl border p-8 ${
            i === 1
              ? "border-warm-gold bg-warm-gold/[0.06]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-warm-gold">
              {pkg.tier}
            </span>
            <h3 className="font-display mt-1 text-2xl font-black uppercase text-off-white">
              {pkg.name}
            </h3>
          </div>

          {pkg.includesNote && (
            <p className="text-sm font-semibold text-off-white/70">{pkg.includesNote}</p>
          )}

          <div className="flex flex-1 flex-col gap-5">
            {pkg.categories.map((category) => (
              <div key={category.title}>
                <h4 className="text-xs font-bold uppercase tracking-wide text-off-white/50">
                  {category.title}
                </h4>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-off-white/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warm-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {pkg.note && (
            <p className="rounded-xl bg-white/5 p-4 text-xs italic text-off-white/60">{pkg.note}</p>
          )}

          <MagneticButton
            href="/plan-your-event"
            className="mt-2 w-full !bg-warm-gold !text-pure-black"
          >
            Enquire
          </MagneticButton>
        </motion.div>
      ))}
    </div>
  );
}
