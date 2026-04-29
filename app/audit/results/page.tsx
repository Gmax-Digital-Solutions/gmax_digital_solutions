"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";

const NAV_ITEMS = [
  { label: "Executive Summary", id: "executive-summary" },
  { label: "Gap Analysis", id: "gap-analysis" },
  { label: "Competitive Landscape", id: "competitive-landscape" },
  { label: "Opportunities", id: "opportunities" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export default function ResultsPage() {
  const router = useRouter();
  const { result, answers } = useAuditStore();

  const [displayScore, setDisplayScore] = useState(0);
  const [displayCompScore, setDisplayCompScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] =
    useState<SectionId>("executive-summary");
  const [isPrinting, setIsPrinting] = useState(false);

  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    "executive-summary": null,
    "gap-analysis": null,
    "competitive-landscape": null,
    opportunities: null,
  });

  // Redirect if no result
  useEffect(() => {
    if (!result) router.push("/audit/q1");
  }, [result, router]);

  // Animated score counter — user score
  useEffect(() => {
    if (!result) return;
    const end = result.score ?? 60;
    const duration = 900;
    const increment = end / (duration / 16);
    let start = 0;
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

  // Animated score counter — competitor score
  useEffect(() => {
    if (!result?.competitor_analysis) return;
    const end = result.competitor_analysis.competitive_score ?? 50;
    const duration = 1100;
    const increment = end / (duration / 16);
    let start = 0;
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCompScore(end);
        clearInterval(counter);
      } else {
        setDisplayCompScore(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [result]);

  // Intersection observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [mounted]);

  const scrollTo = (id: SectionId) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ── PDF Download ── */
  const handleDownloadPDF = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  if (!result) return null;

  const {
    score = 60,
    summary = "",
    strengths = [],
    gaps = [],
    opportunities = [],
    quick_wins = [],
    long_term = [],
    visibility_outlook = "",
    competitor_analysis,
  } = result;

  const hasCompetitor = !!competitor_analysis;

  const getLabel = (s: number) => {
    if (s > 80) return "High Visibility";
    if (s > 50) return "Moderate Visibility";
    return "Low Visibility";
  };

  const getScoreColor = (s: number) => {
    if (s > 80) return "text-emerald-500";
    if (s > 50) return "text-[#585DE1]";
    return "text-rose-500";
  };

  const getScoreBg = (s: number) => {
    if (s > 80) return "bg-emerald-500";
    if (s > 50) return "bg-[#585DE1]";
    return "bg-rose-500";
  };

  const reportId = `AI_${Date.now()}`;

  return (
    <>
      {/* ── PRINT STYLES ── */}
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          aside { display: none !important; }
          header { position: static !important; box-shadow: none !important; border-bottom: 2px solid #585DE1 !important; }
          main { background: white !important; }
          section { break-inside: avoid; }
          .print-only { display: block !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        .print-only { display: none; }
      `}</style>

      <div className="relative min-h-screen flex text-[#241E20] mt-6">
        {/* Background grid */}
        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none no-print"
          style={{
            backgroundImage:
              "linear-gradient(#241E20 1px, transparent 1px), linear-gradient(90deg, #241E20 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── SIDEBAR ── */}
        <aside className="no-print hidden md:flex w-72 flex-col px-8 py-10 border-r bg-white/70 backdrop-blur-md sticky top-0 h-screen">
          <div className="mb-10">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-600">
              AI Visibility Monolith
            </span>
            <div className="h-[2px] w-12 bg-[#585DE1] mt-2" />
          </div>

          {/* Score pill in sidebar */}
          <div className="mb-8 p-4 border rounded-lg bg-white">
            <p className="text-xs text-gray-400 uppercase mb-1">Your Score</p>
            <div className={`text-3xl font-black ${getScoreColor(score)}`}>
              {displayScore}
              <span className="text-base text-gray-400 font-bold">/100</span>
            </div>
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${getScoreBg(score)} transition-all duration-1000`}
                style={{ width: `${displayScore}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{getLabel(score)}</p>
          </div>

          <nav className="space-y-1 flex-grow text-sm">
            <p className="text-xs uppercase text-gray-400 mb-3">Sections</p>
            {NAV_ITEMS.map(({ label, id }) => {
              if (id === "competitive-landscape" && !hasCompetitor) return null;
              const isActive = activeSection === id;
              return (
                <li key={id} className="list-none">
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-3 py-2 rounded transition-all text-sm font-medium flex items-center gap-2 ${
                      isActive
                        ? "text-[#585DE1] bg-[#585DE1]/8 font-semibold"
                        : "text-gray-500 hover:text-[#241E20] hover:bg-gray-100"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#585DE1] shrink-0" />
                    )}
                    {label}
                  </button>
                </li>
              );
            })}
          </nav>

          <button className="mt-6 py-4 bg-[#585DE1] text-white text-xs uppercase font-bold tracking-widest hover:opacity-90 transition">
            Schedule Review
          </button>
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-grow bg-white/20 backdrop-blur">
          {/* Header */}
          <header className="sticky top-0 bg-white/90 backdrop-blur border-b h-20 flex items-center justify-between px-8 md:px-12 z-10">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">
              Report ID: {reportId}
            </span>
            <button
              onClick={handleDownloadPDF}
              disabled={isPrinting}
              className="no-print flex items-center gap-2 text-xs uppercase font-semibold text-gray-500 hover:text-[#585DE1] transition border px-4 py-2 rounded-lg hover:border-[#585DE1]"
            >
              <span className="material-symbols-outlined text-base">
                download
              </span>
              {isPrinting ? "Preparing..." : "Download PDF"}
            </button>
          </header>

          <div className="max-w-5xl mx-auto px-8 md:px-12 py-24 space-y-32">
            {/* ── SECTION 1: Executive Summary ── */}
            <section
              id="executive-summary"
              ref={(el) => {
                sectionRefs.current["executive-summary"] = el;
              }}
              className={`grid lg:grid-cols-12 gap-16 scroll-mt-28 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="lg:col-span-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  Executive Summary
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Your AI Visibility Audit is Complete
                  <span className="text-[#585DE1]">.</span>
                </h1>
                <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                  {summary}
                </p>

                {/* Visibility outlook */}
                {visibility_outlook && (
                  <div className="mt-8 p-4 border-l-4 border-[#585DE1] bg-[#585DE1]/5 rounded-r-lg">
                    <p className="text-sm text-[#585DE1] font-semibold mb-1 uppercase tracking-wide">
                      Outlook
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {visibility_outlook}
                    </p>
                  </div>
                )}

                {/* Strengths */}
                {strengths.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xs uppercase tracking-widest text-[#585DE1] mb-4 font-bold">
                      What's Working
                    </h3>
                    <ul className="space-y-3">
                      {strengths.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-[#585DE1] font-bold mt-0.5 shrink-0">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Score card */}
              <div className="lg:col-span-4 flex justify-center items-start">
                <div className="border bg-white p-8 w-full max-w-[220px] text-center shadow-sm rounded-xl">
                  <p className="text-xs uppercase mb-2 text-gray-500 font-semibold tracking-widest">
                    Your Score
                  </p>
                  <div
                    className={`text-6xl font-black tracking-tight ${getScoreColor(score)}`}
                  >
                    {displayScore}
                    <span className="text-2xl font-bold text-gray-400">
                      /100
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {getLabel(score)}
                  </p>
                  <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getScoreBg(score)} transition-all duration-1000 rounded-full`}
                      style={{ width: `${displayScore}%` }}
                    />
                  </div>
                  {answers.website_url && (
                    <p className="mt-4 text-[10px] text-gray-400 break-all">
                      {answers.website_url}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ── SECTION 2: Gap Analysis ── */}
            <section
              id="gap-analysis"
              ref={(el) => {
                sectionRefs.current["gap-analysis"] = el;
              }}
              className={`scroll-mt-28 transition-all duration-700 delay-150 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Section 02
              </p>
              <h2 className="text-3xl font-extrabold mb-2">Gap Analysis</h2>
              <p className="text-gray-500 text-sm mb-4 max-w-xl">
                These are the specific friction points preventing AI systems and
                search engines from fully understanding and surfacing your
                brand.
              </p>
              <div className="h-[2px] w-12 bg-rose-400 mb-10" />

              {gaps.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  No significant gaps identified.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {gaps.map((item, i) => (
                    <div
                      key={i}
                      className="border border-rose-100 bg-rose-50/60 p-6 rounded-xl flex gap-4"
                    >
                      <span className="text-rose-400 font-black text-lg leading-none mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ── SECTION 3: Competitive Landscape ── */}
            {hasCompetitor && (
              <section
                id="competitive-landscape"
                ref={(el) => {
                  sectionRefs.current["competitive-landscape"] = el;
                }}
                className={`scroll-mt-28 transition-all duration-700 delay-200 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Section 03
                </p>
                <h2 className="text-3xl font-extrabold mb-2">
                  Competitive Landscape
                </h2>
                <p className="text-gray-500 text-sm mb-4 max-w-xl">
                  How your AI visibility stacks up against{" "}
                  <span className="font-semibold text-[#241E20]">
                    {competitor_analysis!.competitor_name}
                  </span>{" "}
                  — and where you can overtake them.
                </p>
                <div className="h-[2px] w-12 bg-amber-400 mb-10" />

                {/* Score comparison */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* You */}
                  <div className="border bg-white p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-0.5">
                          You
                        </p>
                        <p className="text-xs text-gray-500 truncate max-w-[160px]">
                          {answers.website_url ?? "Your site"}
                        </p>
                      </div>
                      <span
                        className={`text-3xl font-black ${getScoreColor(score)}`}
                      >
                        {displayScore}
                        <span className="text-base font-bold text-gray-300">
                          /100
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getScoreBg(score)} transition-all duration-1000 rounded-full`}
                        style={{ width: `${displayScore}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {getLabel(score)}
                    </p>
                  </div>

                  {/* Competitor */}
                  <div className="border bg-white p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-0.5">
                          {competitor_analysis!.competitor_name}
                        </p>
                        <p className="text-xs text-gray-500 truncate max-w-[160px]">
                          {competitor_analysis!.competitor_url}
                        </p>
                      </div>
                      <span
                        className={`text-3xl font-black ${getScoreColor(competitor_analysis!.competitive_score)}`}
                      >
                        {displayCompScore}
                        <span className="text-base font-bold text-gray-300">
                          /100
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getScoreBg(competitor_analysis!.competitive_score)} transition-all duration-1000 rounded-full`}
                        style={{ width: `${displayCompScore}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {getLabel(competitor_analysis!.competitive_score)}
                    </p>
                  </div>
                </div>

                {/* Verdict banner */}
                <div className="border border-amber-200 bg-amber-50/60 rounded-xl p-5 mb-10 flex gap-3">
                  <span className="text-amber-500 material-symbols-outlined shrink-0">
                    gavel
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {competitor_analysis!.verdict}
                  </p>
                </div>

                {/* Three column breakdown */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Their Strengths */}
                  <div className="border border-rose-100 bg-rose-50/40 p-6 rounded-xl">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-rose-500 mb-4">
                      Their Strengths
                    </h4>
                    <ul className="space-y-3">
                      {competitor_analysis!.their_strengths.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-rose-400 font-bold shrink-0">
                            ↑
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Advantages */}
                  <div className="border border-emerald-100 bg-emerald-50/40 p-6 rounded-xl">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-emerald-600 mb-4">
                      Your Advantages
                    </h4>
                    <ul className="space-y-3">
                      {competitor_analysis!.your_advantages.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-emerald-500 font-bold shrink-0">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gaps to Close */}
                  <div className="border border-blue-100 bg-blue-50/40 p-6 rounded-xl">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-[#585DE1] mb-4">
                      Gaps to Close
                    </h4>
                    <ul className="space-y-3">
                      {competitor_analysis!.gaps_to_close.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-[#585DE1] font-bold shrink-0">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* ── SECTION 4: Opportunities ── */}
            <section
              id="opportunities"
              ref={(el) => {
                sectionRefs.current["opportunities"] = el;
              }}
              className={`scroll-mt-28 transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Section {hasCompetitor ? "04" : "03"}
              </p>
              <h2 className="text-3xl font-extrabold mb-2">Opportunities</h2>
              <p className="text-gray-500 text-sm mb-4 max-w-xl">
                Specific actions ranked by impact. Each one is designed to
                improve your AI discoverability and organic growth.
              </p>
              <div className="h-[2px] w-12 bg-emerald-400 mb-10" />

              {opportunities.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {opportunities.map((item, i) => (
                    <div
                      key={i}
                      className="border border-emerald-100 bg-emerald-50/50 p-6 rounded-xl flex gap-4"
                    >
                      <span className="text-emerald-500 font-black text-lg leading-none mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick wins + Long term */}
              <div className="grid md:grid-cols-2 gap-6">
                {quick_wins.length > 0 && (
                  <div className="border border-[#585DE1]/20 bg-[#585DE1]/5 p-6 rounded-xl">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-[#585DE1] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        bolt
                      </span>
                      Quick Wins (30 days)
                    </h4>
                    <ul className="space-y-3">
                      {quick_wins.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-[#585DE1] font-bold shrink-0">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {long_term.length > 0 && (
                  <div className="border border-purple-100 bg-purple-50/40 p-6 rounded-xl">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-purple-600 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        timeline
                      </span>
                      Long-Term Plays (6–12 months)
                    </h4>
                    <ul className="space-y-3">
                      {long_term.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-purple-500 font-bold shrink-0">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* ── CTA ── */}
            <section
              className={`no-print text-center space-y-6 transition-all duration-700 delay-300 border-t pt-20 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Next Step
              </p>
              <h2 className="text-3xl font-bold">
                Turn this audit into growth.
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Get a personalized 60-minute strategy session to prioritize your
                opportunities and build a roadmap.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="px-8 py-4 bg-[#585DE1] text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition rounded-xl">
                  Request Strategy Session
                </button>
                <button className="px-8 py-4 border text-sm hover:bg-gray-50 transition rounded-xl font-semibold">
                  Book a Call
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
