import Image from "next/image";
import { site } from "@/data/content";

/** Floating WhatsApp CTA. TODO: replace site.whatsapp with the real business number. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Second Shift on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 overflow-hidden rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <Image src="/images/icons/whatsapp.png" alt="" fill sizes="56px" className="object-cover" />
    </a>
  );
}
