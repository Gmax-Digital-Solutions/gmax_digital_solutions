import { ChartNoAxesColumn, Globe, Network } from "lucide-react";
import DotGrid from "../DotGrid";

export default function WhyChooseUs() {
  return (
    <section className="relative flex items-center bg-on-background px-8 py-32">
      <div className="absolute w-full h-full top-0 left-0">
        <DotGrid
          dotSize={2}
          gap={11}
          baseColor="#271E37"
          activeColor="#eeb4bd"
          proximity={70}
          shockRadius={80}
          shockStrength={2}
          resistance={250}
          returnDuration={0.6}
        />
      </div>
      <div className="mx-auto max-w-7xl z-40">
        <h2 className="mb-20 text-4xl font-bold tracking-tight text-white">
          Why businesses choose Gmax Digital
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <ChartNoAxesColumn className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Strategic Thinking First
            </h3>

            <p className="leading-relaxed text-white/60">
              We look beyond common marketing metrics to identify the structural
              growth barriers holding your business back.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <Globe className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Real Market Conditions
            </h3>

            <p className="leading-relaxed text-white/60">
              Strategy built for the world as it exists today, not as it appears
              in generic business templates or textbook models.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-white/5 bg-[#2a2326]/50 p-10 transition-colors hover:border-primary/50">
            <div className="mb-6 text-primary-container">
              <Network className="h-10 w-10" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Multi-Disciplinary
            </h3>

            <p className="leading-relaxed text-white/60">
              A synthesis of marketing, engineering, psychology, and design to
              solve complex business challenges holistically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
