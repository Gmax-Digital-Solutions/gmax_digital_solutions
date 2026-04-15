"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0e0e11] text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-black mb-6 tracking-tight">
          Something Broke.
        </h1>

        <p className="text-white/60 mb-8 leading-relaxed">
          An unexpected error occurred while processing your request. Our
          systems are already adapting.
        </p>

        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#585DE1] font-bold hover:opacity-90 transition"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
