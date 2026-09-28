import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlashMark } from "@/components/ui/slash-mark";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { OfferingsGrid } from "@/components/corporate/offerings-grid";
import { corporate } from "@/data/content";

export function CorporateSection() {
  return (
    <section className="grain relative overflow-hidden bg-deep-navy py-24 text-off-white sm:py-32">
      <SlashMark className="absolute right-6 top-6 sm:right-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-warm-gold px-5 py-2 text-xs font-bold uppercase tracking-widest text-pure-black">
              {corporate.label}
            </span>
            <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl">
              {corporate.headline}
            </SectionHeading>
            <p className="text-sm font-semibold uppercase tracking-widest text-off-white/50">
              Second Shift <span className="text-warm-gold">×</span> {corporate.partner}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={corporate.heroImage.src}
              alt={corporate.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <OfferingsGrid />
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 border-t border-white/10 pt-12 text-center">
          <p className="font-display max-w-2xl text-2xl font-black italic uppercase leading-tight text-warm-gold sm:text-3xl">
            &ldquo;{corporate.closingLine}&rdquo;
          </p>
          <MagneticButton href={corporate.cta.href} className="!bg-warm-gold !text-pure-black">
            {corporate.cta.label}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
