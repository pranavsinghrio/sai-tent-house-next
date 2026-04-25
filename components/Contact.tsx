"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { WhatsAppIcon, Phone, Pin, Check, Mail, Clock, Instagram } from "./Icons";
import {
  cityOptions,
  serviceOptions,
  PHONE_DISPLAY,
  WA_NUMBER,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/data";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string)?.trim();
    const phone = (fd.get("phone") as string)?.trim();
    const service = fd.get("service") as string;
    const city = fd.get("city") as string;
    const message = (fd.get("message") as string)?.trim();

    const parts = [
      "*New Booking Request - Sai Tent House & Caterers*",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service}`,
      `*City:* ${city}`,
    ];
    if (message) parts.push(`*Details:* ${message}`);
    parts.push("", "Please contact me with a quote. Thank you!");

    const text = encodeURIComponent(parts.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          tag="Get In Touch"
          title={
            <>
              Let&apos;s plan your{" "}
              <span className="text-rose-brand">celebration</span>.
            </>
          }
          subtitle="Fill the form or reach out directly. Our team replies on WhatsApp within minutes — free site visit, no obligation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <ContactCard
              icon={<WhatsAppIcon className="h-6 w-6" />}
              iconBg="bg-wa"
              title="WhatsApp Us"
              subtitle="Instant reply from our team"
              value={PHONE_DISPLAY}
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I would like to enquire about your services")}`}
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              iconBg="bg-rose-brand"
              title="Call Us"
              subtitle="Open daily, 9 AM to 9 PM"
              value={PHONE_DISPLAY}
              href={`tel:+${WA_NUMBER}`}
            />
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              iconBg="bg-gold-dark"
              title="Email"
              subtitle="We reply within a few hours"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              icon={<Pin className="h-6 w-6" />}
              iconBg="bg-ink"
              title="Office"
              subtitle="Serving 15+ cities across MP"
              value="Jabalpur, M.P. 482001"
            />
            <ContactCard
              icon={<Clock className="h-6 w-6" />}
              iconBg="bg-rose-brand-dark"
              title="Working Hours"
              subtitle="Open every day of the week"
              value="9 AM – 9 PM"
            />
            <ContactCard
              icon={<Instagram className="h-6 w-6" />}
              iconBg="bg-[linear-gradient(45deg,#feda75,#fa7e1e_35%,#d62976_55%,#962fbf_80%,#4f5bd5)]"
              title="Instagram"
              subtitle="See our recent events & menus"
              value={`@${INSTAGRAM_HANDLE}`}
              href={INSTAGRAM_URL}
            />
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-gold/40 bg-blush-50 p-8 shadow-soft md:p-10"
          >
            <div className="mb-8 flex items-center gap-4 border-b border-gold/30 pb-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-rose-brand text-blush-50">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="display text-2xl text-ink">Request a Free Quote</h3>
                <p className="text-xs text-ink/55">
                  Expert will reply on WhatsApp within minutes
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your Name" name="name" required placeholder="Full name" />
              <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 43210" />
              <SelectField label="Service Required" name="service" required options={serviceOptions} />
              <SelectField label="Your City" name="city" required options={cityOptions} />
            </div>
            <div className="mt-5">
              <label className="eyebrow mb-2 block text-ink/60">
                Additional Details (optional)
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Event date, guest count, menu preferences..."
                className="w-full resize-none rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose-brand focus:outline-none focus:ring-2 focus:ring-rose-brand/20"
              />
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-xs text-ink/65">
              {["Free Site Visit", "All-Inclusive Pricing", "Sample Tasting", "Instant Reply"].map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-rose-brand" />
                  {b}
                </li>
              ))}
            </ul>

            <button
              type="submit"
              disabled={submitting}
              className="btn-rose mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full text-xs uppercase disabled:opacity-60"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon, iconBg, title, subtitle, value, href,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card-glow card-aura group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gold/30 bg-blush-50 p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-rose-brand/40">
      <div className={`icon-tilt grid h-14 w-14 shrink-0 place-items-center rounded-full text-blush-50 shadow-lg ${iconBg}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="display text-xl text-ink">{title}</div>
        <div className="text-xs text-ink/55">{subtitle}</div>
        <div className="mt-0.5 truncate text-sm font-semibold text-rose-brand">
          {value}
        </div>
      </div>
      {href && (
        <span className="arrow-slide grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-rose-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          →
        </span>
      )}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow mb-2 block text-ink/60">
        {label} {required && <span className="text-rose-brand">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose-brand focus:outline-none focus:ring-2 focus:ring-rose-brand/20"
      />
    </div>
  );
}

function SelectField({
  label, name, required, options,
}: { label: string; name: string; required?: boolean; options: string[] }) {
  return (
    <div>
      <label className="eyebrow mb-2 block text-ink/60">
        {label} {required && <span className="text-rose-brand">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm text-ink focus:border-rose-brand focus:outline-none focus:ring-2 focus:ring-rose-brand/20"
      >
        <option value="" disabled>-- Select --</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
