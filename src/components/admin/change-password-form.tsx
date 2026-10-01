"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function ChangePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setStatus("saving");
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setStatus("error");
      return;
    }

    setPassword("");
    setConfirm("");
    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          New Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setStatus("idle");
          }}
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-off-white outline-none transition-colors focus:border-volt"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="confirm" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Confirm Password
        </label>
        <input
          id="confirm"
          type="password"
          required
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setStatus("idle");
          }}
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-off-white outline-none transition-colors focus:border-volt"
        />
      </div>

      {error && <p className="text-xs text-signal-orange">{error}</p>}
      {status === "success" && (
        <p className="text-xs text-emerald-400">Password updated successfully.</p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="mt-2 flex w-fit items-center justify-center gap-2 rounded-full bg-volt px-6 py-3 text-xs font-bold uppercase tracking-wide text-pure-black transition-opacity disabled:opacity-70"
      >
        {status === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "saving" ? "Saving..." : "Update Password"}
      </button>
    </form>
  );
}
