"use client";

import Image from "next/image";
import Beauty from "@/public/images/BeautyProfile.jpg";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const CtaClose = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-[#585DE1] p-[1px] shadow-2xl">
        <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface mb-6 leading-tight">
              Book a focused strategy conversation
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
              A short conversation designed to uncover what matters most right
              now — whether that means improving trust, refining positioning, or
              clarifying your digital direction.
            </p>

            <Link
              href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("call_btn_clicked", {
                  location: "insights_page",
                  source: "insights_page",
                  label: "Book Strategy Call",
                })
              }
              className="bg-secondary text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-3 active:scale-95"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Schedule a Call
            </Link>
          </div>

          {/* Visual */}
          <div className="hidden md:block w-72 h-72 rounded-2xl overflow-hidden relative bg-surface-container">
            <Image
              src={Beauty}
              alt="Strategic discussion"
              fill
              className="w-full h-full object-cover grayscale contrast-125 opacity-80"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaClose;
