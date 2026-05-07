import { ChartNoAxesColumn, Globe, Network } from "lucide-react";
import DotGrid from "../DotGrid";

export default function WhyChooseUs() {
  return (
    <section className="relative flex items-center bg-on-background px-8 py-32">
      <div className="absolute w-full h-full top-0 left-0">
        <DotGrid
          dotSize={4}
          gap={16}
          baseColor="#271E37"
          activeColor="#eeb4bd"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={2}
        />
      </div>
      <div className="mx-auto max-w-7xl z-40">
        <h2 className="mb-20 text-4xl font-bold tracking-tight text-white">
          Why e-commerce brands choose Gmax Digital
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <ChartNoAxesColumn className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Google + AI Visibility
            </h3>

            <p className="leading-relaxed text-white/60">
              We don't just get you ranking on Google. We ensure you appear in
              ChatGPT, Perplexity, and Gemini where 40% of e-commerce searches
              now happen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <Globe className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              E-Commerce Focus
            </h3>

            <p className="leading-relaxed text-white/60">
              We specialize in brands doing 500K-10M/year. Not agencies that try
              everything. Specialists who know the e-commerce market inside out.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <Network className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Measurable Results in 90 Days
            </h3>

            <p className="leading-relaxed text-white/60">
              First rankings in 6 weeks. AI visibility in 8. We don't do
              long-term speculation. You get real revenue gains you can measure
              immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
