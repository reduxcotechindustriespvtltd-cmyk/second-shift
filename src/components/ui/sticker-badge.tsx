import { cn } from "@/lib/utils";

/** Sticker-style rotated pill badge, e.g. "MEMORIES CREATED". */
export function StickerBadge({
  children,
  className,
  rotate = "-6deg",
  color = "navy",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  color?: "navy" | "volt" | "orange";
}) {
  const colorClasses = {
    navy: "bg-deep-navy text-off-white",
    volt: "bg-volt text-pure-black",
    orange: "bg-signal-orange text-off-white",
  }[color];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide shadow-[0_6px_20px_rgba(0,0,0,0.35)] sm:text-sm",
        colorClasses,
        className,
      )}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </div>
  );
}
