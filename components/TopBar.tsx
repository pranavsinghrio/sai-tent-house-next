import { Phone, Mail, Clock, ShieldCheck, Instagram } from "./Icons";
import {
  PHONE_DISPLAY,
  EMAIL,
  WA_NUMBER,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden bg-ink text-[11px] text-blush-50/90 md:block">
      <div className="container-x flex items-center justify-between gap-6 py-2.5">
        <div className="flex items-center gap-6">
          <a href={`tel:+${WA_NUMBER}`} className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone className="h-3 w-3 text-gold" />
            {PHONE_DISPLAY}
          </a>
          <span className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-gold" />
            {EMAIL}
          </span>
          <span className="hidden items-center gap-2 lg:inline-flex">
            <Clock className="h-3 w-3 text-gold" />
            Open Daily · 9 AM – 9 PM
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Instagram className="h-3.5 w-3.5 text-gold" />
            @{INSTAGRAM_HANDLE}
          </a>
          <span className="flex items-center gap-2 text-gold-light">
            <ShieldCheck className="h-3 w-3" />
            FSSAI Certified · 25+ Years
          </span>
        </div>
      </div>
    </div>
  );
}
