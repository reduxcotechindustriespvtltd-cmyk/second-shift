import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { founders } from "@/data/content";

export function Founders() {
  return (
    <section className="relative bg-jet py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl">
            {founders.headline}
          </SectionHeading>
          <p className="mt-5 text-base font-medium text-off-white/70 sm:text-lg">
            {founders.subline}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {founders.list.map((founder) => (
            <div key={founder.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={founder.image.src}
                  alt={founder.image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-5 text-xl font-bold uppercase tracking-tight text-off-white sm:text-2xl">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-volt">
                {founder.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
