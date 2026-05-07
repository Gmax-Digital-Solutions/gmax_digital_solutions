// components/ResponseExpectation.tsx
import React from "react";

type ResponseStep = {
  number: string;
  title: string;
  description: string;
  bgClass: string;
  numberColorClass: string;
};

const steps: ResponseStep[] = [
  {
    number: "01",
    title: "Submit your store details",
    description:
      "We gather your URL, industry, and current marketing approach so we can run an accurate audit.",
    bgClass: "bg-white",
    numberColorClass: "text-surface-container",
  },
  {
    number: "02",
    title: "We run your free audit",
    description:
      "Check where you rank on Google, whether you appear in AI search tools, and compare you to competitors.",
    bgClass: "bg-surface-container-low",
    numberColorClass: "text-surface-container-highest",
  },
  {
    number: "03",
    title: "You get your 90-day roadmap",
    description:
      "3 actionable fixes ranked by impact. Plus your full visibility report. All yours to keep.",
    bgClass: "bg-white",
    numberColorClass: "text-surface-container",
  },
];

const ResponseExpectation: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-white text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          How your free AI Search Visibility Audit works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30 rounded-xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgClass} p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/30`}
            >
              <span
                className={`text-6xl font-black ${step.numberColorClass} mb-6`}
              >
                {step.number}
              </span>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-on-surface-variant font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponseExpectation;
