"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";

export default function ResultsPage() {
  const router = useRouter();
  const { result } = useAuditStore();

  const [displayScore, setDisplayScore] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!result) {
      router.push("/audit/q1");
    }
  }, [result]);

  useEffect(() => {
    if (!result) return;

    let start = 0;
    const end = result.score || 72;
    const duration = 900;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setDisplayScore(end);
        clearInterval(counter);
      } else {
        setDisplayScore(Math.floor(start));
      }
    }, 16);

    setMounted(true);

    return () => clearInterval(counter);
  }, [result]);

  if (!result) return null;

  const {
    score = 72,
    summary = "",
    strengths = [],
    gaps = [],
    opportunities = [],
  } = result;

  const getLabel = (score: number) => {
    if (score > 80) return "High Visibility";
    if (score > 50) return "Moderate Visibility";
    return "Low Visibility";
  };

  return (
    <div className="relative min-h-screen flex text-[#241E20]">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-[0.03] "
        style={{
          backgroundImage:
            "linear-gradient(#241E20 1px, transparent 1px), linear-gradient(90deg, #241E20 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 flex-col px-8 py-10 border-r bg-white/70 backdrop-blur-md">
        <div className="mb-16">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-600">
            AI Visibility Monolith
          </span>
          <div className="h-[2px] w-12 bg-[#585DE1] mt-2" />
        </div>

        <nav className="space-y-8 flex-grow text-sm">
          <div>
            <p className="text-xs uppercase text-gray-400 mb-3">Report</p>
            <a className="text-[#585DE1] font-semibold block mb-2">
              Executive Summary
            </a>
            <a className="text-gray-500 block mb-2">Gap Analysis</a>
            <a className="text-gray-500 block">Opportunities</a>
          </div>
        </nav>

        <button className="mt-auto py-4 bg-[#585DE1] text-white text-xs uppercase font-bold tracking-widest hover:opacity-90 transition">
          Schedule Review
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-grow">
        {/* HEADER */}
        <header className="sticky top-0 bg-white/80 backdrop-blur border-b h-20 flex items-center justify-between px-12">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-500">
            Report ID: AI_{Date.now()}
          </span>

          <button className="text-xs uppercase text-gray-500 hover:text-black transition">
            Download PDF
          </button>
        </header>

        <div className="max-w-6xl mx-auto px-12 py-24 space-y-24">
          {/* HERO */}
          <section
            className={`grid lg:grid-cols-12 gap-16 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="lg:col-span-8">
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Your AI Visibility Audit is Complete
                <span className="text-[#585DE1]">.</span>
              </h1>

              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                {summary ||
                  "We analyzed your infrastructure and identified key visibility gaps affecting AI discovery."}
              </p>
            </div>

            {/* SCORE */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="border bg-white p-8 w-60 text-center shadow-sm">
                <p className="text-xs uppercase mb-2 text-gray-500">Score</p>

                <div className="text-6xl font-black tracking-tight">
                  {displayScore}
                </div>

                <p className="text-sm text-gray-500 mt-1">{getLabel(score)}</p>

                <div className="mt-6 h-1 bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-[#585DE1] transition-all duration-1000"
                    style={{ width: `${displayScore}%` }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* INSIGHTS */}
          <section className="grid md:grid-cols-3 gap-8 border-t border-b py-12">
            {[strengths, gaps, opportunities].map((group, idx) => {
              const titles = ["Strengths", "Gaps", "Opportunities"];

              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 delay-${idx * 150} ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <h3
                    className={`text-sm uppercase mb-4 ${
                      idx === 0 ? "text-[#585DE1]" : "text-gray-400"
                    }`}
                  >
                    {titles[idx]}
                  </h3>

                  <ul className="space-y-3">
                    {group.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 leading-relaxed"
                      >
                        / {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>

          {/* CTA */}
          <section
            className={`text-center space-y-6 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl font-bold">Turn this into growth.</h2>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-[#585DE1] text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition">
                Request Strategy
              </button>

              <button className="px-8 py-4 border text-sm hover:bg-gray-50 transition">
                Book Call
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
