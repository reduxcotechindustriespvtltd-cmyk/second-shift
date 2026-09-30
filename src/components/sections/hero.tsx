"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlantedTag } from "@/components/ui/slanted-tag";
import { SlashMark } from "@/components/ui/slash-mark";
import { Marquee } from "@/components/ui/marquee";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { hero } from "@/data/content";

const SLIDE_DURATION = 5000;

function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const slide = hero.slides[index];

  return (
    <div className="absolute inset-0 lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_20%]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-jet/20" />

      <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="font-display rounded-full bg-pure-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-volt backdrop-blur-sm sm:text-sm"
          >
            {slide.label}
          </motion.span>
        </AnimatePresence>

        <div className="flex items-center gap-1.5">
          {hero.slides.map((s, i) => (
            <span
              key={s.label}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-5 bg-volt" : "w-1.5 bg-off-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-jet">
      <div className="relative grid flex-1 lg:grid-cols-2">
        {/* Left: volt panel with headline */}
        <div className="relative flex flex-col justify-center gap-6 bg-volt px-6 pb-16 pt-28 text-pure-black sm:px-10 lg:px-14 lg:pb-10">
          <SlashMark className="absolute right-6 top-24 sm:right-10 sm:top-28" color="black" />

          <SectionHeading
            as="h1"
            className="font-display text-[11vw] font-black uppercase leading-[0.95] tracking-tight sm:text-[7vw] lg:text-[4vw] xl:text-[3.75rem]"
          >
            {hero.headline.join(" ")}
          </SectionHeading>

          <p className="max-w-md text-sm font-medium text-pure-black/80 sm:text-base lg:text-lg">
            {hero.subheadline}
          </p>

          <SlantedTag className="w-fit">{hero.tag}</SlantedTag>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton href={hero.cta.href}>{hero.cta.label}</MagneticButton>
          </div>
        </div>

        {/* Right: full-bleed action photo, diagonally clipped on desktop */}
        <div
          className="relative min-h-[45vh] lg:min-h-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <HeroSlideshow />
          <SlashMark className="absolute right-6 top-24 hidden sm:flex sm:top-28" />
        </div>
      </div>

      {/* Infinite marquee strip */}
      <div className="border-y border-white/10 bg-pure-black py-3 sm:py-4">
        <Marquee>
          {hero.marquee.map((word, i) => (
            <span
              key={i}
              className="font-display mx-4 flex items-center gap-4 text-sm font-bold uppercase tracking-wide text-volt sm:text-xl"
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
