"use client";

import { useRef } from "react";
import { Insight } from "@/types/insight";
import Link from "next/link";

interface Props {
  insights: Insight[];
}

const FeaturedInsights = ({ insights }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Strategic Architecture
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface leading-none">
              Featured <span className="text-primary-container">Insights</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
              Precision-engineered strategies for small businesses ready to
              operate at enterprise scale.
            </p>
          </div>

          <div className="flex gap-3 md:gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-8 flex gap-6 md:gap-8 pb-10 md:pb-12"
      >
        {insights.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[90vw] md:w-[70vw] lg:w-[60vw] snap-start bg-white rounded-[24px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(32,26,28,0.08)] flex flex-col md:flex-row h-[420px] md:h-[500px] scrollbar-none"
          >
            {/* LEFT */}
            <div
              className={`md:w-1/2 p-8 md:p-12 flex flex-col justify-between ${
                item.theme === "dark"
                  ? "bg-on-background text-white"
                  : item.theme === "muted"
                    ? "bg-surface-container-low"
                    : "bg-surface-container-lowest"
              }`}
            >
              <div>
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-primary mb-6 md:mb-8 block">
                  {item.category}
                </span>

                <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[1.1]">
                  {item.title}
                </h2>
              </div>

              <Link
                href={item.slug}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="text-sm font-bold tracking-tight group-hover:text-primary transition">
                  read insight
                </span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition">
                  arrow_right_alt
                </span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="md:w-1/2 relative">
              <img
                src={item.hero_image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.theme === "dark" ? "from-[#201a1c]" : item.theme === "muted" ? "from-[#fdf1f3]" : "from-[#ffffff]"} via-transparent to-transparent hidden md:block`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar (basic) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-10 md:mt-12">
        <div className="w-full h-[2px] bg-outline-variant relative overflow-hidden">
          <div className="absolute h-full w-1/4 bg-primary transition-all duration-500 left-0"></div>
        </div>
        <div className="flex justify-between mt-3 md:mt-4 text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">
          <span>01 / Perspective</span>
          <span>Insight Archive</span>
        </div>
      </div>
    </main>
  );
};

export default FeaturedInsights;
