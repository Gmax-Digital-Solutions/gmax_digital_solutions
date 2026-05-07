import React from "react";

const SolutionBridge = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 bg-on-background h-1/2"></div>
      <div className="absolute inset-0 bg-white translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            What your AI Search Visibility Audit includes
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 01 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform translate-y-4 hover:-translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              01
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              Google Ranking Analysis
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              See which keywords you rank for, your current positions, and
              exactly which high-value searches you're missing.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              02
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              AI Search Visibility
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Check if your products appear in ChatGPT, Perplexity, and Gemini.
              See where competitors are winning.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform translate-y-4 hover:-translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              03
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              Competitor Comparison
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              See exactly what your top competitors are ranking for on Google
              and appearing in on AI.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              04
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              3 Actionable Fixes
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Your priority moves for the next 90 days, ranked by impact and ROI
              potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge;
