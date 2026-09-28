import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { partners } from "@/data/content";

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-pure-black p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:h-28 sm:w-52">
      <div className="relative h-full w-full">
        <Image src={logo} alt={name} fill className="object-contain" sizes="200px" />
      </div>
    </div>
  );
}

export function Partners() {
  const row1 = partners.list.slice(0, 5);
  const row2 = partners.list.slice(5);

  return (
    <section id="partners" className="relative overflow-hidden bg-volt py-24 text-pure-black sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
          {partners.headline}
        </SectionHeading>
        <p className="mt-3 text-sm font-bold uppercase tracking-widest text-pure-black/60 sm:text-base">
          {partners.subheadline}
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <Marquee>
          {row1.map((p) => (
            <LogoCard key={p.name} {...p} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row2.map((p) => (
            <LogoCard key={p.name} {...p} />
          ))}
        </Marquee>
      </div>

      <p className="mt-14 text-center text-xs font-bold uppercase tracking-[0.2em] text-pure-black/50 sm:text-sm">
        {partners.footerLine}
      </p>
    </section>
  );
}
