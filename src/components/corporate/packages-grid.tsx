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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col gap-5 rounded-2xl border p-8 ${
            i === 1
              ? "border-warm-gold bg-warm-gold/[0.06]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <h3 className="font-display text-2xl font-black uppercase text-off-white">
            {pkg.name}
          </h3>
          <p className="text-sm text-off-white/60">{pkg.description}</p>
          <ul className="flex flex-1 flex-col gap-3">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-off-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-warm-gold" />
                {f}
              </li>
            ))}
          </ul>
          <MagneticButton href="/corporate#contact" className="mt-2 w-full !bg-warm-gold !text-pure-black">
            Enquire
          </MagneticButton>
        </motion.div>
      ))}
    </div>
  );
}
