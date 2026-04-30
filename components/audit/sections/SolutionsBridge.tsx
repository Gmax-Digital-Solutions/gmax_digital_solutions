"use client";

import Link from "next/link";

interface ReportRowProps {
  label: string;
  value: string;
  valueClassName: string;
  showBorder?: boolean;
}

const ReportRow = ({
  label,
  value,
  valueClassName,
  showBorder = true,
}: ReportRowProps) => (
  <div
    className={`flex justify-between items-center pb-4 ${
      showBorder ? "border-b border-gray-100" : ""
    }`}
  >
    <span className="text-sm font-medium text-gray-500">{label}</span>
    <span className={`text-sm font-bold ${valueClassName}`}>{value}</span>
  </div>
);

// These mirror the exact labels used in ResultsPage sections
const reportRows: ReportRowProps[] = [
  {
    label: "Semantic Authority",
    value: "Above Benchmark",
    valueClassName: "text-[#585DE1]",
  },
  {
    label: "Gap Identification",
    value: "3 Critical Gaps Found",
    valueClassName: "text-rose-500",
  },
  {
    label: "Competitive Position",
    value: "2 Rivals Outranking You",
    valueClassName: "text-amber-500",
  },
  {
    label: "Opportunities",
    value: "5 Quick Wins Available",
    valueClassName: "text-emerald-500",
    showBorder: false,
  },
];

const aiPartners = ["PERPLEXITY", "OPENAI", "CLAUDE", "GEMINI"] as const;

// ─── Bridge Section ───────────────────────────────────────────────────────────
function BridgeSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden ">
      {/* Dark top half */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#241E20]" />

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none "
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 py-20 lg:pr-12 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#585DE1] mb-4">
              Why This Matters Now
            </p>
            <h2 className="text-4xl font-black mb-8 leading-tight">
              Bridging the Gap Between Legacy SEO and Answer Engines.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Traditional search relies on keywords. AI readiness relies on
              knowledge graphs, entity authority, and citation signals. Gmax
              Digital provides the architectural shift required to stay relevant
              as ChatGPT, Gemini, and Perplexity reshape discovery.
            </p>
            <Link
              href="/audit/q1"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#585DE1] hover:text-white transition group"
            >
              Run your free audit
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right — Sample report card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#585DE1]/10 to-transparent p-1 rounded-2xl shadow-2xl">
            <div className="bg-white p-12 rounded-xl">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#585DE1] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#241E20]">
                    Sample Readiness Report
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                    What your audit looks like
                  </p>
                </div>
              </div>

              {/* Score preview */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="text-5xl font-black text-[#585DE1]">67</div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    AI Visibility Score
                  </p>
                  <p className="text-sm font-bold text-gray-700">
                    Moderate Visibility
                  </p>
                  <div className="mt-2 h-1 w-40 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#585DE1] w-2/3" />
                  </div>
                </div>
              </div>

              {/* Report rows */}
              <div className="space-y-5">
                {reportRows.map((row) => (
                  <ReportRow key={row.label} {...row} />
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/audit/q1"
                className="w-full mt-10 py-4 bg-[#241E20] text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors uppercase tracking-widest text-xs flex items-center justify-center"
              >
                Generate My Full Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#585DE1] mb-4">
          Get Started — Free
        </p>
        <h2 className="text-[3rem] font-black text-[#241E20] mb-8 leading-tight">
          Ready to claim your AI space?
        </h2>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t let your business disappear as the web shifts to generative
          answers. Your competitors are already optimizing. Start your readiness
          audit today — it takes 3 minutes.
        </p>

        {/* Action buttons */}
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <Link
            href="/audit/q1"
            className="bg-[#585DE1] text-white px-10 py-5 rounded-lg text-lg font-bold shadow-2xl shadow-[#585DE1]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get My AI Score
          </Link>
          <a
            href="mailto:hello@gmaxdigitals.com"
            className="bg-white text-[#241E20] px-10 py-5 rounded-lg text-lg font-bold border border-gray-200 hover:bg-gray-50 transition-all"
          >
            Speak to an Architect
          </a>
        </div>

        {/* AI partners */}
        <div className="mt-16 flex justify-center gap-12 grayscale opacity-30">
          {aiPartners.map((name) => (
            <div
              key={name}
              className="text-xs font-black italic tracking-widest text-[#241E20]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionBridge() {
  return (
    <>
      <BridgeSection />
      <FinalCTASection />
    </>
  );
}
