"use client";

import Link from "next/link";
import React from "react";
import { trackEvent } from "@/lib/analytics/posthog";

const EngagementModels = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-low text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-background mb-4">
            Engagement Models
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Pricing is structured around project scope, business complexity, and
            strategic depth to ensure meaningful outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Model 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Strategic Consultation</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">
              One-off sessions focused on solving immediate strategic
              bottlenecks and gaining rapid clarity.
            </p>
            <Link
              href="https://calendly.com/hello-gmaxdigitals/30min"
              target="_blank"
              onClick={() =>
                trackEvent("request_consultation_btn_clicked", {
                  location: "services_models_section",
                  label: "requesting a consultation",
                  source: "engagement_models",
                })
              }
              className="w-full py-4 px-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Request Consultation
            </Link>
          </div>

          {/* Featured */}
          <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-secondary md:scale-105 z-10 flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded-xl mb-4 w-fit">
              Recommended
            </div>
            <h3 className="text-2xl font-bold mb-6">Project Engagement</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">
              Comprehensive execution for websites, brand messaging, or product
              launches with defined timelines.
            </p>
            <Link
              href="contact#proposal"
              onClick={() =>
                trackEvent("request_proposal_clicked", {
                  location: "services_models_section",
                  label: "requesting a consultation",
                  source: "engagement_models",
                })
              }
              className="w-full py-4 px-4 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Request Proposal
            </Link>
          </div>

          {/* Model 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Ongoing Support</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">
              Retainer-based partnership providing continuous strategic
              direction and marketing oversight.
            </p>
            <Link
              href="https://calendly.com/hello-gmaxdigitals/strategic-partnerships"
              target="_blank"
              onClick={() =>
                trackEvent("partnership_call_clicked", {
                  source: "engagement_models",
                })
              }
              className="w-full py-4 px-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Discuss Partnership
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
