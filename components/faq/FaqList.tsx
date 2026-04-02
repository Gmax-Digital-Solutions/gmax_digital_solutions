// components/FAQSection.tsx
"use client";

import { RevealOnScroll } from "../animations";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "When is the right time to seek strategic digital guidance?",
    answer:
      "Typically, businesses seek our guidance when internal growth plateaus or when entering a new market phase. If your digital efforts feel fragmented or if you're making decisions based on guesswork rather than architecture, it's time for a strategic reset.",
  },
  {
    question: "Do you work with early-stage businesses?",
    answer:
      'Yes, provided there is a clear product-market fit or a foundational business model. We specialize in building the "Growth Infrastructure" for companies that are ready to scale professionally rather than just experiment.',
  },
  {
    question: "Is every engagement execution-heavy?",
    answer:
      "No. Some clients engage us purely for high-level advisory and roadmap architecture, while others require full-funnel execution. We tailor the intensity of implementation to your internal team's capabilities.",
  },
  {
    question: "What usually changes first in a strategic review?",
    answer:
      "The first shift is often narrative and measurement. We usually find that businesses are either telling the wrong story to the right audience or tracking metrics that don't actually correlate to profit. We tighten the positioning first.",
  },
  {
    question: "How do projects typically begin?",
    answer:
      'Every engagement starts with a "Deep Audit" phase—a 2-week period where we dissect your existing data, competitor landscape, and internal bottlenecks before proposing a single line of code or creative.',
  },
  {
    question: "Do you focus only on websites?",
    answer:
      "Websites are just the storefront. We design the entire ecosystem: customer acquisition loops, retention automation, CRM integration, and performance marketing strategies that feed into the site.",
  },
  {
    question: "Can a business engage before launch?",
    answer:
      'Absolutely. Engaging before launch is often the most cost-effective path, as it prevents "technical debt" and branding misalignments that are expensive to fix later. We help build the launchpad.',
  },
  {
    question: "What if growth has already started but results feel weak?",
    answer:
      'This is the "Scaling Plateau." It usually indicates that the initial tactics that got you to $1M won\'t get you to $10M. We audit the friction points and optimize the conversion flow to restore efficiency.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface-container-low py-24 text-on-surface-variant">
      <div className="max-w-4xl mx-auto px-8 space-y-4">
        {faqs.map((faq, index) => (
          <RevealOnScroll
            key={index}
            className="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-bold tracking-tight">
                {faq.question}
              </h3>
              <span
                className={`material-symbols-outlined text-primary-container transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-on-surface-variant leading-relaxed">
                {faq.answer}
              </div>
            )}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
