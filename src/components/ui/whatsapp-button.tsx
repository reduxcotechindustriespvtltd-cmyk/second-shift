import { MessageCircle } from "lucide-react";
import { site } from "@/data/content";

/** Floating WhatsApp CTA. TODO: replace site.whatsapp with the real business number. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Second Shift on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
