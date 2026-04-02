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
    title: "We review your message",
    description:
      "A strategist reviews your input to understand the context and urgency of your project.",
    bgClass: "bg-white",
    numberColorClass: "text-surface-container",
  },
  {
    number: "02",
    title: "We understand what you may need",
    description:
      "We identify potential blockers and opportunities before our first conversation.",
    bgClass: "bg-surface-container-low",
    numberColorClass: "text-surface-container-highest",
  },
  {
    number: "03",
    title: "We suggest the best next conversation",
    description:
      "We propose a focused call or a specific workshop to move your priorities forward.",
    bgClass: "bg-white",
    numberColorClass: "text-surface-container",
  },
];

const ResponseExpectation: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-white text-on-surface-variant">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          What happens after you reach out
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
