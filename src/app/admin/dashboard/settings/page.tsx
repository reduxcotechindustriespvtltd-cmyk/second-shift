import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { ChangePasswordForm } from "@/components/admin/change-password-form";

export const metadata: Metadata = {
  title: "Settings",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1 className="font-display text-2xl font-black uppercase text-off-white sm:text-3xl">
        Settings
      </h1>
      <p className="mt-1 text-sm text-off-white/50">Signed in as {user?.email}</p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-off-white/60">
          Change Password
        </h2>
        <div className="mt-5">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
