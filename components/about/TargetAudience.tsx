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
            We partner with businesses where strategic clarity matters as much
            as execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-white p-12">
            <Code2 className="mb-8 h-12 w-12 text-primary" />

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Founders building software products
              </h3>

              <p className="text-on-surface-variant">
                Translating complex features into compelling market narratives.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-primary p-12 text-white">
            <Compass className="mb-8 h-12 w-12 text-white" />

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Startups refining market direction
              </h3>

              <p className="text-white/80">
                Defining the "Why" before spending on the "How."
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-on-background p-12 text-white">
            <Building2 className="mb-8 h-12 w-12 text-secondary-container" />

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Growing businesses needing foundations
              </h3>

              <p className="text-white/60">
                Modernizing digital presence to match professional reputations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
