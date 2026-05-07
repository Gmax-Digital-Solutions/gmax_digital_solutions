export default function OurPerspective() {
  return (
    <section className="bg-surface-container-low text-on-surface-variant px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-20 md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h2 className="sticky top-32 text-4xl font-bold tracking-tight">
              What we believe about e-commerce visibility
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-16 md:w-2/3">
            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Organic visibility beats paid ads.
              </h4>

              <p className="text-lg text-on-surface-variant">
                Every pound you spend on ads disappears when you stop paying.
                Rankings and AI visibility are assets that keep earning you
                revenue year after year.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                AI search is already here.
              </h4>

              <p className="text-lg text-on-surface-variant">
                ChatGPT, Perplexity, and Gemini are where customers research
                before they buy. If you're not appearing there, your competitors
                are capturing your revenue.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                90 days is enough to move the needle.
              </h4>

              <p className="text-lg text-on-surface-variant">
                First-page Google rankings and AI visibility happen faster than
                most agencies claim. The issue is doing it right, not that it
                takes time.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-10">
              <h4 className="mb-4 text-3xl font-bold">
                Visibility without conversion is waste.
              </h4>

              <p className="text-lg text-on-surface-variant">
                Traffic is only valuable if your store converts. We optimize
                both: get customers to you AND make sure your site closes the
                sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
