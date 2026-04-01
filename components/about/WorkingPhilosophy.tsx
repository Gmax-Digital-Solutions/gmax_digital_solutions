export default function WorkingPhilosophy() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold">Working Philosophy</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
        </div>

        {/* Philosophy Grid */}
        <div className="grid gap-12 text-center md:grid-cols-4">
          {/* Item 1 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              01
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              Understand
            </h4>
            <p className="text-sm text-on-surface-variant">
              We understand before recommending. No generic solutions.
            </p>
          </div>

          {/* Item 2 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              02
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              Position
            </h4>
            <p className="text-sm text-on-surface-variant">
              We position before promoting. Clarity is non-negotiable.
            </p>
          </div>

          {/* Item 3 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              03
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              Build
            </h4>
            <p className="text-sm text-on-surface-variant">
              We build for trust. Every interaction matters.
            </p>
          </div>

          {/* Item 4 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              04
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              Focus
            </h4>
            <p className="text-sm text-on-surface-variant">
              We focus on long-term relevance, not just quick wins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
