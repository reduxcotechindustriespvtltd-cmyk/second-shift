import type { Metadata } from "next";
import { DashboardContent } from "@/components/sections/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard — The Second Shift Web App",
  description:
    "Live fixtures, leaderboards, scoring, match results, individual stats and player profiles — the digital layer behind every Second Shift league.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
