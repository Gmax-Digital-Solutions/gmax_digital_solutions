import {
  Monitor,
  PencilRuler,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import DotGrid from "../DotGrid";

const services = [
  {
    icon: Monitor,
    title: "Google SEO & Ranking",
    description:
      "Get your products ranking on high-intent keywords. We focus on searches that convert, not vanity metrics. First page in 6-8 weeks.",
    outcome: "Organic visibility that drives revenue.",
  },
  {
    icon: PencilRuler,
    title: "AI Search Optimization (AEO)",
    description:
      "Ensure your products appear in ChatGPT, Perplexity, and Gemini. Capture 40% of e-commerce research happening on AI tools.",
    outcome: "Appear where customers research.",
  },
  {
    icon: Rocket,
    title: "Keyword & Competitor Research",
    description:
      "Discover high-value keywords your competitors are missing. See exactly what they're ranking for on Google and AI.",
    outcome: "Find opportunities worth thousands.",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy & Optimization",
    description:
      "Create content that ranks AND converts. We optimize for search intent and customer journey, not just keywords.",
    outcome: "Content that earns visibility and sales.",
  },
  {
    icon: ShieldCheck,
    title: "Technical SEO & Site Speed",
    description:
      "Fix crawling issues, improve site speed, and ensure Google can fully index your store. Most e-commerce sites leave 30% of rankings on the table.",
    outcome: "Your store ranks as well as possible.",
  },
  {
    icon: Handshake,
    title: "AI Search Visibility Audit",
    description:
      "See where you rank on Google, compare to competitors, check AI visibility, and get 3 actionable fixes for the next 90 days.",
    outcome: "Clear roadmap to organic revenue.",
  },
];

export default function ServiceOfferings() {
  return (
    <section className="relative flex flex-1 flex-col bg-on-background px-8 py-24 text-white">
      <div>
        <div className="absolute w-full h-full top-0 left-0 ">
          <DotGrid
            dotSize={4}
            gap={16}
            baseColor="#271E37"
            activeColor="#484dd1"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={2}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl z-10">
        {/* Header */}
        <div className="mb-20 ">
          <h2 className="mb-4 text-4xl font-bold">
            SEO + AEO Services for UK E-Commerce
          </h2>
          <div className="h-1 w-20 bg-secondary" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex h-full flex-col border border-primary bg-zinc-900 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-secondary rounded-xl"
              >
                <Icon className="mb-6 h-10 w-10 text-primary" />

                <h3 className="mb-4 text-2xl font-bold leading-snug">
                  {service.title}
                </h3>

                <p className="mb-8 flex-grow leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                <div className="border-t border-zinc-800 pt-6 text-sm font-medium">
                  <span className="mr-2 uppercase tracking-tight text-primary">
                    Outcome:
                  </span>
                  <span className="text-zinc-300">{service.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
