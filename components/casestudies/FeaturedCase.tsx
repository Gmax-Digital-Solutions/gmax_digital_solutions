import React from "react";

const FeaturedCase = () => {
  return (
    <section className="py-24 bg-on-background text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px w-12 bg-secondary-container"></div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-secondary-container">
            Featured Case
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
          {/* Left Content */}
          <div className="bg-zinc-900 p-12 lg:p-20 flex flex-col justify-center space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              Helping a software business strengthen trust before scaling
              visibility.
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              A strategic review of how digital clarity, messaging, and
              credibility can improve early market response.
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-secondary-container font-bold group"
              >
                View Case Study
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  north_east
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[400px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7swuKT_pVoMqWk2cudyevaIqgw84zzkdyngWi2PLjhoyqofpRV6BN5s6AflYPdLDVjs_GwA8J1nS6sHD9FI13k5HfDHbggDz0cq_cEdJMqMwnoVBLfgN6VywZL82rTB7qQ2iwZXi_m1Tb0KGsFdzTl0c7GWvpfBzyQEijtrcmqWfXtSNrp9eGaZOQZPgomHMJPeXPcqPg8nRJsdM9F-j9vxpq5FNFfTXFR7GcfyEg7jQ8NiED8oTZCYR1-HdQxH0qBodV5iA0WQ"
              alt="Featured strategic case"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCase;
