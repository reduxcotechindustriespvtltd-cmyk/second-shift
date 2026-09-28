import { cn } from "@/lib/utils";

/**
 * Second Shift logo: an orange chevron running figure beside the stacked
 * "SECOND / SHIFT" wordmark. Pure SVG/CSS recreation — no image asset needed.
 */
export function Logo({
  className,
  mark = "full",
  wordmarkColor = "text-off-white",
}: {
  className?: string;
  mark?: "full" | "icon";
  wordmarkColor?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path
          d="M4 30 L14 30 L20 20 L26 30 L36 30 L26 14 L20 14 Z"
          fill="#F04E23"
        />
        <path d="M28 30 L36 30 L44 18 L36 18 Z" fill="#F04E23" />
      </svg>
      {mark === "full" && (
        <span
          className={cn(
            "font-display flex flex-col text-[0.62rem] font-bold uppercase leading-[0.95] tracking-wide sm:text-xs",
            wordmarkColor,
          )}
        >
          <span>Second</span>
          <span>Shift</span>
        </span>
      )}
      <span className="sr-only">Second Shift</span>
    </span>
  );
}
