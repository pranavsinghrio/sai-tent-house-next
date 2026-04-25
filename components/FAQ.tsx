"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-blush-50 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          tag="FAQs"
          title={
            <>
              Your <span className="text-rose-brand">questions</span>,
              <br />
              our <span className="text-gold-dark">answers</span>.
            </>
          }
          subtitle="Got a specific question about your event? WhatsApp us — our team responds in minutes."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden border-b border-gold/30 transition-colors ${
                  isOpen ? "" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-5 py-6 text-left"
                >
                  <span className="display text-xl text-rose-brand md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display flex-1 text-lg text-ink md:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`display grid h-10 w-10 shrink-0 place-items-center rounded-full border text-xl transition-all ${
                      isOpen
                        ? "rotate-45 border-rose-brand bg-rose-brand text-blush-50"
                        : "border-gold bg-blush-50 text-rose-brand"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-12 pr-14 text-base leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
