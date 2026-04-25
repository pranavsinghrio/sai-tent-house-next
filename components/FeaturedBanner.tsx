import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { waLink, featuredImage } from "@/lib/data";

export default function FeaturedBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-blush-50 md:py-32">
      <div className="polka absolute inset-0 opacity-15" />
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-brand/30 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal dir="left" className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[220px_40px_220px_40px] border border-gold/40" />
            <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-[220px_40px_220px_40px] bg-ink-soft shadow-lux">
              <Image
                src={featuredImage}
                alt="Sai Tent House team at a wedding banquet with live counters"
                fill
                className="object-cover object-center"
                sizes="(min-width:1024px) 500px, 90vw"
              />
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="lux-divider">
              <span className="eyebrow text-gold">Complete Solution</span>
            </div>
            <h2 className="display mt-5 text-4xl leading-[1.05] md:text-6xl">
              One team.
              <br />
              <span className="text-gold">Every celebration.</span>
              <br />
              Total peace of mind.
            </h2>
            <div className="my-6 h-px w-28 bg-gold" />
            <p className="max-w-xl text-base leading-relaxed text-blush-50/75 md:text-lg">
              From an intimate house pooja to a 1,500-guest wedding banquet — tent, mandap,
              lighting, food, staff and bartan are all handled by us in one coordinated plan.
              One contact, one bill, zero stress.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { n: 150, s: "+", l: "Dishes" },
                { n: 5000, s: "+", l: "Events" },
                { n: 25, s: "+", l: "Years" },
              ].map((x) => (
                <div
                  key={x.l}
                  className="min-w-0 overflow-hidden rounded-2xl border border-gold/30 bg-white/5 p-2 text-center backdrop-blur sm:p-5"
                >
                  <div className="display text-base tabular-nums text-gold sm:text-3xl md:text-5xl">
                    <Counter to={x.n} suffix={x.s} />
                  </div>
                  <div className="eyebrow mt-1.5 text-[9px] text-blush-50/60 sm:mt-2 sm:text-xs">{x.l}</div>
                </div>
              ))}
            </div>

            <a
              href={waLink("Hello, I would like to plan an event with Sai Tent House")}
              target="_blank"
              rel="noopener"
              className="btn-gold-outline mt-10 inline-flex items-center gap-2 rounded-full border-gold text-gold-light text-xs uppercase hover:text-ink"
            >
              Plan My Event →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
