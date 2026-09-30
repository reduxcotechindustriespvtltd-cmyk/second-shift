"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const CONSENT_KEY = "second-shift:cookie-consent";

/** Simple cookie-consent banner — shows once until the visitor accepts or declines. */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-2xl border border-white/10 bg-pure-black/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:inset-x-auto sm:left-4 sm:max-w-md sm:flex-row sm:items-center sm:p-6"
        >
          <p className="text-sm leading-relaxed text-off-white/70">
            We use cookies to run this site and understand how it&apos;s used. See our{" "}
            <Link href="/cookie-policy" className="text-volt underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => choose("declined")}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-off-white/70 transition-colors hover:border-white/30"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="rounded-full bg-volt px-5 py-2 text-xs font-bold uppercase tracking-wide text-pure-black transition-opacity hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
