import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookiePolicy } from "@/data/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Second Shift uses cookies and similar technologies on our website, and how to manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title={cookiePolicy.title}
      intro={cookiePolicy.intro}
      sections={cookiePolicy.sections}
      activeHref="/cookie-policy"
    />
  );
}
