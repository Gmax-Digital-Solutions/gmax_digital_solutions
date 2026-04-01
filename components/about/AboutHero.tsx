import Grainient from "../Grainient";

export default function AboutHero() {
  return (
    <section className="relative px-8 pt-40 pb-32">
      <div className="absolute inset-0 -z-10 ">
        <Grainient
          color1="#edbac2"
          color2="#f7ebed"
          color3="#f2f2f2"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={3.4}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={57}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={1.55}
          className="h-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="label-md mb-6 block font-bold uppercase tracking-[0.2em] text-primary">
            Why Gmax Digital
          </span>

          <h1 className="mb-8 text-6xl font-bold tracking-tighter leading-[1.05] text-on-background md:text-7xl">
            Built for businesses that need more than{" "}
            <span className="italic text-primary">visibility.</span>
          </h1>

          <p className="mb-12 max-w-2xl text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            Gmax Digital exists to help founders and growing businesses
            strengthen the foundations that determine whether ideas gain trust,
            relevance, and market momentum.
          </p>

          <button className="group inline-flex items-center rounded-lg bg-primary-container px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02]">
            Start a Conversation
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
        <div className="relative hidden lg:block aspect-square w-full rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
          <div className="aspect-square bg-surface-container rounded-full relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <img
              alt="Abstract digital composition"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              data-alt="Minimal premium abstract digital geometric composition with blue tones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEjK0bMrvywdeoCOrEWfjUgfxi4zqFtpCwxQCOpJTdeI1p4EqVwIqh8YWcVJzZLvYCphZHvEEORMKBz0hqh3o3JMgSm5XJ3fDdSRaB_IWoUPafqVGkzXjilwGVJosV4ZTqLotg1wOCWodbOb33mg43qRjcH22Fr5RPbHlhoFGb9iPyXfxBFXIjUW1aBR4a5-lg9N-6oct_RBjOljk3cKJJz-nJtsg-0XjUTSJrZp42rGeOegzZVIgVaVkPjTDridptieSJX4ByVtk"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute w-48 h-48 border border-secondary/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
