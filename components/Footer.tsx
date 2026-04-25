import Link from "next/link";
import { Phone, Mail, Pin, Clock, WhatsAppIcon, Instagram } from "./Icons";
import {
  PHONE_DISPLAY,
  EMAIL,
  WA_NUMBER,
  waLink,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-10 text-blush-50">
      <div className="polka absolute inset-0 opacity-10" />
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-rose-brand/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-x relative">
        <div className="border-b border-gold/30 pb-14 text-center">
          <div className="lux-divider justify-center">
            <span className="eyebrow text-gold">Ready to Book?</span>
          </div>
          <h3 className="display mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] text-blush-50 md:text-6xl">
            Your next <span className="text-gold">celebration</span> starts{" "}
            <span className="text-rose-brand-light">here</span>.
          </h3>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Hello, I would like to book Sai Tent House for an event")}
              target="_blank"
              rel="noopener"
              className="btn-rose inline-flex items-center gap-2 rounded-full text-xs uppercase"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a
              href={`tel:+${WA_NUMBER}`}
              className="btn-gold-outline inline-flex items-center gap-2 rounded-full text-gold text-xs uppercase"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="#home" className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-rose-brand text-blush-50 ring-2 ring-gold">
                <span className="display text-xl">सा</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="display text-2xl text-blush-50">Sai</span>
                <span className="eyebrow text-gold">Tent House &amp; Caterers</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blush-50/70">
              Premium tent house &amp; caterers in Jabalpur and across Madhya Pradesh.
              Trusted by 5,000+ families, weddings and corporate events since 2000.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Follow us on Instagram"
                className="group flex items-center gap-3 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-sm text-blush-50/85 transition-all hover:border-transparent hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e_35%,#d62976_55%,#962fbf_80%,#4f5bd5)] hover:text-white"
              >
                <Instagram className="h-4 w-4 text-gold transition-colors group-hover:text-white" />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-gold">Sitemap</h4>
            <div className="my-3 h-px w-10 bg-gold" />
            <ul className="mt-4 space-y-2.5 text-sm text-blush-50/70">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Reviews", "#testimonials"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a className="gold-underline" href={h}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold">Services</h4>
            <div className="my-3 h-px w-10 bg-gold" />
            <ul className="mt-4 space-y-2.5 text-sm text-blush-50/70">
              {[
                "Wedding Catering",
                "Tent & Mandap Setup",
                "Stage & Flower Decoration",
                "Lighting & Sound",
                "Pooja & Bhandara",
                "Corporate Events",
              ].map((s) => (
                <li key={s}>
                  <a className="gold-underline" href="#services">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold">Contact</h4>
            <div className="my-3 h-px w-10 bg-gold" />
            <ul className="mt-4 space-y-3 text-sm text-blush-50/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:+${WA_NUMBER}`}>{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Jabalpur, Madhya Pradesh 482001
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Open Daily: 9 AM – 9 PM
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-gold">
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-gold/20 pt-6 text-xs text-blush-50/50 md:flex-row md:items-center">
          <span className="eyebrow">
            © {new Date().getFullYear()} Sai Tent House &amp; Caterers · Jabalpur, MP
          </span>
          <span className="eyebrow">FSSAI Certified · 25+ Years of Trust</span>
        </div>
      </div>
    </footer>
  );
}
