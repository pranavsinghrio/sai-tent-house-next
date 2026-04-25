import Image from "next/image";
import { Check } from "./Icons";
import Reveal from "./Reveal";
import { waLink, aboutImage } from "@/lib/data";

const features = [
  "FSSAI Certified Kitchen",
  "Skilled Chefs & Waiters",
  "Free Site Visit",
  "Sample Tasting",
  "Honest, All-Inclusive Pricing",
  "Single Point of Contact",
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <Reveal dir="left" className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[200px_200px_40px_40px] border border-gold/60" />
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[200px_200px_40px_40px] bg-blush-100 shadow-lux">
            <Image
              src={aboutImage}
              alt="Sai Tent House catering team plating a wedding feast"
              fill
              className="object-cover object-center"
              sizes="(min-width:1024px) 520px, 90vw"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-full border-2 border-gold bg-blush-50 px-8 py-5 text-center shadow-lux md:-right-2">
            <div className="display text-4xl text-rose-brand">25+</div>
            <div className="eyebrow text-ink/65">Years</div>
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="lux-divider">
            <span className="eyebrow text-gold-dark">About Us</span>
          </div>
          <h2 className="display mt-5 text-4xl leading-[1.05] text-ink md:text-6xl">
            Jabalpur&apos;s most{" "}
            <span className="text-rose-brand">trusted</span>{" "}
            tent house &amp;{" "}
            <span className="text-gold-dark">caterers</span>{" "}
            since 2000.
          </h2>
          <div className="my-6 gold-rule max-w-[8rem]" />
          <p className="text-lg leading-relaxed text-ink/75">
            Sai Tent House &amp; Caterers is the leading event partner in Jabalpur and across
            Madhya Pradesh — handling weddings, receptions, pooja ceremonies and corporate
            events with warmth, discipline and unforgettable food.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink/65">
            With over two and a half decades of experience, our team of trained chefs,
            decorators and serving staff has hosted 5,000+ events. From traditional sattvik
            bhandara to royal wedding banquets — we bring authentic flavours, spotless
            hospitality and stress-free planning to every family we serve.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-ink/85">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold-light/30 text-rose-brand">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hello, I would like to know more about Sai Tent House services")}
            target="_blank"
            rel="noopener"
            className="btn-rose mt-10 inline-flex items-center gap-2 rounded-full text-xs uppercase"
          >
            Plan Your Event →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
