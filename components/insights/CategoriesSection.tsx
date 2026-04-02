// components/CategoriesSection.tsx
import React from "react";

type Category = {
  icon: string;
  title: string;
};

const categories: Category[] = [
  { icon: "layers", title: "Product Positioning" },
  { icon: "record_voice_over", title: "Founder Marketing" },
  { icon: "verified", title: "Digital Trust" },
  { icon: "trending_up", title: "Growth Strategy" },
  { icon: "rocket_launch", title: "Market Readiness" },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-low text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-12 text-center text-on-surface-variant">
          Focus Domains
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
            >
              <span className="material-symbols-outlined text-4xl mb-4">
                {category.icon}
              </span>
              <h4 className="font-bold">{category.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
