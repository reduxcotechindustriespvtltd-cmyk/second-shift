import { AlertTriangle, Lightbulb } from "lucide-react";
import { corporate } from "@/data/content";

export function ChallengeSolution() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-signal-orange">
          <AlertTriangle className="h-4 w-4" />
          {corporate.challenge.eyebrow}
        </span>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-off-white sm:text-xl">
          {corporate.challenge.heading}
        </h3>
        <p className="text-sm leading-relaxed text-off-white/60">{corporate.challenge.body}</p>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-warm-gold/30 bg-warm-gold/[0.06] p-6">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warm-gold">
          <Lightbulb className="h-4 w-4" />
          {corporate.solution.eyebrow}
        </span>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-off-white sm:text-xl">
          {corporate.solution.heading}
        </h3>
        <p className="text-sm leading-relaxed text-off-white/60">{corporate.solution.body}</p>
      </div>
    </div>
  );
}
