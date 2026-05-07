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
              Audit First
            </h4>
            <p className="text-sm text-on-surface-variant">
              Know exactly where you rank on Google and if you appear on AI
              before making any changes.
            </p>
          </div>

          {/* Item 2 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              02
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              SEO First
            </h4>
            <p className="text-sm text-on-surface-variant">
              Organic visibility lasts. Paid ads stop working when you stop
              paying.
            </p>
          </div>

          {/* Item 3 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              03
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              AI Visibility
            </h4>
            <p className="text-sm text-on-surface-variant">
              ChatGPT, Perplexity, and Gemini are where 40% of searches now
              happen.
            </p>
          </div>

          {/* Item 4 */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <span className="mb-6 block text-5xl font-black text-primary/10">
              04
            </span>
            <h4 className="mb-4 text-lg font-bold uppercase tracking-widest">
              90-Day Results
            </h4>
            <p className="text-sm text-on-surface-variant">
              First rankings in 6 weeks. Measurable ROI you can track from day
              one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
