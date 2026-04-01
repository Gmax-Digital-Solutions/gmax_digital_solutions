export default function OurPerspective() {
  return (
    <section className="bg-surface-container-low text-on-surface-variant px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-20 md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h2 className="sticky top-32 text-4xl font-bold tracking-tight">
              What we believe about growth
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-16 md:w-2/3">
            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Strong products fail without clear value.
              </h4>

              <p className="text-lg text-on-surface-variant">
                Engineering excellence is only half the battle. If the market
                cannot perceive your value instantly, your product remains
                invisible.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Trust becomes opportunity.
              </h4>

              <p className="text-lg text-on-surface-variant">
                In a saturated digital world, trust is the highest form of
                currency. We build digital assets that earn it through
                consistency and clarity.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Visibility without positioning is waste.
              </h4>

              <p className="text-lg text-on-surface-variant">
                Spending on traffic before defining your position is an
                expensive way to learn that people don't understand what you do.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Digital presence should reduce doubt.
              </h4>

              <p className="text-lg text-on-surface-variant">
                Your website and marketing should answer the questions your
                customers haven't even asked yet, removing friction from the
                decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
