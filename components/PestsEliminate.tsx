import Image from "next/image";
import Reveal from "./Reveal";
import { Check } from "./Icons";
import { waLink, pestsImage } from "@/lib/data";

const events = [
  "Weddings & Receptions",
  "Sangeet, Mehendi, Haldi",
  "Engagements & Roka",
  "Birthday & Anniversary",
  "Pooja, Jagran & Bhandara",
  "Corporate & Annual Day",
];

export default function PestsEliminate() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal dir="left">
          <div className="lux-divider">
            <span className="eyebrow text-gold-dark">Events We Cater</span>
          </div>
          <h2 className="display mt-5 text-4xl leading-[1.05] text-ink md:text-6xl">
            If it&apos;s a <span className="text-rose-brand">celebration</span>,
            we make it <span className="text-gold-dark">unforgettable</span>.
          </h2>
          <div className="my-6 gold-rule max-w-[8rem]" />
          <p className="text-lg leading-relaxed text-ink/70">
            From a 30-guest house pooja to a 1,500-guest wedding — our team has hosted every
            kind of celebration with the same warmth, discipline and authentic flavours.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {events.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-full border border-gold/30 bg-blush-50 px-5 py-3 text-sm font-medium text-ink transition-all hover:border-rose-brand/40 hover:bg-white"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-brand text-blush-50">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href={waLink("Hello, I would like to plan an event with Sai Tent House")}
            target="_blank"
            rel="noopener"
            className="btn-rose mt-10 inline-flex items-center gap-2 rounded-full text-xs uppercase"
          >
            Plan My Event →
          </a>
        </Reveal>

        <Reveal dir="right" className="relative">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[40px_220px_220px_40px] border border-gold/60" />
          <div className="relative aspect-square w-full overflow-hidden rounded-[40px_220px_220px_40px] bg-blush-100 shadow-lux">
            <Image
              src={pestsImage}
              alt="Live food counter with chef serving guests at a wedding"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 560px, 90vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
