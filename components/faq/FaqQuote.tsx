// components/FAQQuote.tsx
import React from "react";

const FAQQuote: React.FC = () => {
  return (
    <section className="py-32 bg-on-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span
            className="material-symbols-outlined text-secondary text-5xl mb-8"
            data-weight="fill"
          >
            format_quote
          </span>
          <blockquote className="text-[2.5rem] leading-[1.2] font-extrabold tracking-tight text-white mb-8">
            “Most growth problems become clearer when the right questions are
            asked early.”
          </blockquote>
          <div className="w-16 h-1 bg-secondary rounded-full"></div>
        </div>
      </div>

      {/* Decorative background gradient */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_20%_30%,_#585DE1_0%,_transparent_50%)]"></div>
      </div>
    </section>
  );
};

export default FAQQuote;
