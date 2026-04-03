interface CaseStudy {
  id: number;
  title: string;
  category: "SaaS" | "Founder" | "Startup" | "Global";
  description: string;
  metricLabel: string;
  metricValue: string;
  featured?: boolean;
  dark?: boolean;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Lumina AI Brand Identity & Launch",
    category: "Startup",
    description:
      "Defining the visual language for a next-gen AI search engine from zero to one.",
    metricLabel: "Conversion",
    metricValue: "+24%",
  },
  {
    id: 2,
    title: "Personal Brand Authority for Dr. Aris",
    category: "Founder",
    description:
      "Strategic positioning for a world-renowned health tech visionary and author.",
    metricLabel: "Growth",
    metricValue: "150k+",
  },
  {
    id: 3,
    title: "Nexus CRM Product Redesign",
    category: "SaaS",
    description:
      "Transforming enterprise data into intuitive high-velocity UX.",
    metricLabel: "Efficiency",
    metricValue: "+65%",
  },
  {
    id: 4,
    title: "Confidential Govt Portal Integration",
    category: "Global",
    description:
      "Internal secure digital transformation for municipal systems.",
    metricLabel: "Status",
    metricValue: "Protected",
    dark: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="p-12 space-y-10 bg-background text-on-surface">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase text-primary tracking-wide">
            Strategic Repository
          </span>
          <h2 className="text-4xl font-bold tracking-tight">Case Studies</h2>
          <p className="text-stone-500 max-w-xl">
            Review and manage high-impact solutions delivered to global
            partners.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-surface-container rounded-lg p-1">
            {["All", "SaaS", "Founder", "Startup"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 text-xs font-semibold rounded hover:bg-white"
              >
                {filter}
              </button>
            ))}
          </div>

          <button className="px-4 py-2 bg-surface-container-lowest border rounded-lg text-xs font-bold">
            Date Range
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured */}
        <div className="md:col-span-8 relative rounded-xl overflow-hidden min-h-[400px] bg-on-background p-8 flex flex-col justify-end">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYXQBcZ5cUDnFPf3LUA0-Tp6qSDi2RWBsiNshIJlnUqCA5dnzfkQMMKNICXJBJoxiDosTms90Bk348AIc4vygBapoxPQMNGdP5deJ68nnrasjdRkcRyICsik2WswZov0FUkSVy_FBcSizGvBET7pcKy2O1Lqa2nTKF11KwQlWotuw5eHgsBj-CVepMBWWRdCAZb7DLvPFZE5lLKtWQyjUWveAJzeg2eNcvmCG_8TImJ6MIfGqJI3kaQQk0xoDakOVHWfuL9Is1o6M"
            alt="featured"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative z-10 space-y-4">
            <span className="px-3 py-1 bg-primary text-white text-xs rounded-full font-bold">
              Featured Case
            </span>

            <h3 className="text-3xl font-bold text-white max-w-lg">
              Scaling Hyper-Growth: The FinTech Infrastructure Overhaul
            </h3>

            <p className="text-stone-400 max-w-md text-sm">
              Redefined conversion funnel for a leading Series B FinTech
              startup.
            </p>

            <div className="flex gap-10 pt-4 border-t border-white/10">
              <div>
                <span className="block text-primary text-2xl font-black">
                  +142%
                </span>
                <span className="text-xs text-stone-400 uppercase">
                  ROI Increase
                </span>
              </div>

              <div>
                <span className="block text-white text-2xl font-black">
                  2.4m
                </span>
                <span className="text-xs text-stone-400 uppercase">
                  Active Users
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Cards */}
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className={`md:col-span-4 rounded-xl p-8 flex flex-col justify-between transition-all hover:shadow-xl ${
              study.dark
                ? "bg-on-surface text-white"
                : "bg-surface-container-lowest"
            }`}
          >
            <div className="space-y-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  study.dark
                    ? "bg-white/10 text-white"
                    : "bg-surface-container text-primary"
                }`}
              >
                {study.category}
              </span>

              <h4 className="text-xl font-bold">{study.title}</h4>

              <p
                className={`text-sm ${
                  study.dark ? "text-stone-400" : "text-stone-500"
                }`}
              >
                {study.description}
              </p>
            </div>

            <div className="pt-6">
              <div
                className={`p-4 rounded-lg flex justify-between ${
                  study.dark ? "bg-white/5" : "bg-surface-container-low"
                }`}
              >
                <span className="text-xs uppercase font-bold opacity-70">
                  {study.metricLabel}
                </span>
                <span className="text-lg font-black">{study.metricValue}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Editorial Highlight */}
        <div className="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <h4 className="text-3xl font-black italic">
            Small Businesses.
            <br />
            Big Solutions.
          </h4>
          <p className="text-xs uppercase opacity-70 mt-3">
            Our Impact Narrative
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between pt-12 border-t">
        <p className="text-xs text-stone-400">
          Displaying 6 of 42 Case Studies
        </p>

        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded text-xs font-bold ${
                page === 1
                  ? "bg-on-surface text-white"
                  : "hover:bg-surface-container"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
