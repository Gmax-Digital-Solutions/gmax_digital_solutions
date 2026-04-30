// // components/CoreFrameworkSection.tsx
// import Image from "next/image";

// interface TagProps {
//   label: string;
// }

// const Tag = ({ label }: TagProps) => (
//   <span className="px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">
//     {label}
//   </span>
// );

// interface ProgressBarProps {
//   width: "w-3/4" | "w-1/2" | "w-full" | "w-1/4";
// }

// const ProgressBar = ({ width }: ProgressBarProps) => (
//   <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
//     <div className={`h-full bg-secondary ${width}`} />
//   </div>
// );

// export default function CoreFrameworkSection() {
//   return (
//     <section className="w-full py-24 bg-surface-container-lowest border-t border-outline-variant/30">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-black tracking-tight text-[#241E20] uppercase mb-2">
//             Our Core Framework
//           </h2>
//           <div className="h-1 w-20 bg-secondary" />
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {/* 1. Semantic Authority Analysis — wide */}
//           <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl shadow-sm border border-outline-variant/20 group hover:shadow-md transition-shadow">
//             <div className="flex items-start justify-between mb-8">
//               <div>
//                 <span className="material-symbols-outlined text-primary text-4xl mb-4">
//                   hub
//                 </span>
//                 <h3 className="text-2xl font-extrabold text-[#241E20] mb-4">
//                   Semantic Authority Analysis
//                 </h3>
//                 <p className="text-on-surface-variant max-w-lg">
//                   We analyze how AI agents perceive your brand&apos;s expertise.
//                   Our proprietary engine maps your entity relationship across
//                   top-tier LLMs to ensure your authority is recognized.
//                 </p>
//               </div>
//               <span className="text-6xl font-black text-surface-dim/40 select-none">
//                 01
//               </span>
//             </div>
//             <div className="flex gap-2">
//               <Tag label="Entity Mapping" />
//               <Tag label="Context Validation" />
//             </div>
//           </div>

//           {/* 2. Gap Identification — narrow */}
//           <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/20 group hover:shadow-md transition-shadow">
//             <span className="material-symbols-outlined text-secondary text-4xl mb-4">
//               troubleshoot
//             </span>
//             <h3 className="text-2xl font-extrabold text-[#241E20] mb-4">
//               Gap Identification
//             </h3>
//             <p className="text-on-surface-variant mb-6">
//               Pinpoint precisely where LLMs lose the thread of your story.
//             </p>
//             <div className="space-y-4">
//               <ProgressBar width="w-3/4" />
//               <ProgressBar width="w-1/2" />
//             </div>
//           </div>

//           {/* 3. Trust Calibration — narrow */}
//           <div className="md:col-span-4 bg-secondary p-10 rounded-xl shadow-lg flex flex-col justify-between text-white">
//             <div>
//               <span className="material-symbols-outlined text-4xl mb-6">
//                 verified_user
//               </span>
//               <h3 className="text-2xl font-extrabold mb-4">
//                 Trust Calibration
//               </h3>
//               <p className="text-white/80">
//                 LLMs prioritize factual accuracy and source credibility. We
//                 calibrate your digital footprint to meet the &apos;Source
//                 Citation&apos; threshold.
//               </p>
//             </div>
//             <button
//               type="button"
//               className="mt-8 text-white font-bold flex items-center gap-2 group"
//             >
//               Learn More{" "}
//               <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
//                 arrow_forward
//               </span>
//             </button>
//           </div>

//           {/* 4. Executive Dashboard Integration — wide */}
//           <div className="md:col-span-8 bg-[#241E20] p-10 rounded-xl shadow-xl overflow-hidden relative group">
//             <div className="relative z-10 flex flex-col h-full">
//               <h3 className="text-2xl font-extrabold text-white mb-4">
//                 Executive Dashboard Integration
//               </h3>
//               <p className="text-zinc-400 max-w-md mb-8">
//                 Real-time visibility metrics integrated directly into your
//                 existing reporting suite. Monitor your readiness score as your
//                 digital strategy evolves.
//               </p>
//               <div className="mt-auto flex items-center gap-8">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-3xl font-black text-white">99.9%</span>
//                   <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
//                     Uptime
//                   </span>
//                 </div>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-3xl font-black text-primary-container">
//                     60s
//                   </span>
//                   <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
//                     Audit Speed
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Background dashboard image */}
//             <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzs5thpK4myzICJH5m1qWL4IYLanRuPnUqIva8iY3t7ImFHyo4Oe5Gy_1nFLjuFLd6RJzTy-FLnELx5PVH5hyj41qasq_Nkh81wPTYz1aLGqKmbn8LwswUwad10sfjdsfpcuhMCBJYPMLXzVlSccZW2UCwGOIgMtgpJLI4KahDJ4T1qmoBu_QjFvJaCJZyYiPAKnTVR8QKndQ5FZaO1U0gyZAHgIG9aRwQwJBP88u5Hw5UYa_V0_VzNgQGqgKPA_WtFWTtSIUT_XQ"
//               alt="Abstract dark data visualization dashboard with glowing blue and white lines on a charcoal background, high contrast, professional"
//               fill
//               className="absolute right-0 bottom-0 object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500"
//               sizes="(max-width: 768px) 100vw, 66vw"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => (
  <span className="px-3 py-1 rounded bg-[#585DE1]/10 text-[#585DE1] text-[10px] font-bold uppercase">
    {label}
  </span>
);

interface ProgressBarProps {
  width: "w-3/4" | "w-1/2" | "w-full" | "w-1/4";
  label: string;
  pct: string;
}

