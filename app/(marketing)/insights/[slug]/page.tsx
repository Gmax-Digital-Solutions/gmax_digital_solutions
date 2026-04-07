import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import { getSingleInsight, getRelatedInsights } from "@/lib/api/content";
import ContentBlocks from "@/components/shared/ContentBlocks";
import ArticleActions from "@/components/shared/ArticleActions";

export default async function SingleInsightPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const insight = await getSingleInsight(slug);
  const relatedInsights = await getRelatedInsights(slug, insight?.category);

  return (
    <main className="pt-32 bg-background text-on-background antialiased">
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <div className="flex flex-col items-start gap-4 mb-8">
          <span className="bg-surface-container text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-sm">
            {insight?.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-[#241E20] leading-[1.1] tracking-tighter max-w-5xl">
            {insight?.title}
          </h1>
        </div>

        <div className="flex items-center gap-6 border-t border-outline-variant pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
              <img
                src={insight?.featured_image}
                alt="Gmax Editorial"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-[#241E20]">
                {insight?.author}
              </p>
              <p className="text-xs text-on-surface-variant">
                Strategic Insight Series
              </p>
            </div>
          </div>

          <div className="h-8 w-px bg-outline-variant" />

          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span className="text-sm font-medium">{insight?.read_time}</span>
          </div>
        </div>
      </header>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Sidebar */}
        <ArticleActions title={insight.title} />

        {/* Article */}
        <article className="lg:col-span-9 order-1 lg:order-2">
          <figure className="mb-12 rounded-2xl overflow-hidden bg-[#241E20]">
            <img
              src={insight?.featured_image}
              alt="Strategic digital architecture"
              className="w-full aspect-[21/9] object-cover opacity-80 mix-blend-overlay"
            />

            <figcaption className="p-4 text-xs text-zinc-400 bg-zinc-900 italic">
              Fig 1.1: Trust signals emerge from structure long before language
              is processed.
            </figcaption>
          </figure>

          {/* Intro */}
          <ContentBlocks blocks={insight?.content_blocks} />
        </article>
      </div>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">
                Continue Reading
              </h2>

              <h3 className="text-4xl font-black text-[#241E20] tracking-tighter">
                Related Strategic Insights
              </h3>
            </div>

            <a
              href="/insights"
              className="hidden md:flex items-center gap-2 font-bold text-sm text-[#241E20] hover:text-primary transition-colors"
            >
              VIEW ALL INSIGHTS
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
          {relatedInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedInsights?.map((insight, index) => (
                <a
                  key={index}
                  href="/insights/frictionless-conversion"
                  className="group bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">
                    {insight.category}
                  </span>

                  <h4 className="text-xl font-bold text-[#241E20] group-hover:text-primary transition-colors mb-4">
                    {insight.title}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                    <span>{insight.author}</span>
                    <span>•</span>
                    <span>{insight.read_time}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-outline/20 p-10 text-center">
              <p className="text-on-surface-variant text-lg">
                More strategic insights will appear here as new reports are
                published.
              </p>
            </div>
          )}
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
