import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { Phone, Search, Spray, ShieldCheck } from "./Icons";

const steps = [
  { icon: Phone, title: "Enquiry", text: "Call or WhatsApp us anytime. Our team responds within minutes to understand your event date, guest count and budget." },
  { icon: Search, title: "Free Site Visit", text: "We visit your venue, plan the tent layout, mandap placement and discuss menu — no charge, no obligation." },
  { icon: Spray, title: "Tasting & Setup", text: "Sample tasting of your shortlisted dishes, then on-the-day setup of tent, stage, lighting and live counters — well in advance." },
  { icon: ShieldCheck, title: "Flawless Event", text: "Our team handles the day from welcome drinks to final paan — uniformed, on-time and quietly professional." },
];

export default function Process() {
  return (
    <section id="process" className="bg-blush-50 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          tag="Our Process"
          title={
            <>
              Four careful steps from <br />
              <span className="text-rose-brand">first call</span>{" "}
              to a <span className="text-gold-dark">flawless</span> celebration.
            </>
          }
          subtitle="No pushy sales, no hidden charges, no last-minute surprises — a transparent, family-led process designed around you."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px border-t border-dashed border-gold lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card-glow card-aura group relative z-10 flex h-full flex-col items-center overflow-hidden rounded-[2rem] border border-gold/30 bg-white p-8 text-center shadow-soft transition-transform duration-500 hover:-translate-y-2">
                <span className="display pointer-events-none absolute -right-4 -top-6 text-[10rem] leading-none text-gold/10 transition-colors duration-500 group-hover:text-rose-brand/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="icon-bounce grid h-24 w-24 place-items-center rounded-full border border-gold/40 bg-blush-50 text-rose-brand transition-colors duration-500 group-hover:bg-rose-brand group-hover:text-blush-50">
                    <s.icon className="h-10 w-10" />
                  </div>
                  <span className="display badge-rotate absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full bg-gold text-lg text-ink ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>
                <h4 className="display relative mt-6 text-2xl text-ink">{s.title}</h4>
                <div className="relative my-3 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
                <p className="relative text-sm leading-relaxed text-ink/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
