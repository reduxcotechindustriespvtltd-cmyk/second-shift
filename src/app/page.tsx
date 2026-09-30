import { Hero } from "@/components/sections/hero";
import { MoreThanSport } from "@/components/sections/more-than-sport";
import { Stats } from "@/components/sections/stats";
import { SocialProof } from "@/components/sections/social-proof";
import { Partners } from "@/components/sections/partners";

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
