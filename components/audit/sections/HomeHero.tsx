"use client";

import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <header className="relative my-6 pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low/10 text-primary mb-6">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Next-Gen Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-[#241E20] mb-6">
            See How Visible Your Business Is to AI.
          </h1>

          {/* Description */}
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            LLMs like ChatGPT and Perplexity are changing how the world finds
            answers. Get your personalized Answer Engine Readiness Score in 60
            seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-base shadow-xl shadow-secondary/20 hover:translate-y-[-2px] transition-all"
              onClick={() => {
                window.location.href = "/audit/q1";
              }}
            >
              Start Audit
            </button>

            <button className="bg-transparent text-[#241E20] border-2 border-outline-variant px-8 py-4 rounded-md font-bold text-base hover:bg-surface-container-low transition-all">
              View Methodology
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>

          <div className="relative bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/30">
            {/* Image */}
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8C0YDWk-dt3BGPH8xENNjjrl-PadXdX1inMPyRsd1NvY-H9gmTstts-PXo8udWvxRZ8-YgsoA3CNX5peWFpzqDx0mekkQxYEzZAz75eG529azfWScsrcIimEcjBkS5SRAhbvkBtt-RF1FBm0_ZUDF3cSDCknnE8M78DiIPqvqYd7_EApDHKyTuq0IyQns3TuX0K9VDOxOzOIYIPS9T2yrVp_9YNKWl7y8AUkFKMxx5zYyjbEqDrmiWVKW5hiW7CW8zupvfBXJtDs"
              alt="AI visualization of neural networks"
              width={800}
              height={450}
              className="rounded-lg w-full aspect-video object-cover mb-8 shadow-inner"
              priority
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary">
                <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">
                  Current Visibility
                </p>
                <p className="text-2xl font-black text-[#241E20]">14.2%</p>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-tighter mb-1">
                  Answer Probability
                </p>
                <p className="text-2xl font-black text-[#241E20]">Low</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND EFFECT */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-surface-container-low/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />
      </div>
    </header>
  );
};

export default HeroSection;
