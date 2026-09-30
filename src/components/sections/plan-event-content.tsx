import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ContactForm } from "@/components/contact-form";
import { planEvent } from "@/data/content";

export function PlanEventContent() {
  return (
    <section className="grain relative overflow-hidden bg-pure-black pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <SectionHeading
          as="h1"
          align="center"
          className="font-display mx-auto text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl lg:text-6xl"
        >
          {planEvent.headline}
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-lg text-base text-off-white/60 sm:text-lg">
          {planEvent.subheadline}
        </p>

        <div className="mt-10 flex justify-center">
          <MagneticButton href={planEvent.cta.href}>{planEvent.cta.label}</MagneticButton>
        </div>
      </div>

      <div
        id="contact-form"
        className="mx-auto mt-20 max-w-3xl scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10"
      >
        <ContactForm />
      </div>
    </section>
  );
}
