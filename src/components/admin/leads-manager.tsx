"use client";

import { useMemo, useState } from "react";
import { Download, Search, Trash2, X } from "lucide-react";

export type Lead = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  interest: string;
  team_size: string | null;
  message: string;
  status: "new" | "contacted" | "converted" | "lost";
  created_at: string;
};

const STATUSES: Lead["status"][] = ["new", "contacted", "converted", "lost"];

const STATUS_STYLES: Record<Lead["status"], string> = {
  new: "bg-off-white/10 text-off-white",
  contacted: "bg-amber-400/10 text-amber-300",
  converted: "bg-emerald-400/10 text-emerald-300",
  lost: "bg-signal-orange/10 text-signal-orange",
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function toCsvValue(value: string | null) {
  const safe = (value ?? "").replace(/"/g, '""');
  return `"${safe}"`;
}

function downloadCsv(leads: Lead[]) {
  const headers = [
    "Date",
    "Name",
    "Company",
    "Email",
    "Phone",
    "Interest",
    "Team Size",
    "Status",
    "Message",
  ];
  const rows = leads.map((lead) =>
    [
      formatDate(lead.created_at),
      lead.name,
      lead.company,
      lead.email,
      lead.phone,
      lead.interest,
      lead.team_size,
      lead.status,
      lead.message,
    ]
      .map(toCsvValue)
      .join(","),
  );
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `second-shift-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function LeadsManager({ leads: initialLeads }: { leads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Lead["status"]>("all");
  const [interestFilter, setInterestFilter] = useState<"all" | string>("all");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);

  const interests = useMemo(
    () => Array.from(new Set(leads.map((lead) => lead.interest))).sort(),
    [leads],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (interestFilter !== "all" && lead.interest !== interestFilter) return false;
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        (lead.company ?? "").toLowerCase().includes(q)
      );
    });
  }, [leads, query, statusFilter, interestFilter]);

  const updateStatus = async (id: string, status: Lead["status"]) => {
    setPendingId(id);
    const previous = leads;
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));

    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) setLeads(previous);
    setPendingId(null);
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead? This can't be undone.")) return;
    setPendingId(id);
    const previous = leads;
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    setSelected((prev) => (prev && prev.id === id ? null : prev));

    const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (!res.ok) setLeads(previous);
    setPendingId(null);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-off-white/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email or company..."
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] py-2.5 pl-9 pr-4 text-sm text-off-white placeholder:text-off-white/30 outline-none transition-colors focus:border-volt"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
          className="rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2.5 text-sm text-off-white outline-none transition-colors focus:border-volt"
        >
          <option value="all" className="bg-jet">
            All statuses
          </option>
          {STATUSES.map((s) => (
            <option key={s} value={s} className="bg-jet capitalize">
              {s}
            </option>
          ))}
        </select>

        <select
          value={interestFilter}
          onChange={(e) => setInterestFilter(e.target.value)}
          className="rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2.5 text-sm text-off-white outline-none transition-colors focus:border-volt"
        >
          <option value="all" className="bg-jet">
            All interests
          </option>
          {interests.map((i) => (
            <option key={i} value={i} className="bg-jet">
              {i}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => downloadCsv(filtered)}
          className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-off-white/70 transition-colors hover:border-volt hover:text-volt"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <p className="mt-3 text-xs text-off-white/40">
        Showing {filtered.length} of {leads.length} leads
      </p>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        {filtered.length === 0 ? (
          <div className="px-8 py-16 text-center text-sm text-off-white/50">
            No leads match your filters.
          </div>
        ) : (
          <table className="w-full min-w-[960px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-wide text-off-white/50">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Interest</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  className="cursor-pointer border-b border-white/5 text-off-white/80 transition-colors hover:bg-white/[0.03]"
                >
                  <td className="whitespace-nowrap px-4 py-3 text-off-white/50">
                    {formatDate(lead.created_at)}
                  </td>
                  <td className="px-4 py-3 font-medium text-off-white">{lead.name}</td>
                  <td className="px-4 py-3">{lead.company || "—"}</td>
                  <td className="px-4 py-3">{lead.email}</td>
                  <td className="px-4 py-3">{lead.interest}</td>
                  <td className="px-4 py-3">
                    <select
                      value={lead.status}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                      disabled={pendingId === lead.id}
                      className={`rounded-full border-0 px-2.5 py-1 text-xs font-semibold capitalize outline-none ${STATUS_STYLES[lead.status]}`}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s} className="bg-jet text-off-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteLead(lead.id);
                      }}
                      disabled={pendingId === lead.id}
                      aria-label="Delete lead"
                      className="rounded-lg p-2 text-off-white/40 transition-colors hover:bg-signal-orange/10 hover:text-signal-orange"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-pure-black/70 backdrop-blur-sm"
          />
          <div className="relative flex h-full w-full max-w-md flex-col border-l border-white/10 bg-jet p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display text-xl font-black uppercase text-off-white">
                  {selected.name}
                </h2>
                <p className="mt-1 text-sm text-off-white/50">{formatDate(selected.created_at)}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg p-1.5 text-off-white/50 hover:bg-white/5 hover:text-off-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4 overflow-y-auto text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Status
                </p>
                <select
                  value={selected.status}
                  onChange={(e) => updateStatus(selected.id, e.target.value as Lead["status"])}
                  className={`mt-2 w-fit rounded-full border-0 px-3 py-1.5 text-xs font-semibold capitalize outline-none ${STATUS_STYLES[selected.status]}`}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s} className="bg-jet text-off-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Company
                </p>
                <p className="mt-1 text-off-white/80">{selected.company || "—"}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Email
                </p>
                <a href={`mailto:${selected.email}`} className="mt-1 block text-volt hover:underline">
                  {selected.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Phone
                </p>
                <a href={`tel:${selected.phone}`} className="mt-1 block text-volt hover:underline">
                  {selected.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Interest
                </p>
                <p className="mt-1 text-off-white/80">{selected.interest}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Team Size
                </p>
                <p className="mt-1 text-off-white/80">{selected.team_size || "—"}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-off-white/40">
                  Message
                </p>
                <p className="mt-1 whitespace-pre-wrap text-off-white/80">{selected.message}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => deleteLead(selected.id)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full border border-signal-orange/30 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-signal-orange transition-colors hover:bg-signal-orange/10"
            >
              <Trash2 className="h-4 w-4" />
              Delete Lead
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
