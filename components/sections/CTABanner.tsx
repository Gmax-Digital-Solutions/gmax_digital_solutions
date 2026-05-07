"use client";

import FloatingLines from "../FloatingLines";
import { trackEvent } from "@/lib/analytics/posthog";
const CTABanner = () => {
  return (
    <section className="relative flex bg-[#585DE1] py-20 px-8">
      <div className="max-w-4xl mx-auto text-center z-10 ">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Your e-commerce store is invisible on AI search.
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Discover where you rank on Google and whether customers can find you
          on ChatGPT, Perplexity, or Gemini. Get a free audit with 3 actionable
          fixes.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("call_btn_clicked", {
                location: "cta_section",
                source: "cta_section",
                label: "audit_btn",
              })
            }
            className="bg-[#F84343] text-white px-10 py-5 rounded-lg font-black text-lg shadow-xl shadow-black/10"
          >
            Get Your Free AI Search Visibility Audit
          </a>
          <a
            href="/gmax-digital-services.pdf"
            target="_blank"
            onClick={() =>
              trackEvent("cta_clicked", {
                location: "cta_section",
                label: "Download Services btn",
              })
            }
            className="bg-white text-[#241E20] px-10 py-5 rounded-lg font-black text-lg"
          >
            Download Our Services Guide
          </a>
        </div>
      </div>
      <div className="h-full w-full absolute top-0 left-0">
        <FloatingLines
          linesGradient={["#464554", "#585DE1", "#201a1c"]}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>
    </section>
  );
};

export default CTABanner;
