import Counter from "./Counter";

const stats = [
  { n: 25, suffix: "+", label: "Years of Service" },
  { n: 5000, suffix: "+", label: "Events Catered" },
  { n: 150, suffix: "+", label: "Dishes on Menu" },
  { n: 100, suffix: "%", label: "FSSAI Hygiene" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-ink py-16 text-blush-50 md:py-20">
      <div className="polka absolute inset-0 opacity-20" />
      <div className="container-x relative">
        <div className="mb-10 text-center">
          <div className="lux-divider justify-center">
            <span className="eyebrow text-gold">By the numbers</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 divide-gold/25 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-6 text-center ${i < 2 ? "border-b border-gold/25 md:border-0" : ""}`}
            >
              <div className="display text-4xl leading-none text-gold sm:text-5xl md:text-6xl break-all">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="eyebrow mt-3 text-blush-50/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
