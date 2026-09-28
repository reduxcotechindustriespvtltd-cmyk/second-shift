import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Sports } from "@/components/sections/sports";
import { Execution } from "@/components/sections/execution";
import { Experience } from "@/components/sections/experience";
import { CorporateSection } from "@/components/sections/corporate-section";
import { DigitalLayer } from "@/components/sections/digital-layer";
import { SocialProof } from "@/components/sections/social-proof";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaContact } from "@/components/sections/cta-contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Sports />
      <Execution />
      <Experience />
      <CorporateSection />
      <DigitalLayer />
      <SocialProof />
      <Partners />
      <Testimonials />
      <CtaContact />
    </>
  );
}
