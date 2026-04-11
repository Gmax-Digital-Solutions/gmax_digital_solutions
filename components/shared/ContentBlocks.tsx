import { ContentSection } from "@/types/insight";

type Props = {
  block: ContentSection;
};

const ContentBlocks = ({ block }: Props) => {
  return (
    <div className="prose prose-lg max-w-none text-on-surface-variant">
      <div>
        <h2 className="text-3xl font-black text-[#241E20] mt-12 mb-6">
          {block.heading}
        </h2>
        {block.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-xl leading-relaxed text-[#241E20] mb-8 font-medium"
          >
            {paragraph}
          </p>
        ))}
        <blockquote className="my-16 px-12 py-4 border-l-8 border-secondary relative">
          <p className="text-2xl md:text-4xl font-black text-[#241E20] leading-tight tracking-tight italic">
            {block.quote.text}
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default ContentBlocks;
