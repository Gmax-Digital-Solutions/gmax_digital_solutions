import { ContentBlock } from "@/types/content";

type Props = {
  blocks: ContentBlock[] | undefined;
};

const ContentBlocks = ({ blocks }: Props) => {
  return (
    <div className="prose prose-lg max-w-none text-on-surface-variant">
      {blocks?.map((block, index) => {
        switch (block.type) {
          case "summary":
            return (
              <p
                key={index}
                className="text-xl leading-relaxed text-[#241E20] mb-8 font-medium"
              >
                {block.content}
              </p>
            );
          case "heading":
            return (
              <h2
                key={index}
                className="text-3xl font-black text-[#241E20] mt-12 mb-6"
              >
                {block.content}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="mb-6 leading-relaxed">
                {block.content}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="my-16 px-12 py-4 border-l-8 border-secondary relative"
              >
                <p className="text-2xl md:text-4xl font-black text-[#241E20] leading-tight tracking-tight italic">
                  {block.content}
                </p>
              </blockquote>
            );
          case "subheading":
            return (
              <h2
                key={index}
                className="text-3xl font-black text-[#241E20] mt-12 mb-6"
              >
                {block?.content}
              </h2>
            );
          case "paragraph":
            return <p className="mb-6 leading-relaxed">{block?.content}</p>;
        }
      })}
    </div>
  );
};

export default ContentBlocks;
