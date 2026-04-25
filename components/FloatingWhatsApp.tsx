import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello, I would like to enquire about your tent & catering services")}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
