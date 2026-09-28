import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ContactForm } from "@/components/contact-form";

export function CtaContact() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-pure-black py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <SectionHeading
          align="center"
          className="font-display mx-auto text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-6xl lg:text-7xl"
        >
          READY TO PLAY YOUR SECOND SHIFT?
        </SectionHeading>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          <MagneticButton href="/league" className="w-full">
            Join the Sunday League
          </MagneticButton>
          <MagneticButton href="/corporate" variant="outline" className="w-full text-off-white">
            Host a Corporate Event
          </MagneticButton>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
