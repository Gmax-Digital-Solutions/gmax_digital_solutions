import HeroImage from "@/public/images/insights_hero.jpg";
import Image from "next/image";
const InsightHero = () => {
  return (
    <section className="relative min-h-[716px] flex items-center px-6 overflow-hidden bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8">
          <span className="inline-block py-1 px-3 bg-surface-container text-primary text-xs font-bold tracking-widest uppercase mb-6 rounded">
            Editorial & Strategy
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tight leading-[0.95] mb-8 max-w-4xl">
            Insights for founders building products that need
            <span className="italic text-primary">
              {" "}
              trust, relevance, and market clarity{" "}
            </span>
          </h1>

          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Perspectives on positioning, digital credibility, and strategic
            visibility built for businesses navigating modern competition.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold transition-transform hover:-translate-y-1 active:scale-95">
              Request a Proposal
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="aspect-square bg-surface-container-high rounded-full overflow-hidden flex items-center justify-center border-8 border-white shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-primary-container/20 to-secondary-container/20 flex items-center justify-center">
              <Image
                src={HeroImage}
                alt="Insight Hero"
                className="w-full h-full object-cover"
                // fill
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl max-w-[220px]">
            <p className="text-sm font-medium italic text-on-surface">
              "Strategy becomes powerful when clarity removes noise."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightHero;
