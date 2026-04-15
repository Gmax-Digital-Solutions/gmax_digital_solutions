"use client";

import { useCaseStudies } from "@/hooks/useCaseStudies";
import { LoadingSpinner } from "../animations";

type Props = {
  initialData: any[];
};

const CaseStudyGrid = ({ initialData }: Props) => {
  const { data, loading, error, refetch } = useCaseStudies(initialData);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full text-center mx-auto py-24 px-6 bg-surface">
        <h2 className="text-4xl italic font-black text-surface-container-highest mb-6">
          Case Studies temporarily unavailable. Please try again shortly.
        </h2>
        <button className="" onClick={refetch}>
          refresh
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 bg-surface text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-on-background">
            Selected Strategic Work
          </h2>
          <div className="h-1 w-20 bg-primary-container mt-4"></div>
        </div>

        {/* Grid */}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            {data.map((study, index) => (
              <div
                key={index}
                className="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20"
              >
                <div className="mb-6 overflow-hidden rounded-lg aspect-video">
                  <img
                    src={study.hero_image}
                    alt="Case study visual"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
                  {study.title}
                </h3>

                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  {study.excerpt}
                </p>

                <a
                  href={`case-studies/${study.slug}`}
                  className="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link"
                >
                  Read Case Study
                  <span className="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGrid;
