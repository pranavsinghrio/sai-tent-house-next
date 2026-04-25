import { ShieldCheck, Check, Users, Search, Calendar } from "./Icons";

const badges = [
  { icon: ShieldCheck, head: "FSSAI Certified", sub: "Hygienic Kitchen" },
  { icon: Check, head: "Pure Sattvik", sub: "Separate Kitchen" },
  { icon: Users, head: "5,000+ Events", sub: "Across MP" },
  { icon: Search, head: "Free Site Visit", sub: "No obligation" },
  { icon: Calendar, head: "25+ Years", sub: "Experience" },
];

export default function TrustStrip() {
  return (
    <section className="bg-blush-50 py-16 md:py-20">
      <div className="container-x">
        <div className="mb-10 text-center">
          <div className="lux-divider justify-center">
            <span className="eyebrow text-gold-dark">Trust & Credentials</span>
          </div>
          <h3 className="display mt-4 text-3xl text-ink md:text-5xl">
            Two decades of <span className="text-rose-brand">flavour</span>,
            measured in <span className="text-gold-dark">smiles</span>.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {badges.map((b) => (
            <div
              key={b.head}
              className="card-glow card-aura group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-gold/30 bg-white p-4 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="icon-tilt grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blush-50 text-rose-brand ring-1 ring-gold/30 transition-colors duration-500 group-hover:bg-rose-brand group-hover:text-blush-50 group-hover:ring-rose-brand">
                <b.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="display text-base text-ink">{b.head}</div>
                <div className="text-xs text-ink/55">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
