import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen bg-pure-black text-off-white">
      <AdminSidebar email={user?.email ?? ""} />
      <main className="min-w-0 flex-1 overflow-x-hidden px-6 pb-10 pt-20 sm:px-10 sm:pt-10">
        {children}
      </main>
    </div>
  );
}
