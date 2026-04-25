import { ContentSection } from "@/types/insight";

type Props = {
  blocks: ContentSection[];
};

const ContentBlocks = ({ blocks }: Props) => {
  return (
    <div className="prose prose-lg max-w-none text-on-surface-variant">
      {blocks.map((block, blockIndex) => (
        <section
          key={blockIndex}
          aria-labelledby={`section-heading-${blockIndex}`}
        >
          {/* ── H2: Main section heading ── */}
          <h2
            id={`section-heading-${blockIndex}`}
            className="text-3xl font-black text-[#241E20] mt-14 mb-6 tracking-tight"
          >
            {block.heading}
          </h2>

          {/* ── Intro paragraphs (before any subsections) ── */}
          {block.intro_paragraphs?.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="text-xl leading-relaxed text-[#241E20] mb-8 font-medium"
            >
              {paragraph}
            </p>
          ))}

          {/* ── H3 Subsections ── */}
          {block.subsections?.map((sub, subIndex) => (
            <div key={subIndex}>
              <h3
                id={`subsection-heading-${blockIndex}-${subIndex}`}
                className="text-2xl font-black text-[#241E20] mt-10 mb-4 tracking-tight"
              >
                {sub.subheading}
              </h3>

              {sub.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-xl leading-relaxed text-[#241E20] mb-6 font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* ── Optional pull-quote ── */}
          {block.quote && (
            <blockquote className="my-16 px-12 py-4 border-l-8 border-secondary relative">
              <p className="text-2xl md:text-4xl font-black text-[#241E20] leading-tight tracking-tight italic">
                {block.quote.text}
              </p>
              {block.quote.author && (
                <cite className="block mt-4 text-sm font-bold text-on-surface-variant not-italic uppercase tracking-widest">
                  — {block.quote.author}
                </cite>
              )}
            </blockquote>
          )}
        </section>
      ))}
    </div>
  );
};

export default ContentBlocks;
