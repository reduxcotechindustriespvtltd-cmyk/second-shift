import type { Metadata } from "next";
import { PlanEventContent } from "@/components/sections/plan-event-content";

export const metadata: Metadata = {
  title: "Let's Plan Your Event",
  description:
    "Host a corporate sports event, private league, tournament or sports entertainment experience with Second Shift — Jaipur's sports event planning and execution team.",
};

export default function PlanYourEventPage() {
  return <PlanEventContent />;
}
