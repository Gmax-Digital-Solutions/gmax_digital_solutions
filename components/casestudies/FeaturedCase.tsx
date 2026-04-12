import React from "react";
import DotGrid from "../DotGrid";
import { getFeaturedCaseStudies } from "@/lib/api/content";
import { useCaseStudies } from "@/hooks/useCaseStudies";

const FeaturedCase = async () => {
  const featuredCase = await getFeaturedCaseStudies();
  console.log(featuredCase);

  if (!featuredCase) {
    return (
      <div className="w-full text-center mx-auto py-24 px-6 bg-surface">
        <h2 className="text-4xl italic font-black text-surface-container-highest mb-6">
          No featured case study temporarily available. refresh the page
        </h2>
      </div>
    );
  }

  return (
    <section className="relative flex py-24 bg-on-background text-white overflow-hidden">
      <div>
        <div className="absolute w-full h-full top-0 left-0 ">
          <DotGrid
            dotSize={4}
            gap={16}
            baseColor="#201a1c"
            activeColor="#ffffff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={2}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 z-40">
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
              {featuredCase.title}
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              {featuredCase.subtitle}
            </p>

            <div className="pt-4">
              <a
                href={`/case-studies/${featuredCase.slug}`}
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
              src={featuredCase.hero_image}
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
