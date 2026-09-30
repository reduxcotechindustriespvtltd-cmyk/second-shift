import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlashMark } from "@/components/ui/slash-mark";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { OfferingsGrid } from "@/components/corporate/offerings-grid";
import { ProcessTimeline } from "@/components/corporate/process-timeline";
import { PackagesGrid } from "@/components/corporate/packages-grid";
import { FaqAccordion } from "@/components/corporate/faq-accordion";
import { ChallengeSolution } from "@/components/corporate/challenge-solution";
import { corporate } from "@/data/content";

export const metadata: Metadata = {
  title: "Corporate Sports Events & Team Building in Jaipur",
  description:
    "Corporate sports event management in Jaipur, Rajasthan — employee engagement activities, corporate sports days and inter-company tournaments, planned and executed end-to-end by Second Shift.",
  alternates: { canonical: "/corporate" },
};

export default function CorporatePage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-deep-navy pb-20 pt-32 text-off-white sm:pt-40">
        <SlashMark className="absolute right-6 top-24 sm:right-10" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-warm-gold px-5 py-2 text-xs font-bold uppercase tracking-widest text-pure-black">
              {corporate.label}
            </span>
            <SectionHeading
              as="h1"
              className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl"
            >
              {corporate.headline}
            </SectionHeading>
            <div>
              <MagneticButton href={corporate.cta.href} className="!bg-warm-gold !text-pure-black">
                {corporate.cta.label}
              </MagneticButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={corporate.heroImage.src}
              alt={corporate.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
          <ChallengeSolution />
        </div>
      </section>

      <section className="bg-deep-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-12 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            What&apos;s Included
          </SectionHeading>
          <OfferingsGrid />
        </div>
      </section>

      <section className="bg-jet py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-14 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            Consult. Plan. Execute. Capture. Celebrate.
          </SectionHeading>
          <ProcessTimeline />
        </div>
      </section>

      <section className="bg-deep-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-4 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            Packages
          </SectionHeading>
          <p className="mb-12 max-w-xl text-sm text-off-white/50">
            Every league is tailored, but here&apos;s the shape most companies choose from.
            {/* TODO: confirm final pricing for each package */}
          </p>
          <PackagesGrid />
        </div>
      </section>

      <section className="bg-jet py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading className="font-display mb-12 max-w-3xl text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-4xl">
            Frequently Asked
          </SectionHeading>
          <FaqAccordion />
        </div>
      </section>

      <section className="bg-deep-navy py-20 text-center sm:py-28">
        <p className="font-display mx-auto max-w-3xl px-5 text-2xl font-black italic uppercase leading-tight text-warm-gold sm:text-4xl">
          &ldquo;{corporate.closingLine}&rdquo;
        </p>
      </section>
    </>
  );
}
