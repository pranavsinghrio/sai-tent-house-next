import Image from "next/image";
import { services, waLink } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { Check, Star, ShieldCheck, Users } from "./Icons";

export default function Services() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="polka absolute inset-0 opacity-20" />
      <div className="container-x relative">
        <SectionHeader
          tag="Our Signature Services"
          title={
            <>
              Crafted celebrations,<br />
              <span className="text-rose-brand">tailored</span> to every{" "}
              <span className="text-gold-dark">occasion</span>.
            </>
          }
          subtitle="From an intimate house pooja to a 1,500-guest wedding — every event is delivered with precision, hospitality and authentic flavours that families remember for years."
        />

        {/* Featured specialty card */}
        <Reveal className="mt-16">
          <a
            href={waLink(`Hello, I would like to book ${featured.title.toLowerCase()}`)}
            target="_blank"
            rel="noopener"
            className="group relative block overflow-hidden rounded-[2rem] bg-ink text-blush-50 shadow-lux"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-rose-brand/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
            <div className="polka pointer-events-none absolute inset-0 opacity-10" />

            {/* Decorative top ribbon */}
            <div className="absolute left-0 top-0 z-20 hidden items-center md:flex">
              <span className="flex items-center gap-2 bg-gold px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
                <span className="display text-base leading-none">№1</span>
                Most Booked Service
              </span>
              <span className="h-0 w-0 border-b-[32px] border-l-[14px] border-b-gold border-l-transparent" />
            </div>

            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_1fr]">
              {/* Image side */}
              <div className="relative aspect-square overflow-hidden bg-ink sm:aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-105 lg:object-cover"
                  sizes="(min-width:1024px) 55vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-transparent to-ink/60" />

                {/* Floating trust badges on image */}
                <div className="absolute right-5 top-16 hidden flex-col gap-3 md:right-8 md:flex">
                  <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-gold-light backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5" /> FSSAI Certified
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-gold-light backdrop-blur">
                    <Check className="h-3.5 w-3.5" /> 150+ Dishes
                  </div>
                </div>

                {/* Rating badge bottom-left */}
                <div className="absolute bottom-5 left-5 hidden items-center gap-3 rounded-full border border-gold/40 bg-ink/85 px-4 py-2 backdrop-blur md:bottom-8 md:left-8 md:flex">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <div className="text-xs">
                    <span className="display text-base text-blush-50">4.9</span>
                    <span className="ml-2 text-blush-50/65">from 1,200+ reviews</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="relative flex flex-col justify-between p-8 pt-20 lg:p-10 lg:pt-12">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="lux-divider gap-2">
                      <span className="eyebrow text-gold">Our Specialty</span>
                    </div>
                  </div>

                  <h3 className="display mt-4 text-4xl leading-[1.05] text-blush-50 lg:text-5xl">
                    {featured.title}
                    <br />
                    <span className="text-gold">Specialists</span>
                  </h3>

                  <div className="mt-5 h-px w-24 bg-gold" />

                  <p className="mt-5 text-base leading-relaxed text-blush-50/80">
                    {featured.blurb}
                  </p>

                  {/* Premium stats row */}
                  <div className="mt-7 grid grid-cols-3 gap-4 border-y border-gold/20 py-5">
                    <div>
                      <div className="display text-2xl text-gold lg:text-3xl">25+</div>
                      <div className="eyebrow mt-1 text-blush-50/60">Years</div>
                    </div>
                    <div>
                      <div className="display text-2xl text-gold lg:text-3xl">5k+</div>
                      <div className="eyebrow mt-1 text-blush-50/60">Events</div>
                    </div>
                    <div>
                      <div className="display text-2xl text-gold lg:text-3xl">#1</div>
                      <div className="eyebrow mt-1 text-blush-50/60">in MP</div>
                    </div>
                  </div>

                  {featured.features && (
                    <ul className="mt-5 grid grid-cols-1 gap-2">
                      {featured.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-blush-50/85"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-ink">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-blush-50/70">
                    <Users className="h-4 w-4 text-gold" />
                    Trusted by <span className="font-bold text-gold">5,000+</span> families
                  </div>
                  <span className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-transform group-hover:scale-105">
                    Book Wedding Catering
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-gold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Regular service cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <a
                href={waLink(`Hello, I would like to book ${s.title.toLowerCase()}`)}
                target="_blank"
                rel="noopener"
                className="card-glow card-aura card-tilt card-corners group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gold/25 bg-blush-50 shadow-soft"
              >
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-blush-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="image-zoom object-cover"
                    style={{
                      objectPosition: s.imagePosition ?? "center",
                      filter: s.imageFilter,
                    }}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="overlay-reveal absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                  <div className="overlay-reveal absolute inset-x-6 bottom-6 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink shadow-lux">
                    Book on WhatsApp
                    <span className="arrow-slide">→</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow badge-rotate text-gold-dark">
                      № {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-[2px] flex-1 ml-4 origin-left bg-gradient-to-r from-gold/50 to-transparent transition-transform duration-500 group-hover:scale-x-110" />
                  </div>
                  <h3 className="display grow-line mt-2 text-2xl text-ink md:text-3xl inline-block">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-ink/70">{s.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-rose-brand">
                    <span className="gold-underline">Enquire on WhatsApp</span>
                    <span className="arrow-slide">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
