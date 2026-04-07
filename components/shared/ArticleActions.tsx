"use client";

import { useState } from "react";

type Props = {
  title: string;
};

const ArticleActions = ({ title }: Props) => {
  const [copied, setCopied] = useState<Boolean>(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const handleMail = () => {
    const url = window.location.href;

    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(
      `I thought you might find this useful:\n\n${url}`,
    );

    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <aside className="lg:col-span-3 order-2 lg:order-1">
      <div className="sticky top-28 flex flex-col gap-8">
        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#241E20] mb-4">
            Strategic Context
          </h3>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            This article is part of our Strategic Growth Intelligence series,
            where we examine how modern businesses build trust, authority, and
            commercial momentum.
          </p>

          <a
            href="#"
            className="text-xs font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all"
          >
            EXPLORE STRATEGIC ARCHIVE
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#241E20]">
            Share Insight
          </h3>

          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">link</span>
            </button>

            <button
              onClick={handleMail}
              className="w-10 h-10 rounded bg-white flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArticleActions;
