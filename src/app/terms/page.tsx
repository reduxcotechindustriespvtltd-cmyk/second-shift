import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { terms } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms & Privacy",
  description:
    "Terms of use, privacy policy, and refund & cancellation policy for Second Shift (Sporting Revolution Ventures LLP).",
};

export default function TermsPage() {
  return (
    <section className="bg-jet pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          as="h1"
          className="font-display text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl"
        >
          Terms &amp; Privacy
        </SectionHeading>
        <p className="mt-4 text-sm text-off-white/50">
          {terms.entity} · Effective Date: {terms.effectiveDate}
        </p>
        <p className="mt-6 text-base leading-relaxed text-off-white/70">{terms.intro}</p>

        {terms.groups.map((group) => (
          <div key={group.title} className="mt-16 border-t border-white/10 pt-12">
            <h2 className="font-display text-2xl font-black uppercase text-off-white sm:text-3xl">
              {group.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-off-white/60">{group.intro}</p>

            <div className="mt-8 flex flex-col gap-8">
              {group.sections.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-warm-gold">
                    {s.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-off-white/60">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
