"use client";

import { useRouter } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";
import { Question } from "@/lib/audit/auditQuestion";

type Props = {
  question: Question;
};

export default function QuestionPage({ question }: Props) {
  const router = useRouter();
  const { setAnswer, answers } = useAuditStore();

  const selected = answers[question.key as keyof typeof answers];

  const handleSelect = (value: string) => {
    setAnswer(question.key as any, value);

    setTimeout(() => {
      router.push(question.next);
    }, 200);
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-8 max-w-5xl mx-auto w-full">
      {/* Step Indicator */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-xs font-bold uppercase text-gray-400">
              Module 01: Visibility Audit
            </span>
            <h2 className="text-sm font-semibold text-primary mt-1">
              Step {question.step} of {question.total}
            </h2>
          </div>
          <span className="text-xs text-gray-400">
            {Math.round((question.step / question.total) * 100)}% Completed
          </span>
        </div>

        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#585DE1] rounded-full transition-all"
            style={{
              width: `${(question.step / question.total) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question Header */}
      <div className="mb-12">
        <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#241E20] leading-tight">
          {question.title}
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl">
          {question.subtitle}
        </p>
      </div>

      {/* Answer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {question.options.map((opt) => {
          const isSelected = selected === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`group text-left p-8 rounded-xl border-2 transition-all duration-300
                ${
                  isSelected
                    ? "bg-primary/10 border-[#585DE1] shadow-lg"
                    : "bg-surface-container-low border-transparent hover:border-gray-300"
                }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
                  <span className="material-symbols-outlined">{opt.icon}</span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-[#585DE1]" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 bg-[#585DE1] rounded-full" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#241E20] mb-2">
                {opt.title}
              </h3>

              <p className="text-gray-500">{opt.description}</p>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-12 border-t">
        {question.prev ? (
          <button
            onClick={() => router.push(question.prev!)}
            className="px-6 py-3 text-gray-500 hover:text-black flex items-center gap-2"
          >
            ← Previous
          </button>
        ) : (
          <div />
        )}

        <button
          disabled={!selected}
          onClick={() => router.push(question.next)}
          className="px-8 py-4 bg-[#585DE1] text-white rounded-lg font-bold disabled:opacity-40"
        >
          Continue →
        </button>
      </div>
    </main>
  );
}
