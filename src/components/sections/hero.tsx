"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlantedTag } from "@/components/ui/slanted-tag";
import { SlashMark } from "@/components/ui/slash-mark";
import { Marquee } from "@/components/ui/marquee";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-jet">
      <div className="relative grid flex-1 lg:grid-cols-2">
        {/* Left: volt panel with headline */}
        <div className="relative flex flex-col justify-center gap-6 bg-volt px-6 pb-16 pt-28 text-pure-black sm:px-10 lg:px-14 lg:pb-10">
          <SlashMark className="absolute right-6 top-24 sm:right-10 sm:top-28" color="black" />

          <SectionHeading
            as="h1"
            className="font-display text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[5vw] xl:text-[4.6rem]"
          >
            {hero.headline.join(" ")}
          </SectionHeading>

          <p className="max-w-md text-base font-medium text-pure-black/80 sm:text-lg">
            {hero.subheadline}
          </p>

          <SlantedTag className="w-fit">{hero.tag}</SlantedTag>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </MagneticButton>
            <MagneticButton
              href={hero.ctaSecondary.href}
              variant="outline"
              className="text-pure-black"
            >
              {hero.ctaSecondary.label}
            </MagneticButton>
          </div>
        </div>

        {/* Right: full-bleed action photo, diagonally clipped on desktop */}
        <div
          className="relative min-h-[45vh] lg:min-h-0"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-0 lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-jet/20" />
          </div>
          <SlashMark className="absolute right-6 top-24 hidden sm:flex sm:top-28" />
        </div>
      </div>

      {/* Infinite marquee strip */}
      <div className="border-y border-white/10 bg-pure-black py-4">
        <Marquee>
          {hero.marquee.map((word, i) => (
            <span
              key={i}
              className="font-display mx-4 flex items-center gap-4 text-lg font-bold uppercase tracking-wide text-volt sm:text-2xl"
            >
              {word}
              <SlashMark bars={4} className="scale-75" />
            </span>
          ))}
        </Marquee>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-off-white/50 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
