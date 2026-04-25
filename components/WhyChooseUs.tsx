import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { ShieldCheck, Calendar, Check, Rupee } from "./Icons";

const cards = [
  { icon: ShieldCheck, title: "Hygiene First", text: "FSSAI-certified kitchen, separate sattvik prep and uniformed staff in caps & gloves." },
  { icon: Calendar, title: "Always On Time", text: "Tent setup the day before, food hot and ready at the muhurat — never a minute late." },
  { icon: Check, title: "Authentic Flavours", text: "Traditional recipes, fresh masalas, desi ghee — taste your dadi's kitchen at scale." },
  { icon: Rupee, title: "Transparent Pricing", text: "All-inclusive quote: tent, food, staff, bartan. No hidden surprises after the event." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-blush-50 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          tag="Why Choose Us"
          title={
            <>
              Four <span className="text-rose-brand">rituals</span>{" "}
              that set us <span className="text-gold-dark">apart</span>.
            </>
          }
          subtitle="We deliver value with every event through quality, transparency and genuine warmth toward every family we serve."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="card-glow card-aura card-tilt group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gold/30 bg-white p-8 shadow-soft transition-colors duration-500 hover:bg-ink hover:text-blush-50">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="display pointer-events-none absolute right-5 top-3 text-7xl leading-none text-gold/15 transition-colors duration-500 group-hover:text-gold/25">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="icon-tilt relative grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-blush-50 text-rose-brand transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <c.icon className="h-7 w-7" />
                </div>
                <h4 className="display mt-6 text-2xl text-ink transition-colors duration-500 group-hover:text-gold">
                  {c.title}
                </h4>
                <div className="my-3 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
                <p className="text-sm leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-blush-50/75">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
