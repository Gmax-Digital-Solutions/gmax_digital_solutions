import { getSingleFeaturedInsight } from "@/lib/api/content";
import DotGrid from "../DotGrid";

const FeaturedPerspective = async () => {
  const featuredInsight = await getSingleFeaturedInsight();
  console.log(featuredInsight);

  return (
    <section className="relative py-24 px-6 bg-inverse-surface">
      <div className="absolute w-full h-full inset-0">
        <DotGrid
          dotSize={4}
          gap={16}
          baseColor="#352f31"
          activeColor="#ffffff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={2}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Visual */}
          <div className="relative h-full bg-zinc-800 overflow-hidden order-2 lg:order-1 rounded-l-2xl">
            <img
              src={featuredInsight.hero_image}
              alt="Founders discussing strategy"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            />
          </div>

          {/* Right Content */}
          <div className="bg-surface-container-lowest p-12 lg:p-20 order-1 lg:order-2 lg:-ml-12 relative z-10 shadow-2xl rounded-2xl">
            <span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              {featuredInsight.category}
            </span>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-6 leading-tight">
              {featuredInsight.title}
            </h2>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {featuredInsight.excerpt}
            </p>

            <a
              href={`/insights/${featuredInsight.slug}`}
              className="inline-flex items-center gap-2 text-primary font-bold group"
            >
              Read Insight
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPerspective;
