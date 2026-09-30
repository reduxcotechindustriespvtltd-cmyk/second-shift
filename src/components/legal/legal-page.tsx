import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { legalMeta, footerLinks } from "@/data/content";

type LegalSection = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  sections,
  activeHref,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  activeHref: string;
}) {
  return (
    <section className="bg-jet pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          as="h1"
          className="font-display text-3xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl"
        >
          {title}
        </SectionHeading>
        <p className="mt-4 text-sm text-off-white/50">
          {legalMeta.entity} · Effective Date: {legalMeta.effectiveDate}
        </p>
        <p className="mt-6 text-base leading-relaxed text-off-white/70">{intro}</p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/10 py-4 text-sm">
          {footerLinks.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === activeHref ? "page" : undefined}
              className="text-off-white/60 transition-colors hover:text-volt aria-[current=page]:text-volt"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-warm-gold">
                {s.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-off-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
