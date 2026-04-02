import Threads from "../Threads";

const FeaturedPerspective = () => {
  return (
    <section className="relative py-24 px-6 bg-inverse-surface">
      <div className="absolute w-full h-full inset-0">
        <Threads
          color={[0.32, 0.15, 1.0]}
          amplitude={3}
          distance={0.5}
          enableMouseInteraction
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Visual */}
          <div className="relative h-full bg-zinc-800 overflow-hidden order-2 lg:order-1 rounded-l-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJuNpC4AG9HHOVSXgWPy833239F84eOq5dNgrbTfhN2VIey9b_DyMAFu07Ar-WvcycNlie4eTQ5C8yA0TL4gEhrFzYjUapt6_0EMsI7UrcrBShv3nWUQJFX5l8iYKiPK35wLbb7GpgYhAOertbWJp1E2SLjqHKSWU4wDyc5-8SOVPnlkYxzrSqThbbGHQC37uYojK3o88fxaN4ck165achKqA6dz4J2S1nfrWXHo_KVf2Cip_PTdsQpBToL7OuDDRIW7e4tdGlKXA"
              alt="Founders discussing strategy"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            />
          </div>

          {/* Right Content */}
          <div className="bg-surface-container-lowest p-12 lg:p-20 order-1 lg:order-2 lg:-ml-12 relative z-10 shadow-2xl rounded-2xl">
            <span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              Long Form Insight
            </span>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-6 leading-tight">
              Why strong products still fail when markets cannot quickly trust
              them
            </h2>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Technical quality alone rarely wins attention. In crowded markets,
              businesses that communicate relevance clearly often outperform
              those that simply build better.
            </p>

            <a
              href="#"
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
