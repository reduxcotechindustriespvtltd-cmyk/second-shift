"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const SESSION_KEY = "second-shift:intro-seen";

/** Short branded intro shown once per session — logo draws in, then a volt wipe reveals the site. */
export function IntroLoader() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) return;

    sessionStorage.setItem(SESSION_KEY, "1");

    // Deferred a tick so this isn't a same-frame setState-in-effect: the
    // decision to show depends on reading sessionStorage (an external,
    // client-only source), so it can't be computed during the render itself.
    const raf = requestAnimationFrame(() => setShow(true));
    const timer = setTimeout(() => setDone(true), 1400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [prefersReducedMotion]);

  if (!show) return null;

  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {!done && (
        <motion.div
          role="presentation"
          onClick={() => setDone(true)}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[999] flex cursor-pointer items-center justify-center bg-volt"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo wordmarkColor="text-pure-black" className="scale-150" />
          </motion.div>
          <span className="absolute bottom-8 text-[10px] font-semibold uppercase tracking-widest text-pure-black/50">
            Tap to skip
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
