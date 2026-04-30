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

  // Email gate state
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    "executive-summary": null,
    "gap-analysis": null,
    "competitive-landscape": null,
    opportunities: null,
  });

  useEffect(() => {
    if (!result) router.push("/audit/q1");
  }, [result, router]);

  // Animated score counter
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
      } else setDisplayScore(Math.floor(start));
    }, 16);
    setMounted(true);
    return () => clearInterval(counter);
  }, [result]);

  // Competitor score counter
  useEffect(() => {
    if (!result?.competitor_analysis || !emailSubmitted) return;
    const end = result.competitor_analysis.competitive_score ?? 50;
    const duration = 1100;
    const increment = end / (duration / 16);
    let start = 0;
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCompScore(end);
        clearInterval(counter);
      } else setDisplayCompScore(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, [result, emailSubmitted]);

  // Intersection observer
  useEffect(() => {
    if (!emailSubmitted) return;
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
    return () => observers.forEach((o) => o.disconnect());
  }, [mounted, emailSubmitted]);

  const scrollTo = (id: SectionId) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ── Email submit ── */
  const handleEmailSubmit = async () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setEmailLoading(true);

    try {
      await fetch("/api/audit/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, result, answers }),
      });
      setEmailSubmitted(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setEmailLoading(false);
    }
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

  const getLabel = (s: number) =>
    s > 80
      ? "High Visibility"
      : s > 50
        ? "Moderate Visibility"
        : "Low Visibility";

  const getScoreColor = (s: number) =>
    s > 80 ? "text-emerald-500" : s > 50 ? "text-[#585DE1]" : "text-rose-500";

  const getScoreBg = (s: number) =>
    s > 80 ? "bg-emerald-500" : s > 50 ? "bg-[#585DE1]" : "bg-rose-500";

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          aside { display: none !important; }
          header { position: static !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-semibold animate-in slide-in-from-top-2">
          <span className="material-symbols-outlined text-base">
            mark_email_read
          </span>
          Report sent to {email}
        </div>
      )}

      <div className="relative min-h-screen flex text-[#241E20]">
        {/* Background grid */}
        <div
          className="fixed inset-0 opacity-[0.025] pointer-events-none no-print"
          style={{
            backgroundImage:
              "linear-gradient(#241E20 1px, transparent 1px), linear-gradient(90deg, #241E20 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── SIDEBAR ── */}
        <aside className="no-print hidden md:flex w-64 flex-col px-6 py-8 border-r bg-white/80 backdrop-blur-md sticky top-0 h-screen shrink-0">
          <div className="mb-8">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">
              AI Visibility Monolith
            </span>
            <div className="h-[2px] w-10 bg-[#585DE1] mt-2" />
          </div>

          {/* Score pill */}
          <div className="mb-6 p-4 border rounded-xl bg-white shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-widest mb-1">
              Your Score
            </p>
            <div className={`text-3xl font-black ${getScoreColor(score)}`}>
              {displayScore}
              <span className="text-sm text-gray-300 font-bold">/100</span>
            </div>
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${getScoreBg(score)} transition-all duration-1000 rounded-full`}
                style={{ width: `${displayScore}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5">
              {getLabel(score)}
            </p>
          </div>

          <nav className="flex-grow space-y-0.5">
            <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-widest mb-2">
              Sections
            </p>
            {NAV_ITEMS.map(({ label, id }) => {
              if (id === "competitive-landscape" && !hasCompetitor) return null;
              const isActive = activeSection === id;
              const isLocked = !emailSubmitted && id !== "executive-summary";
              return (
                <button
                  key={id}
                  onClick={() => !isLocked && scrollTo(id)}
                  disabled={isLocked}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-xs font-medium flex items-center gap-2 ${
                    isLocked
                      ? "text-gray-300 cursor-default"
                      : isActive
                        ? "text-[#585DE1] bg-[#585DE1]/8 font-semibold"
                        : "text-gray-500 hover:text-[#241E20] hover:bg-gray-100"
                  }`}
                >
                  {isLocked ? (
                    <span className="material-symbols-outlined text-xs text-gray-300">
                      lock
                    </span>
                  ) : isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#585DE1] shrink-0" />
                  ) : null}
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 space-y-2">
            {emailSubmitted && (
              <button
                onClick={handleDownloadPDF}
                disabled={isPrinting}
                className="no-print w-full py-2.5 border border-[#585DE1] text-[#585DE1] text-xs uppercase font-bold tracking-widest hover:bg-[#585DE1] hover:text-white transition rounded-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  download
                </span>
                {isPrinting ? "Preparing…" : "Download PDF"}
              </button>
            )}
            <a
              href="https://calendly.com/hello-gmaxdigitals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#585DE1] text-white text-xs uppercase font-bold tracking-widest hover:opacity-90 transition rounded-lg inline-flex items-center justify-center"
            >
              Schedule Review
            </a>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-grow min-w-0 bg-white/30 backdrop-blur">
          {/* Header */}
          <header className="no-print sticky top-0 bg-white/90 backdrop-blur border-b h-16 flex items-center justify-between px-8 z-10">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                AI Visibility Monolith
              </span>
              <span className="text-gray-200">|</span>
              <span className="text-[10px] text-gray-400 font-medium">
                Full Report
              </span>
            </div>
            <div className="flex items-center gap-3">
              {emailSubmitted && (
                <button
                  onClick={handleDownloadPDF}
                  disabled={isPrinting}
                  className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gray-400 hover:text-[#585DE1] transition border px-3 py-2 rounded-lg hover:border-[#585DE1]"
                >
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>
                  {isPrinting ? "Preparing…" : "Download PDF"}
                </button>
              )}
              <button
                onClick={() => {
                  useAuditStore.getState().reset();
                  router.push("/audit/q1");
                }}
                className="text-[10px] uppercase font-bold text-gray-400 hover:text-black transition"
              >
                Retake Audit
              </button>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-8 md:px-12 py-16 space-y-28">
            {/* ── SECTION 1: Executive Summary ── */}
            <section
              id="executive-summary"
              ref={(el) => {
                sectionRefs.current["executive-summary"] = el;
              }}
              className={`grid lg:grid-cols-12 gap-12 scroll-mt-24 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="lg:col-span-8">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-semibold">
                  Executive Summary
                </p>
                <h1 className="text-4xl font-extrabold mb-6 leading-tight text-[#241E20]">
                  Your AI Visibility Audit
                  <span className="text-[#585DE1]">.</span>
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  {summary}
                </p>

                {visibility_outlook && (
                  <div className="mt-6 p-4 border-l-4 border-[#585DE1] bg-[#585DE1]/5 rounded-r-xl">
                    <p className="text-[10px] text-[#585DE1] font-bold uppercase tracking-widest mb-1">
                      Outlook
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {visibility_outlook}
                    </p>
                  </div>
                )}

                {strengths.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-[10px] uppercase tracking-widest text-[#585DE1] mb-3 font-bold">
                      What's Working
                    </h3>
                    <ul className="space-y-2.5">
                      {strengths.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                        >
                          <span className="text-[#585DE1] font-black mt-0.5 shrink-0">
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
                <div className="border bg-white p-7 w-full max-w-[200px] text-center shadow-sm rounded-2xl">
                  <p className="text-[10px] uppercase mb-2 text-gray-400 font-bold tracking-widest">
                    Score
                  </p>
                  <div
                    className={`text-5xl font-black tracking-tight ${getScoreColor(score)}`}
                  >
                    {displayScore}
                    <span className="text-xl font-bold text-gray-300">
                      /100
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-medium">
                    {getLabel(score)}
                  </p>
                  <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getScoreBg(score)} transition-all duration-1000 rounded-full`}
                      style={{ width: `${displayScore}%` }}
                    />
                  </div>
                  {answers?.website_url && (
                    <p className="mt-3 text-[9px] text-gray-400 break-all">
                      {answers.website_url}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ── EMAIL GATE ── */}
            {!emailSubmitted && (
              <section className="relative">
                {/* Blurred preview of what's below */}
                <div className="absolute inset-0 -top-4 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="grid md:grid-cols-2 gap-4 opacity-30 blur-sm select-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="border border-rose-100 bg-rose-50/60 p-6 rounded-xl h-24"
                      />
                    ))}
                  </div>
                </div>

                {/* Gate card */}
                <div className="relative border-2 border-[#585DE1]/30 bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
                  <div className="w-14 h-14 bg-[#585DE1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[#585DE1] text-2xl">
                      mail
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#241E20] mb-3">
                    Unlock Your Full Report
                  </h2>
                  <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Enter your email to reveal your complete Gap Analysis,
                    Competitive Landscape, and Opportunities — plus receive a
                    beautifully formatted PDF copy in your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleEmailSubmit()
                      }
                      placeholder="you@company.com"
                      className={`flex-1 px-4 py-3 border-2 rounded-xl text-sm outline-none transition-all ${
                        emailError
                          ? "border-rose-400 bg-rose-50"
                          : "border-gray-200 focus:border-[#585DE1]"
                      }`}
                    />
                    <button
                      onClick={handleEmailSubmit}
                      disabled={emailLoading}
                      className="px-6 py-3 bg-[#585DE1] text-white font-bold text-sm rounded-xl hover:opacity-90 transition disabled:opacity-60 whitespace-nowrap active:scale-95"
                    >
                      {emailLoading ? "Sending…" : "Send My Report"}
                    </button>
                  </div>

                  {emailError && (
                    <p className="mt-3 text-sm text-rose-500 flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        error
                      </span>
                      {emailError}
                    </p>
                  )}

                  <p className="mt-4 text-[11px] text-gray-400 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      lock
                    </span>
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </section>
            )}

            {/* ── Gated sections (only shown after email) ── */}
            {emailSubmitted && (
              <>
                {/* ── SECTION 2: Gap Analysis ── */}
                <section
                  id="gap-analysis"
                  ref={(el) => {
                    sectionRefs.current["gap-analysis"] = el;
                  }}
                  className="scroll-mt-24 transition-all duration-700 animate-in fade-in slide-in-from-bottom-4"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                    Section 02
                  </p>
                  <h2 className="text-2xl font-extrabold mb-2">Gap Analysis</h2>
                  <p className="text-gray-500 text-sm mb-4 max-w-xl leading-relaxed">
                    Specific friction points preventing AI systems from fully
                    surfacing your brand.
                  </p>
                  <div className="h-[2px] w-10 bg-rose-400 mb-8" />

                  <div className="grid md:grid-cols-2 gap-5">
                    {gaps.map((item, i) => (
                      <div
                        key={i}
                        className="border border-rose-100 bg-rose-50/60 p-5 rounded-xl flex gap-4"
                      >
                        <span className="text-rose-400 font-black text-base leading-none mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 3: Competitive Landscape ── */}
                {hasCompetitor && (
                  <section
                    id="competitive-landscape"
                    ref={(el) => {
                      sectionRefs.current["competitive-landscape"] = el;
                    }}
                    className="scroll-mt-24 transition-all duration-700 animate-in fade-in slide-in-from-bottom-4"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                      Section 03
                    </p>
                    <h2 className="text-2xl font-extrabold mb-2">
                      Competitive Landscape
                    </h2>
                    <p className="text-gray-500 text-sm mb-4 max-w-xl">
                      You vs.{" "}
                      <span className="font-semibold text-[#241E20]">
                        {competitor_analysis!.competitor_name}
                      </span>
                    </p>
                    <div className="h-[2px] w-10 bg-amber-400 mb-8" />

                    {/* Score comparison */}
                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                      <div className="border bg-white p-5 rounded-xl shadow-sm">
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                          You
                        </p>
                        <p className="text-xs text-gray-400 truncate mb-3">
                          {answers?.website_url ?? "Your site"}
                        </p>
                        <div className="flex items-end gap-2 mb-2">
                          <span
                            className={`text-3xl font-black ${getScoreColor(score)}`}
                          >
                            {displayScore}
                          </span>
                          <span className="text-sm text-gray-300 font-bold mb-0.5">
                            /100
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getScoreBg(score)} transition-all duration-1000 rounded-full`}
                            style={{ width: `${displayScore}%` }}
                          />
                        </div>
                      </div>
                      <div className="border bg-white p-5 rounded-xl shadow-sm">
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                          {competitor_analysis!.competitor_name}
                        </p>
                        <p className="text-xs text-gray-400 truncate mb-3">
                          {competitor_analysis!.competitor_url}
                        </p>
                        <div className="flex items-end gap-2 mb-2">
                          <span
                            className={`text-3xl font-black ${getScoreColor(competitor_analysis!.competitive_score)}`}
                          >
                            {displayCompScore}
                          </span>
                          <span className="text-sm text-gray-300 font-bold mb-0.5">
                            /100
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getScoreBg(competitor_analysis!.competitive_score)} transition-all duration-1000 rounded-full`}
                            style={{ width: `${displayCompScore}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Verdict */}
                    <div className="border border-amber-200 bg-amber-50/60 rounded-xl p-4 mb-8 flex gap-3">
                      <span className="material-symbols-outlined text-amber-500 shrink-0">
                        gavel
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {competitor_analysis!.verdict}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="border border-rose-100 bg-rose-50/40 p-5 rounded-xl">
                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-rose-500 mb-3">
                          Their Strengths
                        </h4>
                        <ul className="space-y-2">
                          {competitor_analysis!.their_strengths.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-xs text-gray-700 leading-relaxed"
                              >
                                <span className="text-rose-400 font-bold shrink-0">
                                  ↑
                                </span>
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="border border-emerald-100 bg-emerald-50/40 p-5 rounded-xl">
                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 mb-3">
                          Your Advantages
                        </h4>
                        <ul className="space-y-2">
                          {competitor_analysis!.your_advantages.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-xs text-gray-700 leading-relaxed"
                              >
                                <span className="text-emerald-500 font-bold shrink-0">
                                  ✓
                                </span>
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="border border-blue-100 bg-blue-50/40 p-5 rounded-xl">
                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#585DE1] mb-3">
                          Gaps to Close
                        </h4>
                        <ul className="space-y-2">
                          {competitor_analysis!.gaps_to_close.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-xs text-gray-700 leading-relaxed"
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
                  className="scroll-mt-24 transition-all duration-700 animate-in fade-in slide-in-from-bottom-4"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                    Section {hasCompetitor ? "04" : "03"}
                  </p>
                  <h2 className="text-2xl font-extrabold mb-2">
                    Opportunities
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 max-w-xl">
                    Ranked by impact on AI discoverability.
                  </p>
                  <div className="h-[2px] w-10 bg-emerald-400 mb-8" />

                  {opportunities.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                      {opportunities.map((item, i) => (
                        <div
                          key={i}
                          className="border border-emerald-100 bg-emerald-50/50 p-5 rounded-xl flex gap-4"
                        >
                          <span className="text-emerald-500 font-black text-base leading-none mt-0.5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    {quick_wins.length > 0 && (
                      <div className="border border-[#585DE1]/20 bg-[#585DE1]/5 p-5 rounded-xl">
                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#585DE1] mb-3 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">
                            bolt
                          </span>
                          Quick Wins (30 days)
                        </h4>
                        <ul className="space-y-2">
                          {quick_wins.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-xs text-gray-700 leading-relaxed"
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
                      <div className="border border-purple-100 bg-purple-50/40 p-5 rounded-xl">
                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-purple-600 mb-3 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">
                            timeline
                          </span>
                          Long-Term Plays (6–12 mo)
                        </h4>
                        <ul className="space-y-2">
                          {long_term.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-xs text-gray-700 leading-relaxed"
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
                <section className="no-print text-center space-y-5 border-t pt-16 animate-in fade-in">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Next Step
                  </p>
                  <h2 className="text-2xl font-bold text-[#241E20]">
                    Turn this audit into growth.
                  </h2>
                  <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
                    Book a 60-minute strategy session and we'll build your AI
                    visibility roadmap from scratch.
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <a
                      href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 bg-[#585DE1] text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition rounded-xl"
                    >
                      Request Strategy Session
                    </a>
                    <a
                      href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 border text-sm hover:bg-gray-50 transition rounded-xl font-semibold"
                    >
                      Book a Call
                    </a>
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
