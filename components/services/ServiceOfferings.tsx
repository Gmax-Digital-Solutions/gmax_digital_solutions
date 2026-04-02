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
    title: "Website Design & Digital Presence",
    description:
      "High-conversion business websites and landing pages focused on building immediate digital trust.",
    outcome: "Help businesses look credible.",
  },
  {
    icon: PencilRuler,
    title: "Brand Positioning & Messaging",
    description:
      "Messaging refinement and offer clarity that eliminates market noise and aligns with customer needs.",
    outcome: "Reduce confusion.",
  },
  {
    icon: Rocket,
    title: "Software Product Marketing",
    description:
      "Specialized SaaS messaging and launch positioning designed specifically for technical founders.",
    outcome: "Make software easier to choose.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy & Visibility",
    description:
      "Campaign direction and audience strategy focused on building sustainable long-term visibility.",
    outcome: "Support sustainable visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Trust & Conversion",
    description:
      "Optimizing trust design and CTA structures to remove friction and reduce user hesitation.",
    outcome: "Reduce hesitation.",
  },
  {
    icon: Handshake,
    title: "Strategic Consultation",
    description:
      "Clarity sessions and growth reviews to help founders make stronger decisions.",
    outcome: "Help businesses make stronger decisions.",
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
          <h2 className="mb-4 text-4xl font-bold">What We Do</h2>
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
