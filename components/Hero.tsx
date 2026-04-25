"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsAppIcon, Phone, ShieldCheck, Star, Check } from "./Icons";
import { waLink, PHONE_DISPLAY, WA_NUMBER, heroImage } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blush-50 pb-24 pt-12 md:pt-20"
    >
      <div className="polka absolute inset-0 opacity-40" />
      <div className="absolute -right-24 top-20 h-[30rem] w-[30rem] rounded-full bg-blush-100/50 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-[24rem] w-[24rem] rounded-full bg-gold-light/40 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="lux-divider">
            <span className="eyebrow text-gold-dark">Established 2000 · Jabalpur</span>
          </div>

          <h1 className="display mt-6 text-5xl text-ink sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]">
            Where every
            <br />
            <span className="text-rose-brand">celebration</span>{" "}
            <span className="text-gold-dark">becomes a memory.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Sai Tent House &amp; Caterers is Jabalpur&apos;s most trusted name for weddings,
            receptions, pooja and corporate events. From royal mandap setup to authentic dal
            makhani — two and a half decades of flavour, hospitality and flawless execution.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waLink("Hello, I would like to book Sai Tent House for an event")}
              target="_blank"
              rel="noopener"
              className="btn-rose inline-flex items-center justify-center gap-3 rounded-full text-xs uppercase"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book Now
            </a>
            <a
              href={`tel:+${WA_NUMBER}`}
              className="btn-gold-outline inline-flex items-center justify-center gap-3 rounded-full text-xs uppercase"
            >
              <Phone className="h-4 w-4 text-rose-brand" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gold/30 pt-8 max-w-xl">
            <Stat n="25+" label="Years" />
            <Stat n="5k+" label="Events Served" />
            <Stat n="4.9" label="Google Rating" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-rose-brand/10 blur-2xl" />
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[220px_220px_40px_40px] border-2 border-gold" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[220px_220px_40px_40px] bg-gold-light shadow-lux">
              <Image
                src={heroImage}
                alt="Decorated wedding mandap with floral stage and festive lighting"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width:1024px) 540px, 90vw"
              />
            </div>
          </div>

          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-full border border-gold/50 bg-blush-50 p-2 pr-5 shadow-soft float-slow">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-rose-brand text-blush-50">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="display text-base leading-tight text-ink">FSSAI Certified</div>
              <div className="text-xs text-ink/60">Hygienic Kitchen</div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 flex items-center gap-3 rounded-full border border-gold/50 bg-blush-50 p-2 pr-5 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gold text-ink">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <div className="display text-base leading-tight text-ink">4.9 / 5</div>
              <div className="text-xs text-ink/60">5,000+ Events</div>
            </div>
          </div>

          <div className="absolute -left-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 text-gold-dark md:flex">
            <span className="h-10 w-px bg-gold" />
            <span className="eyebrow vertical-text" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Est. 2000</span>
            <span className="h-10 w-px bg-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-4xl text-rose-brand md:text-5xl">{n}</div>
      <div className="eyebrow mt-2 text-ink/55">{label}</div>
    </div>
  );
}
