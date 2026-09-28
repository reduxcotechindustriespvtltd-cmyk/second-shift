import type { Metadata } from "next";
import { Unbounded, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { IntroLoader } from "@/components/intro-loader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Second Shift | Corporate Sports & Sunday League, Rajasthan",
    template: "%s | Second Shift",
  },
  description:
    "Rajasthan's leading multi-sport amateur league for working professionals. Football, Cricket & Pickleball leagues and end-to-end corporate sports experiences.",
  keywords: [
    "Second Shift",
    "corporate sports Rajasthan",
    "Sunday League",
    "amateur football league",
    "corporate sports events India",
    "pickleball league Rajasthan",
  ],
  openGraph: {
    title: "Second Shift | Corporate Sports & Sunday League, Rajasthan",
    description:
      "Rajasthan's leading multi-sport amateur league for working professionals. Football, Cricket & Pickleball leagues and end-to-end corporate sports experiences.",
    url: site.url,
    siteName: "Second Shift",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Shift | Corporate Sports & Sunday League, Rajasthan",
    description:
      "Rajasthan's leading multi-sport amateur league for working professionals.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Second Shift",
  description:
    "Rajasthan's leading multi-sport amateur league for working professionals, and end-to-end corporate sports experiences.",
  url: site.url,
  sport: ["Football", "Cricket", "Pickleball"],
  areaServed: "Rajasthan, India",
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
        </SmoothScroll>
      </body>
    </html>
  );
}
