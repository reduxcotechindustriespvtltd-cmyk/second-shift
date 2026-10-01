"use client";

import { usePathname } from "next/navigation";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { IntroLoader } from "@/components/intro-loader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";

/** Marketing chrome (navbar, footer, cursor, intro, etc.) is skipped for /admin — it runs its own sidebar layout. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <IntroLoader />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </SmoothScroll>
  );
}
