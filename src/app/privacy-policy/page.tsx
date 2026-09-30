import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Second Shift (Sporting Revolution Ventures LLP) collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyPolicy.title}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
      activeHref="/privacy-policy"
    />
  );
}
