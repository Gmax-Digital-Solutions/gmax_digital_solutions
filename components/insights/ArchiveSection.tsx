"use client";
// components/ArchiveSection.tsx
import React from "react";
import { useInsights } from "@/hooks/useInsights";
import { LoadingSpinner } from "../animations";
import { Insight } from "@/types/insight";

type Props = {
  initialInsights: any[];
};

const ArchiveSection = ({ initialInsights }: Props) => {
  const { data, loading, refetch, error } = useInsights(initialInsights);
  console.log(data);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full text-center mx-auto py-24 px-6 bg-surface">
        <h2 className="text-4xl italic font-black text-surface-container-highest mb-6">
          Insights temporarily unavailable. Please try again shortly.
        </h2>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-surface text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2">
              The Archive
            </h2>
            <p className="text-on-surface-variant">
              Continuous perspective on digital market authority.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-medium text-zinc-400">
              Sort by: Date
            </span>
          </div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((card, index) => (
              <div
                key={index}
                className="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">
                    {card.category}
                  </span>
                  <h3 className="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">
                    {card.excerpt}
                  </p>
                </div>
                <a
                  className="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all"
                  href={`/insights/${card.slug}`}
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchiveSection;
