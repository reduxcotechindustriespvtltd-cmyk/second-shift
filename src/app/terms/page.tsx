import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Second Shift website, digital platform and services — Sporting Revolution Ventures LLP.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={termsOfUse.title}
      intro={termsOfUse.intro}
      sections={termsOfUse.sections}
      activeHref="/terms"
    />
  );
}
