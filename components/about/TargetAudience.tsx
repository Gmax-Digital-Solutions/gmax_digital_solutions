import { Code2, Compass, Building2 } from "lucide-react";

export default function WhoWeWorkWith() {
  return (
    <section className="bg-surface px-8 py-32 text-on-surface-variant">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">
            Who we work with
          </h2>

          <p className="text-xl text-on-surface-variant">
            We partner with e-commerce brands doing 50K-10M/year who want to
            reduce paid ad spend and capture organic revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-white p-12">
            <Code2 className="mb-8 h-12 w-12 text-primary" />

            <div>
              <h3 className="mb-4 text-2xl font-bold">Fashion Retailers</h3>

              <p className="text-on-surface-variant">
                Getting found for seasonal trends on both Google and AI while
                competitors burn through paid ad budgets.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-primary p-12 text-white">
            <Compass className="mb-8 h-12 w-12 text-white" />

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Home & Beauty Brands
              </h3>

              <p className="text-white/80">
                Appearing in ChatGPT and Perplexity for lifestyle and beauty
                recommendations where customers now research.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-on-background p-12 text-white">
            <Building2 className="mb-8 h-12 w-12 text-secondary-container" />

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Growing Brands Ready to Scale
              </h3>

              <p className="text-white/60">
                Moving beyond Facebook ads to own your customer acquisition
                through organic visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
