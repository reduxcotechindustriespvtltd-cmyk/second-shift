import { cn } from "@/lib/utils";

/** Slanted black label tag with white/volt text, e.g. "THE SUNDAY LEAGUE - WHERE IT ALL BEGAN". */
export function SlantedTag({
  children,
  className,
  variant = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "inline-block -skew-x-6 border-l-4 px-4 py-2 sm:px-5 sm:py-2.5",
        variant === "dark"
          ? "border-volt bg-pure-black text-off-white"
          : "border-signal-orange bg-off-white text-pure-black",
        className,
      )}
    >
      <span className="inline-block skew-x-6 text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm">
        {children}
      </span>
    </div>
  );
}
