import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { LeadsManager } from "@/components/admin/leads-manager";

export const metadata: Metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const supabase = await createClient();

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-2xl font-black uppercase text-off-white sm:text-3xl">
        Leads
      </h1>
      <p className="mt-1 text-sm text-off-white/50">{leads?.length ?? 0} total submissions</p>

      <div className="mt-6">
        {error ? (
          <div className="rounded-2xl border border-signal-orange/30 bg-signal-orange/5 px-8 py-16 text-center text-sm text-signal-orange">
            Could not load leads: {error.message}
          </div>
        ) : (
          <LeadsManager leads={leads ?? []} />
        )}
      </div>
    </div>
  );
}
