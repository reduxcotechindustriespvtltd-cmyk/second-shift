import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlashMark } from "@/components/ui/slash-mark";
import { About } from "@/components/sections/about";
import { Execution } from "@/components/sections/execution";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { moreThanSport } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Second Shift is a sports events and experiences company in Jaipur, Rajasthan. Our story, how we curate and execute every event end-to-end, and what players and partners say about us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jet pb-16 pt-32 sm:pt-40">
        <SlashMark className="absolute right-6 top-24 sm:right-10" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-off-white/40 sm:text-sm">
            {moreThanSport.eyebrow}
          </span>
          <SectionHeading
            as="h1"
            align="center"
            className="font-display mx-auto text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-6xl"
          >
            About Second Shift
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-base text-off-white/70 sm:text-lg">
            {moreThanSport.body}
          </p>
        </div>
      </section>

      <About />
      <Execution />
      <Experience />
      <Testimonials />
    </>
  );
}
