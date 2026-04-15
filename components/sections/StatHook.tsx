import DotGrid from "../DotGrid";
import { CardHover } from "../animations/CardHover";

const StatHook = () => {
  return (
    <section className="relative flex items-center bg-on-background text-white px-6 py-20 relative overflow-hidden h-screen">
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
      <div className="flex flex-col lg:flex-row justify-between gap-12 max-w-7xl mx-auto">
        <CardHover className="relative z-10 flex flex-col items-center text-center bg-on-surface/30">
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <h3 className="text-3xl lg:text-5xl font-black tracking-tighter text-secondary mb-2">
            95%
          </h3>
          <p className="lg:text-lg font-bold uppercase tracking-widest mb-6">
            Of Small Businesses Fail
          </p>
          <p className="text-white/60 text-sm max-w-xs mx-auto leading-relaxed">
            Most lack the digital infrastructure to compete in today's market.
            We provide the tools and strategies for sustainable growth.
          </p>
        </CardHover>
        <CardHover className="relative z-10 flex flex-col items-center text-center bg-on">
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <h3 className="text-4xl lg:text-7xl font-black tracking-tighter text-primary mb-2">
            42%
          </h3>
          <p className="lg:text-xl font-bold uppercase tracking-widest mb-6">
            Because There Is No Market Need
          </p>
          <p className="text-white/60 text-lg max-w-xs mx-auto leading-relaxed">
            42% of startups fail because they solve problems customers don’t
            urgently need solved.{" "}
          </p>
        </CardHover>
        <CardHover className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-1 bg-on-primary mb-8"></div>
          <h3 className="text-4xl lg:text-7xl font-black tracking-tighter text-on-primary mb-2">
            38%
          </h3>
          <p className="text-xl font-bold uppercase tracking-widest mb-6">
            Because Of Cash Flow Failure
          </p>
          <p className="text-white/60 text-lg max-w-xs mx-auto leading-relaxed">
            38% of startups fail because poor traction and bad marketing burns
            runway before revenue arrives.
          </p>
        </CardHover>
      </div>
    </section>
  );
};

export default StatHook;
