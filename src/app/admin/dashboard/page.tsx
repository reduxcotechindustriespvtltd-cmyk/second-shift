import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Users, CalendarClock, TrendingUp } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { LeadsChart } from "@/components/admin/leads-chart";

export const metadata: Metadata = {
  title: "Overview",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function startOfWeek() {
  const d = new Date();
  const diff = (d.getDay() + 6) % 7; // days since Monday
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function last14DaysRange() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - 13);
  return d.toISOString();
}

function buildDailyCounts(timestamps: string[]) {
  const days: { date: string; label: string; count: number }[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() - 13);

  for (let i = 0; i < 14; i++) {
    const key = cursor.toISOString().slice(0, 10);
    days.push({
      date: key,
      label: cursor.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
      count: 0,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  const byDay = new Map(days.map((d) => [d.date, d]));
  for (const ts of timestamps) {
    const key = ts.slice(0, 10);
    const bucket = byDay.get(key);
    if (bucket) bucket.count += 1;
  }

  return days;
}

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [{ count: total }, { count: today }, { count: week }, { data: recent }, { data: trendRows }] =
    await Promise.all([
      supabase.from("leads").select("*", { count: "exact", head: true }),
      supabase.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfToday()),
      supabase.from("leads").select("*", { count: "exact", head: true }).gte("created_at", startOfWeek()),
      supabase
        .from("leads")
        .select("id, name, email, interest, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase.from("leads").select("created_at").gte("created_at", last14DaysRange()),
    ]);

  const stats = [
    { label: "Total Leads", value: total ?? 0, icon: Users },
    { label: "Today", value: today ?? 0, icon: CalendarClock },
    { label: "This Week", value: week ?? 0, icon: TrendingUp },
  ];

  const dailyCounts = buildDailyCounts((trendRows ?? []).map((r) => r.created_at));

  return (
    <div>
      <h1 className="font-display text-2xl font-black uppercase text-off-white sm:text-3xl">
        Overview
      </h1>
      <p className="mt-1 text-sm text-off-white/50">
        A snapshot of enquiries coming through the site.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-off-white/50">
                {label}
              </span>
              <Icon className="h-4 w-4 text-volt" />
            </div>
            <p className="font-display mt-3 text-3xl font-black text-off-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-off-white/60">
          Leads — Last 14 Days
        </h2>
        <div className="mt-4">
          <LeadsChart data={dailyCounts} />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-off-white/60">
            Recent Leads
          </h2>
          <Link
            href="/admin/dashboard/leads"
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-volt hover:underline"
          >
            View all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          {!recent || recent.length === 0 ? (
            <div className="px-8 py-12 text-center text-sm text-off-white/50">No leads yet.</div>
          ) : (
            <ul className="divide-y divide-white/5">
              {recent.map((lead) => (
                <li
                  key={lead.id}
                  className="flex items-center justify-between gap-4 px-5 py-4 text-sm"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-off-white">{lead.name}</p>
                    <p className="truncate text-xs text-off-white/50">
                      {lead.email} · {lead.interest}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-off-white/40">
                    {new Date(lead.created_at).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
