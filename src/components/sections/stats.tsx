import { CountUp } from "@/components/ui/count-up";
import { SlashMark } from "@/components/ui/slash-mark";
import { stats } from "@/data/content";

export function Stats() {
  return (
    <section className="grain relative overflow-hidden bg-pure-black py-24 text-off-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex items-center gap-3">
          <SlashMark />
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/60 sm:text-sm">
            {stats.headline}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-y border-white/10 py-14 sm:grid-cols-4">
          {stats.primary.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-5xl font-black leading-none text-volt sm:text-6xl lg:text-7xl"
              />
              <span className="text-xs font-semibold uppercase tracking-wide text-off-white/60 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {stats.secondary.map((line) => (
            <span
              key={line}
              className="text-xs font-semibold uppercase tracking-wide text-off-white/50 sm:text-sm"
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
