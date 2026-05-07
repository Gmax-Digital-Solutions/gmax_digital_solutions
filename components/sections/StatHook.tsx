import DotGrid from "../DotGrid";
import { CardHover } from "../animations/CardHover";

const StatHook = () => {
  return (
    <section className="relative flex items-center bg-on-background text-white px-4 sm:px-6 py-24 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1 */}
          <CardHover className="flex flex-col items-center text-center bg-[#2a2326]/50 p-10 transition-colors border border-white/10 hover:border-primary/50 p-8 sm:p-10 rounded-2xl">
            <div className="w-16 h-[3px] bg-secondary mb-6" />

            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-secondary mb-2">
              73%
            </h3>

            <p className="text-sm sm:text-base font-bold uppercase tracking-widest mb-4">
              Of E-commerce brands miss AI
            </p>

            <p className="text-white/60 text-sm sm:text-base max-w-xs leading-relaxed">
              They don't appear in ChatGPT, Perplexity, or Gemini. Their
              competitors do. This costs them 40%+ in lost traffic.
            </p>
          </CardHover>

          {/* Card 2 */}
          <CardHover className="flex flex-col items-center text-center bg-[#2a2326]/50 p-10 transition-colors border border-white/10 hover:border-primary/50 p-8 sm:p-10 rounded-2xl">
            <div className="w-16 h-[3px] bg-primary mb-6" />

            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary mb-2">
              £2.5K+
            </h3>

            <p className="text-sm sm:text-base font-bold uppercase tracking-widest mb-4">
              Monthly from Organic Search
            </p>

            <p className="text-white/60 text-sm sm:text-base max-w-xs leading-relaxed">
              Brands that rank on Google and appear in AI get 90+ days of
              sustainable organic revenue. No ad spend.
            </p>
          </CardHover>

          {/* Card 3 */}
          <CardHover className="flex flex-col items-center text-center bg-[#2a2326]/50 p-10 transition-colors border border-white/10 hover:border-primary/50 p-8 sm:p-10 rounded-2xl">
            <div className="w-16 h-[3px] bg-on-primary mb-6" />

            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-on-primary mb-2">
              90 Days
            </h3>

            <p className="text-sm sm:text-base font-bold uppercase tracking-widest mb-4">
              To Measurable Results
            </p>

            <p className="text-white/60 text-sm sm:text-base max-w-xs leading-relaxed">
              Our SEO + AEO strategy is built for quick wins. First Google
              rankings in 6 weeks, AI visibility in 8.
            </p>
          </CardHover>
        </div>
      </div>
    </section>
  );
};

export default StatHook;
