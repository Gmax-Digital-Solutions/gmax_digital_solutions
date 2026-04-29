"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";

const steps = [
  {
    label: "Active Task",
    text: "Mapping visibility gaps",
    icon: "hub",
  },
  {
    label: "Queueing",
    text: "Scoring AI discoverability",
    icon: "monitoring",
  },
  {
    label: "Pending",
    text: "Evaluating content structure",
    icon: "account_tree",
  },
];

export default function LoadingPage() {
  const router = useRouter();
  const { answers, setResult } = useAuditStore();

  const [progress, setProgress] = useState(10);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    /**
     * Fake progress animation (feels fast + intelligent)
     */
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 8;
      });
    }, 600);

    /**
     * Rotate insights
     */
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    /**
     * Call AI API
     */
    const runAudit = async () => {
      try {
        const res = await fetch("/api/audit", {
          method: "POST",
          body: JSON.stringify(answers),
        });

        const data = await res.json();

        setResult(data);

        setProgress(100);

        setTimeout(() => {
          router.push("/audit/results");
        }, 800);
      } catch (err) {
        console.error(err);
      }
    };

    runAudit();

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#241E20 1px, transparent 1px), linear-gradient(90deg, #241E20 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
        {/* HEADER */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="text-gray-800 font-bold tracking-[0.2em] text-sm uppercase">
            AI Visibility
          </span>
          <div className="h-[2px] w-12 bg-primary"></div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#241E20] mb-6">
            Analyzing your answers<span className="text-primary">.</span>
          </h1>

          <p className="text-gray-500 max-w-xl">
            Our system is mapping your visibility across AI-driven discovery
            layers.
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full max-w-2xl space-y-12">
          <div className="relative h-[4px] w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[#585DE1] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

            {/* shimmer */}
            <div className="absolute inset-0 animate-pulse bg-white/10" />
          </div>

          {/* INSIGHT ROTATION */}
          <div className="grid md:grid-cols-3 gap-4 border-t pt-8">
            {steps.map((step, i) => {
              const isActive = i === activeStep;

              return (
                <div
                  key={i}
                  className={`transition-all ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <span className="material-symbols-outlined text-2xl text-primary">
                      {step.icon}
                    </span>

                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-primary">
                        {isActive ? "Active" : "Queue"}
                      </p>

                      <p className="text-sm text-[#241E20] font-semibold">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER STATUS */}
        <div className="mt-20 w-full max-w-xl text-[10px] text-gray-500">
          <div className="flex justify-between py-2 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#585DE1] rounded-full animate-pulse" />
              Engine: Processing_Schema
            </span>
            <span>ID: AI_{Date.now()}</span>
          </div>

          <div className="h-px bg-gray-200 w-full" />

          <div className="grid grid-cols-6 gap-1 py-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`h-1 ${
                  i < Math.floor(progress / 20) ? "bg-[#585DE1]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DECOR */}
      <div className="absolute bottom-12 left-12 hidden md:flex items-center gap-4">
        <div className="w-8 h-[1px] bg-primary"></div>
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          System Integrity Secured
        </span>
      </div>
    </main>
  );
}
