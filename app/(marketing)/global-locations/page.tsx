import Footer from "@/components/sections/Footer";
import Image from "next/image";
import London from "@/public/images/london.jpg";
import CTABanner from "@/components/sections/CTABanner";

export default function GlobalLocationsPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-on-background py-32">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#585de1_1px,_transparent_1px)] [background-size:48px_48px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-on-background" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
            <div className="max-w-4xl">
              <span className="inline-block text-primary-fixed-dim text-xs tracking-[0.4em] uppercase font-bold mb-6">
                Global Presence
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
                Strategic Reach.
                <br />
                Global Perspective.
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                Gmax Digital works with founders and businesses across multiple
                regions, providing strategic growth foundations that transcend
                borders.
              </p>
            </div>
          </div>
        </section>

        {/* Canary Wharf Section */}
        <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          <Image
            src={London}
            alt="Canary Wharf London"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/20 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full md:w-auto md:max-w-2xl px-6 md:px-8 pb-12 md:pb-20 md:ml-12 z-20">
            <div className="bg-surface-container-highest p-6 md:p-12 shadow-2xl border-l-[8px] md:border-l-[12px] border-primary">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">
                  Headquarters
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-on-surface tracking-tighter mb-3">
                London, United Kingdom
              </h2>

              <p className="text-primary font-semibold text-sm md:text-lg mb-6">
                Main Strategic Positioning Hub
              </p>

              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p className="text-base md:text-xl italic font-light">
                  "Our strategic positioning hub, connecting us to global
                  markets and enterprise ecosystems."
                </p>

                <div className="bg-surface-container-low p-6 border border-outline-variant/30">
                  <address className="not-italic text-xs md:text-sm tracking-widest font-mono uppercase leading-loose">
                    71–75 Shelton Street, Covent Garden.
                    <br />
                    London, WC2H 9JQ
                    <br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Coverage */}
        <section className="bg-on-background py-20 md:py-32 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-secondary text-xs tracking-[0.3em] font-black uppercase mb-4 block">
                  Our Footprint
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                  A Globally Distributed Network
                </h2>
              </div>

              <p className="text-zinc-500 max-w-sm text-base md:text-lg font-light border-l-2 border-primary/30 pl-6">
                We leverage localized expertise with a unified global strategy
                to deliver consistent excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 border border-zinc-800">
              {[
                {
                  title: "Europe",
                  icon: "euro_symbol",
                  desc: "Strategic alignment for high-growth ecosystems.",
                },
                {
                  title: "North America",
                  icon: "public",
                  desc: "Scalable infrastructure for competitive markets.",
                },
                {
                  title: "Africa",
                  icon: "potted_plant",
                  desc: "Positioning for emerging tech opportunities.",
                },
                {
                  title: "Remote / Global",
                  icon: "all_inclusive",
                  desc: "24/7 delivery through digital workflows.",
                },
              ].map((region, i) => (
                <div
                  key={i}
                  className="group p-8 md:p-12 hover:bg-zinc-900 transition-all duration-500 border-b-4 border-transparent hover:border-primary"
                >
                  <div className="mb-6 w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {region.icon}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {region.title}
                  </h3>

                  <p className="text-zinc-500 text-sm md:text-base font-light">
                    {region.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Operations */}
        <section className="bg-surface py-20 md:py-32 overflow-hidden text-on-surface-variant">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-12 leading-tight">
                  Global Operations.
                  <br />
                  Local Impact.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    "Remote-First",
                    "Async Communication",
                    "Delivery Infrastructure",
                    "Timezone Flexibility",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="relative pl-8 border-l border-primary/20"
                    >
                      <span className="absolute left-0 top-0 text-primary text-xs opacity-50">
                        0{i + 1}
                      </span>
                      <h4 className="font-black text-base mb-2 uppercase text-primary">
                        {title}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-light">
                        Strategic systems designed for global execution and
                        speed.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

                <div className="relative bg-surface p-4 shadow-2xl border border-outline-variant/10">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREd5QAk8mzzWD3j-XXgnIJ4S1AARa4dhKcJ4sIMiEkXO3o6t0yKFdPBGt_I7kieTpimKUMEKfOJKIk2mXSsPyLkws-XZf3v51P4Max-PMOMBwMLsUjxjgUkfAP6RQ8TmcLaxx1E-Z2bNGkAH0GfT8AZ29bOZ2-K9OXIxPCuBeNgO1enBh0gy2whSg00rMV1umIgWfMCsodITU3L5Flfm6BTR9p_Q9s3GSMNTJlqYVH7cFzImZGDQlmDDb3GCJbNQavCfQPjXjo7I"
                    alt="Global workspace"
                    width={800}
                    height={600}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
