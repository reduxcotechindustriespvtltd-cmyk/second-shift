import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlantedTag } from "@/components/ui/slanted-tag";
import { SlashMark } from "@/components/ui/slash-mark";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GalleryLightbox } from "@/components/league/gallery-lightbox";
import { CtaContact } from "@/components/sections/cta-contact";
import { league, sports, hero } from "@/data/content";

export const metadata: Metadata = {
  title: "The Sunday League",
  description:
    "Rajasthan's leading multi-sport amateur league — Football, Cricket & Pickleball, built for working professionals. 15-week seasons, live fixtures and a community that keeps showing up.",
};

export default function LeaguePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jet pb-16 pt-32 sm:pt-40">
        <SlashMark className="absolute right-6 top-24 sm:right-10" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SlantedTag className="mx-auto mb-6 w-fit">{hero.tag}</SlantedTag>
          <SectionHeading
            as="h1"
            align="center"
            className="font-display mx-auto text-5xl font-black uppercase leading-[0.92] text-off-white sm:text-7xl"
          >
            {league.headline}
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-base text-off-white/70 sm:text-lg">
            {league.subheadline}
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="#register">Join the League</MagneticButton>
          </div>
        </div>
      </section>

      <section className="bg-jet py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {sports.list.map((sport) => (
              <div key={sport.key} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={sport.image.src}
                  alt={sport.image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-transparent to-transparent" />
                <span className="font-display absolute bottom-4 left-4 text-2xl font-black uppercase text-off-white">
                  {sport.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grain bg-pure-black py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading className="font-display text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl lg:text-5xl">
              {league.format.headline}
            </SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-off-white/70">{league.format.body}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {league.format.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-off-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-volt" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="register" className="bg-jet py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-14 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            How To Register
          </SectionHeading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {league.registerSteps.map((step) => (
              <div key={step.step} className="flex flex-col gap-3">
                <span className="font-display text-5xl font-black text-volt">{step.step}</span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-off-white">
                  {step.title}
                </h3>
                <p className="text-sm text-off-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-jet py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-12 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            Gallery
          </SectionHeading>
          <GalleryLightbox />
        </div>
      </section>

      <CtaContact />
    </>
  );
}
