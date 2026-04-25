"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { waLink, PHONE_DISPLAY, WA_NUMBER } from "@/lib/data";
import { Phone } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-rose-brand/15 bg-blush-50/95 shadow-sm backdrop-blur-xl"
          : "bg-blush-50"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-rose-brand text-blush-50 ring-2 ring-gold transition-transform group-hover:scale-105">
            <span className="display text-xl">सा</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="display text-2xl font-semibold text-ink">Sai</span>
            <span className="eyebrow text-rose-brand">Tent House &amp; Caterers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`gold-underline text-sm font-medium transition-colors ${
                active === l.href.slice(1)
                  ? "active text-rose-brand"
                  : "text-ink/80 hover:text-rose-brand"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+${WA_NUMBER}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-gold-light/30 text-rose-brand">
              <Phone className="h-4 w-4" />
            </span>
            <span className="hidden xl:flex flex-col leading-tight">
              <span className="eyebrow text-ink/55">Call</span>
              <span className="display text-base">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            href={waLink("Hello, I would like to enquire about your tent & catering services")}
            target="_blank"
            rel="noopener"
            className="btn-rose inline-flex items-center gap-2 rounded-full text-xs uppercase"
          >
            Get Quote →
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-blush-50 text-ink lg:hidden"
        >
          <span className={`absolute h-0.5 w-5 bg-ink transition-all ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-5 bg-ink transition-all ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      <div className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`overflow-hidden border-t border-rose-brand/15 bg-blush-50 transition-[max-height,opacity] duration-500 ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display rounded-lg px-3 py-3 text-2xl text-ink hover:text-rose-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:+${WA_NUMBER}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold-light/20 px-4 py-3 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-rose-brand" /> {PHONE_DISPLAY}
            </a>
            <a
              href={waLink("Hello, I would like to enquire about tent & catering")}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-rose mt-2 rounded-full text-center text-xs uppercase"
            >
              Get Quote →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
