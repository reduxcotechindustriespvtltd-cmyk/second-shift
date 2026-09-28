import { cn } from "@/lib/utils";

/** A CSS/HTML phone frame — no image assets, so the screen inside can be real markup. */
export function PhoneMockup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[240px] shrink-0 rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] sm:w-[270px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-800" />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-deep-navy">
        {children}
      </div>
    </div>
  );
}
