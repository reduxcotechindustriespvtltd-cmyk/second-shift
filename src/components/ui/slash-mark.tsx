import { cn } from "@/lib/utils";

type SlashMarkProps = {
  className?: string;
  bars?: number;
  color?: "volt" | "black" | "white" | "orange";
};

const colorMap: Record<NonNullable<SlashMarkProps["color"]>, string> = {
  volt: "bg-volt",
  black: "bg-pure-black",
  white: "bg-off-white",
  orange: "bg-signal-orange",
};

/** The recurring "////" brand mark — four slanted bars used as a corner accent. */
export function SlashMark({ className, bars = 4, color = "volt" }: SlashMarkProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-[3px]", className)}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn("h-4 w-[5px] shrink-0 skew-x-[-20deg]", colorMap[color])}
        />
      ))}
    </span>
  );
}
