"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const FAQCTA: React.FC = () => {
  return (
    <section className="relative bg-surface py-24 px-8 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between p-12 bg-surface-container-highest rounded-xl editorial-shadow -mt-40 z-20">
          {/* Text Section */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-black text-on-background mb-4">
              Ready for a Strategic Conversation?
            </h2>
            <p className="text-lg text-on-surface-variant">
              Skip the uncertainty. Let's look at your current architecture and
              define the path to your next milestone.
            </p>
          </div>

          {/* Button Section */}
          <div className="md:w-1/3 flex justify-end">
            <Link
              href="contact#proposal"
              onClick={() =>
                trackEvent("contact_btn_clicked", {
                  source: "faqHero",
                })
              }
              className="bg-primary-container text-white px-10 py-5 rounded-md text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary-container/20"
            >
              Contact Gmax Digital
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQCTA;
