import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { SlashMark } from "@/components/ui/slash-mark";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-pure-black py-24 text-off-white sm:py-32">
      <SlashMark className="absolute left-6 top-6 sm:left-10" />
      <SlashMark className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl">
            {experience.headline}
          </SectionHeading>
          <p className="mt-5 text-base font-medium text-off-white/70 sm:text-lg">
            {experience.subline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          <div className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 lg:aspect-auto">
            <Image
              src={experience.images.action.src}
              alt={experience.images.action.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl border-2 border-volt sm:col-span-1 lg:col-span-3">
            <Image
              src={experience.images.trophy.src}
              alt={experience.images.trophy.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute -right-2 -top-2 sm:right-4 sm:top-4">
              <StickerBadge color="navy">{experience.badge}</StickerBadge>
            </div>
          </div>

          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl sm:col-span-1 lg:col-span-3">
            <Image
              src={experience.images.cricketChat.src}
              alt={experience.images.cricketChat.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
