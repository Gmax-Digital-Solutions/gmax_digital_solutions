import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import { getSingleCaseStudy } from "@/lib/api/content";

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const caseStudy = await getSingleCaseStudy(slug);
  return (
    <main className="bg-background text-on-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-20 mb-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-surface-container-low text-primary font-bold text-xs uppercase tracking-[0.1em] px-3 py-1 mb-6">
            SEO + AEO Case Study
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#241E20] leading-[1.05] mb-8">
            {caseStudy.title}
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
            {caseStudy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-10 flex flex-col justify-between ${
                index === 0
                  ? "bg-[#241E20]"
                  : index === 1
                    ? "bg-surface-container-low"
                    : "bg-white border border-outline-variant/20"
              }`}
            >
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  index === 0 ? "text-white/40" : "text-on-surface-variant"
                }`}
              >
                {metric.label}
              </span>

              <div className="mt-12">
                <div
                  className={`text-6xl font-black mb-2 ${
                    index === 0 ? "text-white" : "text-[#241E20]"
                  }`}
                >
                  {metric.value}
                </div>

                <div
                  className={`font-bold text-lg uppercase tracking-tight ${
                    index === 0 ? "text-[#F84343]" : "text-primary"
                  }`}
                >
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full h-[614px] overflow-hidden mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />

        <img
          src={caseStudy.hero_image}
          alt="Modern server room representing premium digital infrastructure"
          className="w-full h-full object-cover grayscale brightness-50"
        />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
          <div className="flex items-center gap-4 text-white/60">
            <span className="h-px w-12 bg-white/30" />
            <span className="text-xs uppercase tracking-[0.2em]">
              SEO + AEO Technical Blueprint
            </span>
            <span className="h-px w-12 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-surface-container-low p-8 sticky top-32">
              {/* Strategic Insights */}
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-outline-variant pb-4">
                SEO + AEO Strategy
              </h3>

              <ul className="space-y-6">
                {caseStudy.insights.map((insight, index) => (
                  <li key={index}>
                    <span className="block text-primary font-bold mb-1">
                      {insight.title}
                    </span>
                    <p className="text-sm text-on-surface-variant">
                      {insight.description}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Deliverables */}
              <div className="mt-12 pt-8 border-t border-outline-variant">
                <h3 className="text-sm font-black uppercase tracking-widest mb-4">
                  SEO + AEO Deliverables
                </h3>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.deliverables.map((item, index) => (
                    <span
                      key={index}
                      className="text-[10px] bg-white px-3 py-1 border border-outline-variant font-bold uppercase tracking-tighter"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Narrative Body */}
          <div className="lg:col-span-8 space-y-24">
            {caseStudy.sections.map((section, index) => (
              <div
                key={index}
                className="relative pl-12 border-l border-outline-variant"
              >
                <span className="absolute -left-3 top-0 bg-white text-[#241E20] font-black text-xs px-2 py-1 border border-[#241E20]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h2 className="text-3xl font-extrabold text-[#241E20] mb-6">
                  {section.title}
                </h2>

                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  {section.body.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Transformation Block */}
            <div className="py-12">
              <div className="relative">
                <div className="h-32 bg-[#241E20] w-full"></div>
                <div className="h-32 bg-white w-full"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 bg-surface-container-highest p-12 shadow-2xl">
                  <h4 className="text-xs font-black tracking-widest text-[#F84343] uppercase mb-4 text-center">
                    Core Transformation
                  </h4>

                  <p className="text-2xl font-bold text-[#241E20] text-center italic leading-tight">
                    {caseStudy.transformation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="max-w-7xl mx-auto px-8 py-24 border-b border-outline-variant/30">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">
              Up Next
            </h3>

            <h2 className="text-4xl font-extrabold text-[#241E20]">
              {CaseStudy.title}
            </h2>
          </div>

          <a
            href={`/case-studies/${nextCaseStudy.slug}`}
            className="group flex items-center gap-2 text-primary font-bold"
          >
            View Case Study
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="h-[400px] w-full bg-surface-container-low overflow-hidden relative group">
          <img
            src={nextCaseStudy.hero_image}
            alt={nextCaseStudy.title}
            className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section> */}
      <CTABanner />
      <Footer />
    </main>
  );
}
