"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { AppStoreBadge, GooglePlayBadge } from "@/components/ui/store-badges";
import { dashboard, appDownload } from "@/data/content";

function FloatingPhone({
  src,
  alt,
  rotate,
  index,
}: {
  src: string;
  alt: string;
  rotate: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -30 : 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <PhoneMockup>
        <div className="relative h-full w-full">
          <Image src={src} alt={alt} fill sizes="270px" className="object-cover" />
        </div>
      </PhoneMockup>
    </motion.div>
  );
}

export function DashboardContent() {
  return (
    <section className="grain relative overflow-hidden bg-pure-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading
              as="h1"
              className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl"
            >
              {dashboard.headline}
            </SectionHeading>
            <ul className="flex flex-wrap gap-3">
              {dashboard.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-off-white/70"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <AppStoreBadge href={appDownload.ios} />
              <GooglePlayBadge href={appDownload.android} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="hidden sm:-mr-8 sm:mt-10 sm:block">
              <FloatingPhone
                src={dashboard.screenshots[1].src}
                alt={dashboard.screenshots[1].alt}
                rotate={-8}
                index={0}
              />
            </div>
            <div className="z-10">
              <FloatingPhone
                src={dashboard.screenshots[0].src}
                alt={dashboard.screenshots[0].alt}
                rotate={0}
                index={1}
              />
            </div>
            <div className="hidden sm:-ml-8 sm:mt-10 sm:block">
              <FloatingPhone
                src={dashboard.screenshots[2].src}
                alt={dashboard.screenshots[2].alt}
                rotate={8}
                index={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
