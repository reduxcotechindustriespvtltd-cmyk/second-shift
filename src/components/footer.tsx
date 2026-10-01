import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/logo";
import { SlashMark } from "@/components/ui/slash-mark";
import { site, footerLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-pure-black pt-20 text-off-white">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm text-off-white/60">{site.mission}</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Second Shift on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-volt hover:text-volt"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Second Shift on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-volt hover:text-volt"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-off-white/40">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-off-white/70 transition-colors hover:text-volt"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-off-white/40">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-off-white/70">
              <li>{site.location}</li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-volt">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-volt">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1 text-xs uppercase tracking-wide text-off-white/40">
                <SlashMark bars={3} className="scale-75" />
                Made in Rajasthan
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-off-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Second Shift. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLinks.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-volt">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>Compete. Connect. Belong.</p>
        </div>
      </div>

      <div aria-hidden="true" className="select-none overflow-hidden pb-2 pt-4">
        <span className="font-display block whitespace-nowrap text-center text-[9vw] font-black uppercase leading-none text-outline text-off-white/25 sm:text-[7vw]">
          Second Shift
        </span>
      </div>
    </footer>
  );
}
