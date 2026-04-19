// components/TestimonialSection.tsx
"use client";

import React, { useState, useRef } from "react";
import FloatingLines from "../FloatingLines";
import { Testimonial } from "@/types/testimonial";

type Props = {
  testimonialData: any[];
};

const GAP = 32;

const TestimonialSection = ({ testimonialData }: Props) => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.children[0].clientWidth;
    trackRef.current.style.transform = `translateX(-${index * (cardWidth + GAP)}px)`;
    setCurrent(index);
  };

  const handlePrev = () => {
    if (current > 0) goTo(current - 1);
  };
  const handleNext = () => {
    if (current < testimonialData.length - 1) goTo(current + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-[#FFD700]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    ));
  };

  return (
    <main className="relative pt-32 pb-24 overflow-hidden bg-on-background">
      {/* Header */}
      <div className="h-full w-full absolute top-0 left-0">
        <FloatingLines
          linesGradient={["#201a1c", "#2F4BC0", "#4d0652"]}
          animationSpeed={0.5}
          interactive
          bendRadius={2}
          bendStrength={-0.5}
          mouseDamping={0.09}
          parallax
          parallaxStrength={0.1}
        />
      </div>
      <header className="max-w-7xl mx-auto px-8 mb-20 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="label-md uppercase tracking-[0.2em] text-[#585DE1] font-bold mb-4 block">
              Client Perspectives
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-none mb-6">
              Engineered for <br />
              <span className="text-[#585DE1]">Exceptional</span> Outcomes.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              We don't just provide services; we build architectural foundations
              for small businesses ready to scale. See how Gmax Digital
              transforms enterprise potential.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-4 z-40">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-[#585DE1] hover:border-[#585DE1] transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">
                chevron_left
              </span>
            </button>
            <button
              onClick={handleNext}
              disabled={current === testimonialData.length - 1}
              className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-[#585DE1] hover:border-[#585DE1] transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <section id="testimonials" className="relative">
        <div className="overflow-hidden pl-8">
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            {testimonialData.map((t) => (
              <div
                key={t.id}
                className="w-[85vw] md:w-[600px] md:min-w-[600px] flex-shrink-0"
              >
                <div
                  className="p-10 md:p-12 h-full flex flex-col justify-between transition-all duration-500 hover:bg-[#2e292b]"
                  style={{
                    backgroundColor: "#2a2527",
                    borderLeft: `4px solid ${t.accentColor}`,
                  }}
                >
                  <div>
                    {/* Stars + Quote icon */}
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex gap-1">{renderStars(t.rating)}</div>
                      <span className="material-symbols-outlined text-white/10 text-6xl">
                        format_quote
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-bold mb-6 leading-tight"
                      style={{ color: t.accentColor }}
                    >
                      "{t.highlight}"
                    </h3>

                    <p className="text-white/80 leading-relaxed text-lg mb-10">
                      {t.review_text}
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                      <img
                        src={t.image}
                        alt={t.client_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-tight">
                        {t.client_name}
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {t.client_title}, {t.company_name} • {t.client_location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination bars */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonialData.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              className="w-10 h-1 transition-all duration-300"
              style={{
                background:
                  i === current ? t.accentColor : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-32 max-w-7xl mx-auto px-8">
        <div className="relative h-px bg-white/5 w-full">
          <div className="absolute -top-24 right-0 bg-[#585DE1] p-10 max-w-md rounded-lg">
            <p className="text-sm uppercase tracking-widest font-bold mb-4">
              The Impact
            </p>
            <p className="text-3xl font-black italic leading-none">
              92% Retention Rate
            </p>
            <p className="mt-4 text-white/60 text-sm">
              Long-term partnerships built on measurable results and
              architectural integrity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialSection;
