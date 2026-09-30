import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlantedTag } from "@/components/ui/slanted-tag";
import { SlashMark } from "@/components/ui/slash-mark";
import { SportTapWidget } from "@/components/our-work/sport-tap-widget";
import { CuratedExperiences } from "@/components/our-work/curated-experiences";
import { GalleryLightbox } from "@/components/our-work/gallery-lightbox";
import { ourWork } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Work — Sports League Organisers in Jaipur",
  description:
    "Our recent sports events: the Sunday League — Curating sports experiences that bring people together — plus the Padel Open, a Round Table India cricket league and sports screening experiences curated by Second Shift.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jet pb-16 pt-32 sm:pt-40">
        <SlashMark className="absolute right-6 top-24 sm:right-10" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SlantedTag className="mx-auto mb-6 w-fit">{ourWork.topHeadline}</SlantedTag>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-off-white/40 sm:text-sm">
            Our Flagship
          </span>
          <SectionHeading
            as="h1"
            align="center"
            className="font-display mx-auto text-5xl font-black uppercase leading-[0.92] text-off-white sm:text-7xl"
          >
            {ourWork.headline}
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-base text-off-white/70 sm:text-lg">
            {ourWork.subheadline}
          </p>
        </div>
      </section>

      <section className="bg-jet pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SportTapWidget />
        </div>
      </section>

      <section className="grain bg-pure-black py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading className="font-display text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl lg:text-5xl">
              {ourWork.format.headline}
            </SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-off-white/70">{ourWork.format.body}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {ourWork.format.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-off-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-volt" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-jet py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-14 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            More Events We&apos;ve Curated
          </SectionHeading>
          <CuratedExperiences />
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
    </>
  );
}
