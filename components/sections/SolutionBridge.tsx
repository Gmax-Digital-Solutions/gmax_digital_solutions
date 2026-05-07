"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const SolutionBridge = () => {
  return (
    <section className="relative bg-white pt-32 pb-24 px-8">
      <div className="absolute top-0 left-0 w-full h-16 bg-surface-container-low"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-surface-container-low p-12 rounded-2xl shadow-sm border border-outline-variant/20 -mt-32 relative z-10">
            <span className="text-[0.75rem] font-bold text-[#F84343] tracking-widest uppercase mb-4 block">
              Your AI Search Visibility Audit
            </span>
            <h2 className="text-3xl font-black text-[#241E20] mb-8">
              What You'll Discover in 90 Days
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">
                    Google Ranking Gaps
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Where you rank, where competitors rank, and which keywords
                    are worth £2K+/month in traffic.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">
                    AI Search Visibility
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Whether you appear in ChatGPT, Perplexity, and Gemini. (Most
                    e-commerce brands don't.)
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">
                    Competitor Comparison
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Exactly what your top 5 competitors are doing on Google and
                    AI that you're missing.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  04
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">
                    3 Actionable Fixes
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Your priority actions for the next 90 days, ranked by impact
                    and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-4xl font-black text-[#241E20] mb-6 leading-tight">
              Your store is invisible on Google AND AI search.
            </h3>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              E-commerce brands lose 40%+ in potential revenue to competitors
              who rank higher. Our free audit shows exactly where you're missing
              and how to fix it.
            </p>
            <ul className="space-y-4 mb-10 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  See where you rank on Google for high-value keywords
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Check if you appear in ChatGPT, Perplexity, and Gemini
                </span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Compare your visibility against competitors
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Get 3 actionable fixes you can implement immediately
                </span>
              </li>
            </ul>
            <Link
              href="contact#proposal"
              onClick={() =>
                trackEvent("secure_blueprint_btn", {
                  location: "homepage_blueprint_section",
                  label: "audit_btn",
                })
              }
              className="bg-[#241E20] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 w-max hover:bg-[#241E20]/90 transition-all active:scale-95"
            >
              Get Free AI Search Audit
              <span className="material-symbols-outlined">trending_up</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge;