const ProgressBar = ({ width, label, pct }: ProgressBarProps) => (
  <div>
    <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest mb-1">
      <span>{label}</span>
      <span>{pct}</span>
    </div>
    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
      <div
        className={`h-full bg-rose-400 ${width} transition-all duration-700`}
      />
    </div>
  </div>
);

// These mirror the 4 report sections in ResultsPage
const pillars = [
  {
    id: "executive-summary",
    icon: "hub",
    number: "01",
    title: "Semantic Authority Analysis",
    description:
      "We map how AI agents perceive your brand's expertise across top-tier LLMs — ChatGPT, Gemini, Claude, and Perplexity — and score your entity recognition against industry benchmarks.",
    tags: ["Entity Mapping", "Context Validation"],
    span: "md:col-span-8",
    dark: false,
  },
  {
    id: "gap-analysis",
    icon: "troubleshoot",
    number: "02",
    title: "Gap Identification",
    description:
      "Pinpoint precisely where LLMs lose the thread of your story. We surface the exact content, schema, and citation gaps dragging your score down.",
    tags: [],
    span: "md:col-span-4",
    dark: false,
    showBars: true,
  },
  {
    id: "competition",
    icon: "verified_user",
    number: "03",
    title: "Competitive Benchmarking",
    description:
      "We compare your AI visibility against similar businesses in your space — showing you exactly where competitors are winning citations you should own.",
    tags: [],
    span: "md:col-span-4",
    dark: true,
    accent: true,
  },
] as const;

export default function CoreFrameworkSection() {
  return (
    <section id="how-it-works" className="py-24 px-8 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#585DE1] mb-3">
              How Your Audit Works
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#241E20] uppercase mb-2">
              Your Report Covers Four Areas
            </h2>
            <div className="h-1 w-20 bg-[#585DE1]" />
          </div>
          <Link
            href="/audit/q1"
            className="shrink-0 px-6 py-3 bg-[#241E20] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-800 transition"
          >
            Start Free Audit →
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 01 — Semantic Authority (wide) */}
          <div className="md:col-span-8 bg-gray-50 p-10 rounded-xl border border-gray-100 group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="material-symbols-outlined text-[#585DE1] text-4xl mb-4 block">
                  hub
                </span>
                <h3 className="text-2xl font-extrabold text-[#241E20] mb-4">
                  Semantic Authority Analysis
                </h3>
                <p className="text-gray-500 max-w-lg leading-relaxed">
                  We map how AI agents perceive your brand&apos;s expertise
                  across ChatGPT, Gemini, Claude, and Perplexity — scored
                  against real industry benchmarks.
                </p>
              </div>
              <span className="text-6xl font-black text-gray-100 select-none shrink-0 ml-4">
                01
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Tag label="Entity Mapping" />
              <Tag label="Context Validation" />
              <Tag label="LLM Citation Check" />
            </div>
          </div>

          {/* 02 — Gap Identification (narrow) */}
          <div className="md:col-span-4 bg-gray-50 p-10 rounded-xl border border-gray-100 group hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-rose-400 text-4xl mb-4 block">
              troubleshoot
            </span>
            <h3 className="text-2xl font-extrabold text-[#241E20] mb-2">
              Gap Identification
            </h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              We surface the exact content, schema, and citation gaps dragging
              your AI visibility score down — before your competitors exploit
              them.
            </p>
            <div className="space-y-4">
              <ProgressBar width="w-3/4" label="Schema Coverage" pct="74%" />
              <ProgressBar width="w-1/2" label="Citation Depth" pct="50%" />
            </div>
          </div>

          {/* 03 — Competitive Benchmarking (narrow, dark accent) */}
          <div className="md:col-span-4 bg-[#585DE1] p-10 rounded-xl shadow-lg flex flex-col justify-between text-white">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 block">
                leaderboard
              </span>
              <h3 className="text-2xl font-extrabold mb-4">
                Competitive Benchmarking
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                See how you stack up against similar businesses in your space.
                We identify which competitors AI tools cite instead of you — and
                why.
              </p>
            </div>
            <Link
              href="/audit/q1"
              className="mt-8 text-white font-bold flex items-center gap-2 group text-sm"
            >
              See Your Benchmark{" "}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-base">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 04 — Executive Dashboard (wide, dark) */}
          <div className="md:col-span-8 bg-[#241E20] p-10 rounded-xl shadow-xl overflow-hidden relative group">
            <div className="relative z-10 flex flex-col h-full min-h-[220px]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                04 — Opportunities Report
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Actionable Growth Opportunities
              </h3>
              <p className="text-zinc-400 max-w-md mb-8 text-sm leading-relaxed">
                Every audit closes with a prioritized list of opportunities —
                the exact moves that will improve your AI discoverability score
                in the next 90 days.
              </p>
              <div className="mt-auto flex items-center gap-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">99.9%</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                    Uptime
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#585DE1]">
                    60s
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                    Audit Speed
                  </span>
                </div>
              </div>
            </div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzs5thpK4myzICJH5m1qWL4IYLanRuPnUqIva8iY3t7ImFHyo4Oe5Gy_1nFLjuFLd6RJzTy-FLnELx5PVH5hyj41qasq_Nkh81wPTYz1aLGqKmbn8LwswUwad10sfjdsfpcuhMCBJYPMLXzVlSccZW2UCwGOIgMtgpJLI4KahDJ4T1qmoBu_QjFvJaCJZyYiPAKnTVR8QKndQ5FZaO1U0gyZAHgIG9aRwQwJBP88u5Hw5UYa_V0_VzNgQGqgKPA_WtFWTtSIUT_XQ"
              alt="Dashboard data visualization"
              fill
              className="absolute right-0 bottom-0 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
