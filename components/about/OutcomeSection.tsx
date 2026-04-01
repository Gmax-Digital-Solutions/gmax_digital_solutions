export default function OutcomesSection() {
  return (
    <section className="bg-surface-container px-8 py-24 text-on-surface-variant">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            What stronger foundations make possible
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="mb-2 text-4xl font-black text-primary">Faster</div>
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              sales cycles
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="mb-2 text-4xl font-black text-secondary">
              Higher
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Lead Quality
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="mb-2 text-4xl font-black text-on-surface">
              Premium
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Brand Perception
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
