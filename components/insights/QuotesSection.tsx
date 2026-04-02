import React from "react";

const QuotesSection = () => {
  return (
    <section className="bg-[#241E20] py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="material-symbols-outlined text-primary text-5xl mb-8 block">
          format_quote
        </span>

        <blockquote className="text-3xl md:text-5xl font-extralight text-white leading-tight tracking-tight italic">
          "Clarity often changes outcomes before execution even begins."
        </blockquote>

        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/50 font-medium">
          Gmax Perspective
        </p>
      </div>
    </section>
  );
};

export default QuotesSection;
