import type { Metadata } from "next";
import { Unbounded, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { IntroLoader } from "@/components/intro-loader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";
import { site } from "@/data/content";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultTitle = "Second Shift";
const defaultDescription =
  "Curated sporting experiences that bring employees together, encourage engagement and strengthen workplace connections";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s | Second Shift",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  keywords: [
    "sports events company",
    "corporate sports events",
    "corporate sports event management",
    "sports event management company",
    "corporate sports tournaments",
    "sports event company in Jaipur",
    "corporate sports events in Jaipur",
    "sports event management in Rajasthan",
    "corporate team building activities in Jaipur",
    "sports tournaments in Jaipur",
    "employee engagement activities",
    "corporate sports day",
    "inter-company sports tournaments",
    "sports league organisers",
    "sports event planning and execution",
    "sports brand activations",
    "private sports tournament management",
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: site.url,
    siteName: "Second Shift",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Second Shift",
  description: defaultDescription,
  url: site.url,
  telephone: site.phone,
  sport: ["Football", "Cricket", "Pickleball", "Padel"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: "Jaipur, Rajasthan, India",
  sameAs: [site.instagram, site.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-jet font-sans text-off-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <IntroLoader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
