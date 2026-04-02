// components/FAQVisual.tsx
// components/FAQVisual.tsx
import React from "react";

const FAQVisual: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-24 text-on-surface-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Image */}
        <div className="md:col-span-7 h-[400px] relative rounded-xl overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpg_0Tb0hdYPwaX7VFNAFFOeQEsGTxuosrtw4qha7C5ZM8YLDEnh0GYNKnp2CITXTGchVGsrLP3AHrv_2bUeVIvZJAslV74kjPoYj0TCNplzL014qqodApAIa9zgRwhsWASw-Dl-Cp9BJyK7XLAycLVJdcTQpCzG2b7bOHzipiTn_URHvRM_ezGdUuVJlffPM9TvZrHGActp54yL4ZcymaXQQLB7u9MFdTJ-0Hz4nGmHm7Cl4HY9CQHRakJg54oh2oxs9CNVvGXUQ"
            alt="modern minimalist office with large windows"
            data-alt="modern minimalist glass office interior with high-end furniture, soft morning natural light, professional consulting atmosphere"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <p className="text-white text-xl font-bold">
              Refined Environments. Defined Results.
            </p>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="flex-1 bg-surface-container p-10 rounded-xl">
            <h4 className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">
              Direct Impact
            </h4>
            <p className="text-2xl font-bold leading-tight">
              Average 40% efficiency gain in first 90 days.
            </p>
          </div>
          <div className="flex-1 bg-on-background p-10 rounded-xl text-white">
            <h4 className="text-primary-container font-bold text-sm uppercase tracking-widest mb-4">
              Availability
            </h4>
            <p className="text-2xl font-bold leading-tight">
              Currently accepting 4 Clients per quarter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQVisual;
