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
            What each engagement usually examines
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
              Understanding where trust breaks
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Identifying the specific moments in the user journey where
              credibility is lost or questioned.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              02
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              Identifying positioning gaps
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Analyzing how the business compares to market expectations and
              where the messaging falls short.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform translate-y-4 hover:-translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              03
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              Structuring stronger digital clarity
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Reorganizing the digital architecture to ensure the core value
              proposition is impossible to miss.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
            <div className="text-primary-container font-black text-4xl mb-6 opacity-40">
              04
            </div>
            <h4 className="text-lg font-bold mb-4 text-on-surface leading-tight">
              Defining practical next moves
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Creating an actionable roadmap for growth that prioritizes
              high-impact strategic adjustments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge;
