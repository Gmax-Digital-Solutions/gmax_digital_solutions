// components/ArchiveSection.tsx
import React from "react";

type ArchiveCard = {
  category: string;
  title: string;
  description: string;
  href: string;
};

const archiveCards: ArchiveCard[] = [
  {
    category: "Trust Mechanics",
    title: "Why strong software products still struggle to gain trust",
    description:
      "Founders often focus on feature lists, forgetting that trust is built through consistent narrative and social proof architecture.",
    href: "#",
  },
  {
    category: "Market Readiness",
    title: "Positioning mistakes founders make before launch",
    description:
      'The danger of "generic excellence" and how to niche down without losing your future scalability.',
    href: "#",
  },
  {
    category: "Growth Strategy",
    title: "Why digital credibility matters before traffic",
    description:
      "Spending on ads before fixing your landing page's authority signals is a fast way to burn capital.",
    href: "#",
  },
  {
    category: "Product Design",
    title: "Designing for the 'Enterprise Skeptic'",
    description:
      "Tactics for moving upmarket and convincing high-stakes decision makers through UI clarity.",
    href: "#",
  },
  {
    category: "Digital Trust",
    title: "The Invisible Leak: Is your brand losing users at checkout?",
    description:
      "Analyzing micro-moments of friction that destroy the credibility you worked so hard to build.",
    href: "#",
  },
  {
    category: "Founder Marketing",
    title: "Building Authority without being an Influencer",
    description:
      "Founders don't need to post daily selfies to build a credible professional digital presence.",
    href: "#",
  },
];

const ArchiveSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-surface text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2">
              The Archive
            </h2>
            <p className="text-on-surface-variant">
              Continuous perspective on digital market authority.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-medium text-zinc-400">
              Sort by: Date
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveCards.map((card, index) => (
            <div
              key={index}
              className="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">
                  {card.category}
                </span>
                <h3 className="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">
                  {card.description}
                </p>
              </div>
              <a
                className="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all"
                href={card.href}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
