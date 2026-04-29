// components/BridgeAndCTA.tsx

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
      showBorder ? "border-b border-outline-variant/30" : ""
    }`}
  >
    <span className="text-sm font-medium text-on-surface-variant">{label}</span>
    <span className={`text-sm font-bold ${valueClassName}`}>{value}</span>
  </div>
);

const reportRows: ReportRowProps[] = [
  {
    label: "Citation Strength",
    value: "Above Benchmark",
    valueClassName: "text-primary",
  },
  {
    label: "Schema Compliance",
    value: "Attention Needed",
    valueClassName: "text-secondary",
  },
  {
    label: "Entity Prominence",
    value: "Strategic (Top 5%)",
    valueClassName: "text-[#241E20]",
    showBorder: false,
  },
];

const aiPartners = ["PERPLEXITY", "OPENAI", "CLAUDE"] as const;

// ---------------------------------------------------------------------------
// Bridge Section
// ---------------------------------------------------------------------------
function BridgeSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Dark top half background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#241E20]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 items-center">
          {/* Left: heading + description */}
          <div className="lg:col-span-5 py-20 lg:pr-12 text-white">
            <h2 className="text-4xl font-black mb-8 leading-tight">
              Bridging the Gap Between Legacy SEO and Answer Engines.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Traditional search relies on keywords. AI readiness relies on
              knowledge graphs. Gmax Digital provides the architectural shift
              required to stay relevant in an AI-first world.
            </p>
          </div>

          {/* Right: Readiness Report card */}
          <div className="lg:col-span-7 bg-surface-container-highest p-1 bg-gradient-to-br from-primary-container/20 to-transparent rounded-2xl shadow-2xl">
            <div className="bg-surface-container-lowest p-12 rounded-xl">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-xl font-bold text-[#241E20]">
                  Readiness Report Sneak Peek
                </h3>
              </div>

              {/* Report rows */}
              <div className="space-y-6">
                {reportRows.map((row) => (
                  <ReportRow key={row.label} {...row} />
                ))}
              </div>

              {/* CTA button */}
              <button
                type="button"
                className="w-full mt-10 py-4 bg-[#241E20] text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors uppercase tracking-widest text-xs"
              >
                Generate Full Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Final CTA Section
// ---------------------------------------------------------------------------
function FinalCTASection() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[3rem] font-black text-[#241E20] mb-8 leading-tight">
          Ready to claim your AI space?
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Don&apos;t let your business disappear as the web shifts to generative
          answers. Start your readiness audit today.
        </p>

        {/* Action buttons */}
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="bg-[#585DE1] text-white px-10 py-5 rounded-lg text-lg font-bold shadow-2xl shadow-[#585DE1]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get My AI Score
          </button>
          <button
            type="button"
            className="bg-surface-container-lowest text-[#241E20] px-10 py-5 rounded-lg text-lg font-bold border border-outline-variant/30 hover:bg-surface-container-low transition-all"
          >
            Speak to an Architect
          </button>
        </div>

        {/* Partner logos (text-based) */}
        <div className="mt-16 flex justify-center gap-12 grayscale opacity-40">
          {aiPartners.map((partner) => (
            <div
              key={partner}
              className="text-xl font-black italic tracking-widest"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Combined export
// ---------------------------------------------------------------------------
export default function BridgeAndCTA() {
  return (
    <>
      <BridgeSection />
      <FinalCTASection />
    </>
  );
}
