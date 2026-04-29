"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuditStore } from "@/lib/audit/auditStore";
import { Question } from "@/lib/audit/auditQuestion";

type Props = {
  question: Question;
};

export default function QuestionPage({ question }: Props) {
  const router = useRouter();
  const { setAnswer, answers } = useAuditStore();

  const selected = answers[question.key as keyof typeof answers];
  const competitorUrl = answers["competitor_url"];

  // Local state for URL input fields
  const [urlValue, setUrlValue] = useState(
    question.key === "website_url" ? (answers.website_url ?? "") : "",
  );
  const [competitorValue, setCompetitorValue] = useState(competitorUrl ?? "");
  const [urlError, setUrlError] = useState("");

  /* ── Handlers ── */
  const handleSelect = (value: string) => {
    setAnswer(question.key as keyof typeof answers, value);
    setTimeout(() => router.push(question.next), 200);
  };

  const validateUrl = (val: string) => {
    if (!val) return true; // optional ok
    try {
      const u = new URL(val.startsWith("http") ? val : `https://${val}`);
      return !!u.hostname;
    } catch {
      return false;
    }
  };

  const normalizeUrl = (val: string) =>
    val.startsWith("http") ? val : val ? `https://${val}` : "";

  const handleUrlSubmit = () => {
    const norm = normalizeUrl(urlValue);
    if (!norm) {
      setUrlError("Please enter your website URL to continue.");
      return;
    }
    if (!validateUrl(norm)) {
      setUrlError("Please enter a valid URL (e.g. https://yoursite.com).");
      return;
    }
    setUrlError("");
    setAnswer("website_url", norm);
    if (competitorValue) {
      const normComp = normalizeUrl(competitorValue);
      setAnswer("competitor_url", normComp);
    }
    router.push(question.next);
  };

  /* ── URL Input layout ── */
  if (question.type === "url_input") {
    return (
      <main className="flex-grow pt-32 pb-24 px-8 max-w-3xl mx-auto w-full">
        <StepHeader question={question} />

        <div className="space-y-6 mb-16">
          {/* Primary URL */}
          <div>
            <label className="block text-sm font-semibold text-[#241E20] mb-2">
              Your Website URL <span className="text-[#585DE1]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">
                language
              </span>
              <input
                type="url"
                value={urlValue}
                onChange={(e) => {
                  setUrlValue(e.target.value);
                  setUrlError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                placeholder={question.placeholder ?? "https://yourwebsite.com"}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-[#241E20] text-base outline-none transition-all
                  ${urlError ? "border-rose-400 bg-rose-50" : "border-gray-200 focus:border-[#585DE1] bg-white"}`}
              />
            </div>
            {urlError && (
              <p className="mt-2 text-sm text-rose-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  error
                </span>
                {urlError}
              </p>
            )}
          </div>

          {/* Competitor URL */}
          <div>
            <label className="block text-sm font-semibold text-[#241E20] mb-1">
              Competitor URL{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <p className="text-xs text-gray-400 mb-2">
              Leave blank and we'll identify a key competitor for you
              automatically.
            </p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">
                compare_arrows
              </span>
              <input
                type="url"
                value={competitorValue}
                onChange={(e) => setCompetitorValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                placeholder="https://competitor.com"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-[#241E20] text-base outline-none focus:border-[#585DE1] bg-white transition-all"
              />
            </div>
          </div>

          {/* Privacy note */}
          {question.helperText && (
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">lock</span>
              {question.helperText}
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t">
          {question.prev ? (
            <button
              onClick={() => router.push(question.prev!)}
              className="px-6 py-3 text-gray-500 hover:text-black flex items-center gap-2 transition"
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleUrlSubmit}
            className="px-8 py-4 bg-[#585DE1] text-white rounded-xl font-bold hover:opacity-90 transition active:scale-95"
          >
            Run My Audit →
          </button>
        </div>
      </main>
    );
  }

  /* ── Default: Option Cards layout ── */
  return (
    <main className="flex-grow pt-32 pb-24 px-8 max-w-5xl mx-auto w-full">
      <StepHeader question={question} />

      {/* Answer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {question.options?.map((opt) => {
          const isSelected = selected === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`group text-left p-8 rounded-xl border-2 transition-all duration-300
                ${
                  isSelected
                    ? "bg-[#585DE1]/8 border-[#585DE1] shadow-lg"
                    : "bg-white/60 border-gray-200 hover:border-gray-400 hover:bg-white"
                }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all
                  ${isSelected ? "bg-[#585DE1]/15" : "bg-gray-100 group-hover:bg-gray-200"}`}
                >
                  <span
                    className={`material-symbols-outlined ${isSelected ? "text-[#585DE1]" : "text-gray-500"}`}
                  >
                    {opt.icon}
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? "border-[#585DE1]" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 bg-[#585DE1] rounded-full" />
                  )}
                </div>
              </div>

              <h3
                className={`text-lg font-bold mb-2 transition-colors ${isSelected ? "text-[#585DE1]" : "text-[#241E20]"}`}
              >
                {opt.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {opt.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-12 border-t">
        {question.prev ? (
          <button
            onClick={() => router.push(question.prev!)}
            className="px-6 py-3 text-gray-500 hover:text-black flex items-center gap-2 transition"
          >
            ← Previous
          </button>
        ) : (
          <div />
        )}

        <button
          disabled={!selected}
          onClick={() => router.push(question.next)}
          className="px-8 py-4 bg-[#585DE1] text-white rounded-xl font-bold disabled:opacity-30 hover:opacity-90 transition active:scale-95"
        >
          Continue →
        </button>
      </div>
    </main>
  );
}

/* ── Shared Step Header ── */
function StepHeader({ question }: { question: Question }) {
  return (
    <>
      <div className="mb-12">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Module 01: Visibility Audit
            </span>
            <h2 className="text-sm font-semibold text-[#585DE1] mt-1">
              Step {question.step} of {question.total}
            </h2>
          </div>
          <span className="text-xs text-gray-400">
            {Math.round((question.step / question.total) * 100)}% Complete
          </span>
        </div>

        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#585DE1] rounded-full transition-all duration-500"
            style={{ width: `${(question.step / question.total) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#241E20] leading-tight">
          {question.title}
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl leading-relaxed">
          {question.subtitle}
        </p>
      </div>
    </>
  );
}
