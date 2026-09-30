import { SectionHeading } from "@/components/ui/section-heading";
import { moreThanSport } from "@/data/content";

export function MoreThanSport() {
  return (
    <section className="bg-jet py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-off-white/40 sm:text-sm">
          {moreThanSport.eyebrow}
        </span>
        <SectionHeading
          align="center"
          className="font-display mx-auto text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl"
        >
          {moreThanSport.headline}
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 sm:text-lg">
          {moreThanSport.body}
        </p>
      </div>
    </section>
  );
}
