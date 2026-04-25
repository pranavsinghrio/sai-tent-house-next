"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/data";
import { Quote, Star, Check, Users } from "./Icons";
import Counter from "./Counter";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const autoplay = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const u = () => {
      if (window.innerWidth <= 640) setPerView(1);
      else if (window.innerWidth <= 1024) setPerView(2);
      else setPerView(3);
    };
    u();
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);
  const dots = useMemo(() => Array.from({ length: maxIndex + 1 }), [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const reset = () => {
    if (autoplay.current) clearInterval(autoplay.current);
    autoplay.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5500);
  };

  useEffect(() => {
    reset();
    return () => {
      if (autoplay.current) clearInterval(autoplay.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const go = (n: number) => { setIndex(n); reset(); };
  const touchStart = useRef(0);

  return (
    <section id="testimonials" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          tag="Kind Words"
          title={
            <>
              From <span className="text-rose-brand">5,000+</span>{" "}
              delighted <span className="text-gold-dark">families</span>.
            </>
          }
          subtitle="Real reviews from real families who have trusted Sai Tent House &amp; Caterers with their most important celebrations."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-6 rounded-full border border-gold/40 bg-blush-50 px-8 py-6 text-center sm:flex-row sm:divide-x sm:divide-gold/30">
          <div className="flex items-center gap-4 sm:pr-6">
            <div className="display text-5xl text-rose-brand">4.9</div>
            <div className="text-left">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <div className="eyebrow mt-1 text-ink/60">Avg Rating</div>
            </div>
          </div>
          <div className="sm:px-6">
            <div className="display text-3xl text-ink">
              <Counter to={5000} suffix="+" />
            </div>
            <div className="eyebrow mt-1 flex items-center gap-1 text-ink/60">
              <Users className="h-3 w-3" /> Events
            </div>
          </div>
          <div className="sm:pl-6">
            <div className="display text-3xl text-ink">
              <Counter to={98} suffix="%" />
            </div>
            <div className="eyebrow mt-1 flex items-center gap-1 text-ink/60">
              <Check className="h-3 w-3 text-rose-brand" /> Recommend
            </div>
          </div>
        </div>

        <div
          className="mt-14 overflow-hidden"
          onMouseEnter={() => autoplay.current && clearInterval(autoplay.current)}
          onMouseLeave={reset}
          onTouchStart={(e) => (touchStart.current = e.changedTouches[0].screenX)}
          onTouchEnd={(e) => {
            const diff = touchStart.current - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) go(Math.min(index + 1, maxIndex));
              else go(Math.max(index - 1, 0));
            }
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article
                  className="tinted-card card-glow-always card-aura-always group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-gold/30 p-8 shadow-soft transition-transform duration-500 hover:-translate-y-2"
                  style={
                    {
                      "--tint-bg": "#ffffff",
                      "--tint-accent": t.color.bg,
                      "--tint-accent-2": t.color.bg,
                      animationDelay: `${(i % 3) * 0.6}s`,
                    } as React.CSSProperties
                  }
                >
                  {/* Big decorative quote watermark in the background */}
                  <span
                    className="quote-watermark-loop right-2 -top-8"
                    style={{ color: t.color.fg, animationDelay: `${i * 0.4}s` }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  <div className="relative">
                    <Quote className="h-10 w-10 text-rose-brand/40 gentle-float" />
                    <div className="mt-3 flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="star-always h-4 w-4" />
                      ))}
                    </div>
                    <p className="display mt-5 text-xl leading-snug text-ink md:text-2xl">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center justify-between border-t border-gold/30 pt-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-full text-sm font-bold shadow-md ring-2 ring-gold/50 transition-transform duration-500 group-hover:scale-110 group-hover:ring-4"
                        style={{ background: t.color.bg, color: t.color.fg }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="display text-lg text-ink">{t.name}</div>
                        <div className="text-xs text-ink/60">{t.role}</div>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: `${t.color.bg}`,
                        color: t.color.fg,
                      }}
                    >
                      <Check className="h-3 w-3" /> Verified
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(Math.max(index - 1, 0))}
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-blush-50 text-ink transition-colors hover:bg-rose-brand hover:text-blush-50"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {dots.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-10 bg-rose-brand" : "w-2 bg-gold/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(Math.min(index + 1, maxIndex))}
            className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-blush-50 text-ink transition-colors hover:bg-rose-brand hover:text-blush-50"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
