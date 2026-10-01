"use client";

import { useState } from "react";

type Point = { date: string; label: string; count: number };

export function LeadsChart({ data }: { data: Point[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(1, ...data.map((d) => d.count));
  const barWidth = 100 / data.length;
  const hovered = hover !== null ? data[hover] : null;

  return (
    <div className="relative pt-8">
      {hovered && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg border border-white/10 bg-pure-black px-2.5 py-1.5 text-xs text-off-white shadow-lg"
          style={{ left: `${(hover! + 0.5) * barWidth}%` }}
        >
          <p className="font-semibold">
            {hovered.count} lead{hovered.count === 1 ? "" : "s"}
          </p>
          <p className="text-off-white/50">{hovered.label}</p>
        </div>
      )}

      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="h-32 w-full overflow-visible"
        role="img"
        aria-label="Leads received per day, last 14 days"
      >
        <line x1="0" y1="39.5" x2="100" y2="39.5" strokeWidth="0.5" className="stroke-white/10" />
        {data.map((d, i) => {
          const height = (d.count / max) * 32;
          const x = i * barWidth;
          return (
            <g
              key={d.date}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((h) => (h === i ? null : h))}
            >
              <title>{`${d.label}: ${d.count}`}</title>
              <rect x={x} y="0" width={barWidth} height="40" fill="transparent" />
              <rect
                x={x + barWidth * 0.22}
                y={40 - height}
                width={barWidth * 0.56}
                height={Math.max(height, 1)}
                rx={1}
                className={hover === i ? "fill-volt" : "fill-volt/60"}
              />
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wide text-off-white/30">
        <span>{data[0]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
}
