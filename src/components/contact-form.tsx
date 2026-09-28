"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactForm } from "@/data/content";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  teamSize: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  teamSize: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-off-white placeholder:text-off-white/30 outline-none transition-colors focus:border-volt";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.interest) next.interest = "Please select an interest.";
    if (!values.message.trim()) next.message = "Tell us a little about your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-volt/30 bg-volt/5 px-8 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-volt" />
        <h3 className="font-display text-2xl font-black uppercase text-off-white">
          Message Sent
        </h3>
        <p className="max-w-sm text-sm text-off-white/60">
          Thanks for reaching out — the Second Shift team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-semibold uppercase tracking-wide text-volt underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Name *
        </label>
        <input id="name" value={values.name} onChange={update("name")} className={inputClasses} />
        {errors.name && <p className="text-xs text-signal-orange">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Company
        </label>
        <input id="company" value={values.company} onChange={update("company")} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={update("email")}
          className={inputClasses}
        />
        {errors.email && <p className="text-xs text-signal-orange">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Phone *
        </label>
        <input id="phone" type="tel" value={values.phone} onChange={update("phone")} className={inputClasses} />
        {errors.phone && <p className="text-xs text-signal-orange">{errors.phone}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Interest *
        </label>
        <select
          id="interest"
          value={values.interest}
          onChange={update("interest")}
          className={inputClasses}
        >
          <option value="">Select an option</option>
          {contactForm.interests.map((i) => (
            <option key={i} value={i} className="bg-jet">
              {i}
            </option>
          ))}
        </select>
        {errors.interest && <p className="text-xs text-signal-orange">{errors.interest}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="teamSize" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Team Size
        </label>
        <input id="teamSize" value={values.teamSize} onChange={update("teamSize")} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-off-white/60">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          className={inputClasses}
        />
        {errors.message && <p className="text-xs text-signal-orange">{errors.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-volt px-8 py-4 text-sm font-bold uppercase tracking-wide text-pure-black transition-opacity disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-3 text-xs text-signal-orange"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
