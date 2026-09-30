import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { refundPolicy } from "@/data/content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation terms for Second Shift event registrations, corporate events and private tournaments.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title={refundPolicy.title}
      intro={refundPolicy.intro}
      sections={refundPolicy.sections}
      activeHref="/refund-policy"
    />
  );
}
