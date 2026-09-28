"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SlantedTag } from "@/components/ui/slanted-tag";
import { RevealImage } from "@/components/ui/reveal-image";
import { useParallaxY } from "@/hooks/use-parallax-y";
import { about } from "@/data/content";

export function About() {
  const wall = useParallaxY<HTMLDivElement>(24);
  const goalkeeper = useParallaxY<HTMLDivElement>(16);
  const huddle = useParallaxY<HTMLDivElement>(16);

  return (
    <section id="about" className="relative overflow-hidden bg-jet py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="flex flex-col gap-6">
          <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl">
            {about.headline}
          </SectionHeading>
          <p className="max-w-lg text-base leading-relaxed text-off-white/70 sm:text-lg">
            {about.body}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
            <RevealImage
              ref={wall.ref}
              parallaxY={wall.y}
              src={about.images.teamSponsorWall.src}
              alt={about.images.teamSponsorWall.alt}
              className="h-[120%] w-full -translate-y-[8%]"
            />
            <div className="absolute bottom-3 left-3 z-10 sm:bottom-4 sm:left-4">
              <SlantedTag>{about.tag}</SlantedTag>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-volt">
            <RevealImage
              ref={goalkeeper.ref}
              parallaxY={goalkeeper.y}
              src={about.images.goalkeeper.src}
              alt={about.images.goalkeeper.alt}
              className="h-[120%] w-full -translate-y-[8%]"
            />
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <RevealImage
              ref={huddle.ref}
              parallaxY={huddle.y}
              src={about.images.teamHuddle.src}
              alt={about.images.teamHuddle.alt}
              className="h-[120%] w-full -translate-y-[8%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
