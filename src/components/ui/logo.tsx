import { cn } from "@/lib/utils";

/**
 * Second Shift logo using the PNG logo asset.
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
      <img
        src="/images/icons/logo.png"
        alt="Second Shift"
        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
      />

      {mark === "full" && (
        <span
          className={cn(
            "font-display flex flex-col text-[0.68rem] font-bold uppercase leading-[0.95] tracking-wide sm:text-sm",
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