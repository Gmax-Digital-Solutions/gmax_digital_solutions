// components/ContactHero.tsx

"use client";
import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const ContactHero: React.FC = () => {
  return (
    <section className="relative px-8 py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold bg-surface-container text-primary border-l-2 border-primary">
            Get Your Free Audit
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.05] mb-8">
            See where your store ranks on Google and AI search
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-light">
            Get a free AI Search Visibility Audit that shows your Google
            ranking, whether you appear in ChatGPT and Perplexity, and 3
            actionable fixes for the next 90 days.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("call_btn_clicked", {
                  location: "contact_hero",
                  source: "contact_section",
                  label: "audit_btn",
                })
              }
              className="bg-primary text-white px-8 py-4 font-bold rounded shadow-sm hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2"
            >
              Start Your Free AI Search Audit
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary -skew-x-12 translate-x-1/2 opacity-70 hidden lg:block"></div>
    </section>
  );
};

export default ContactHero;
