import React from "react";

interface OutcomesProps {
  reviewMessage?: string;
  occupation?: string;
  industry?: string;
}

const outcomeReviews: OutcomesProps[] = [
  {
    reviewMessage:
      "The biggest shift was clarity. Our business became easier to understand, trust, and engage with.",
    occupation: "Founder",
    industry: "Service Business",
  },
  {
    reviewMessage:
      "Gmax helped us clarify our messaging and improve our website, which made a huge difference in how potential customers perceived us.",
    occupation: "CEO",
    industry: "SaaS Startup",
  },
  {
    reviewMessage:
      "The strategic consultation sessions provided by Gmax were invaluable in helping us make stronger decisions for our growth.",
    occupation: "Co-Founder",
    industry: "E-commerce",
  },
  {
    reviewMessage:
      "Working with Gmax improved our digital presence significantly, leading to better user trust and conversion rates.",
    occupation: "Marketing Director",
    industry: "Tech Company",
  },
  {
    reviewMessage:
      "The brand positioning and messaging services helped us reduce confusion in the market and better connect with our target audience.",
    occupation: "Product Manager",
    industry: "Fintech",
  },
  {
    reviewMessage:
      "Gmax's expertise in website design and digital presence made our business look much more credible, which was crucial for our growth.",
    occupation: "Founder",
    industry: "Health Tech",
  },
];

const Outcomes = (props: OutcomesProps) => {
  return (
    <section className="py-24 px-6 bg-white text-on-surface-variant">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-on-background mb-8">
            What these services help improve
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>
              </div>
              <p className="text-lg font-medium text-on-surface">
                Stronger professional credibility.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>
              </div>
              <p className="text-lg font-medium text-on-surface">
                Clearer market understanding and positioning.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>
              </div>
              <p className="text-lg font-medium text-on-surface">
                Better digital presentation across all touchpoints.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>
              </div>
              <p className="text-lg font-medium text-on-surface">
                Improved user trust and conversion potential.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-inverse-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  check
                </span>
              </div>
              <p className="text-lg font-medium text-on-surface">
                Stronger readiness for long-term growth.
              </p>
            </div>
          </div>
        </div>

        {/* Right Testimonial */}
        <div className="bg-surface-container p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

          <div className="relative z-10">
            <p className="text-2xl italic font-light text-on-surface-variant mb-8 leading-relaxed">
              "The biggest shift was clarity. Our business became easier to
              understand, trust, and engage with."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container">
                {/* <img src="" alt="" /> */}
              </div>
              <div>
                <p className="font-bold">Founder</p>
                <p className="text-sm text-on-surface-variant">
                  Service Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
