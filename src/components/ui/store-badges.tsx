/** Clean recreations of the standard App Store / Google Play download badges. */

export function AppStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="flex h-14 items-center gap-2.5 rounded-xl border border-white/15 bg-pure-black px-4 transition-colors hover:border-white/30"
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 shrink-0 fill-off-white">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C69.7 141.2 8 184.8 8 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-65.7-90-65.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="flex flex-col leading-tight text-off-white">
        <span className="text-[0.6rem] uppercase tracking-wide text-off-white/60">
          Download on the
        </span>
        <span className="font-display text-base font-bold leading-tight">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className="flex h-14 items-center gap-2.5 rounded-xl border border-white/15 bg-pure-black px-4 transition-colors hover:border-white/30"
    >
      <svg viewBox="0 0 512 512" className="h-7 w-7 shrink-0">
        <path
          d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
          fill="#00D2FF"
        />
        <path
          d="M425.7 199.9l-56.9-32.8-62.7 62.7 62.7 62.7 57.4-32.8c17-15.6 17-45.3-.5-59.8z"
          fill="#FFC400"
        />
        <path
          d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
          fill="#FF3333"
        />
      </svg>
      <span className="flex flex-col leading-tight text-off-white">
        <span className="text-[0.6rem] uppercase tracking-wide text-off-white/60">GET IT ON</span>
        <span className="font-display text-base font-bold leading-tight">Google Play</span>
      </span>
    </a>
  );
}
