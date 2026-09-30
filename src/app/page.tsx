import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MoreThanSport } from "@/components/sections/more-than-sport";
import { Stats } from "@/components/sections/stats";
import { SocialProof } from "@/components/sections/social-proof";
import { Partners } from "@/components/sections/partners";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MoreThanSport />
      <Stats />
      <SocialProof />
      <Partners />
    </>
  );
}
