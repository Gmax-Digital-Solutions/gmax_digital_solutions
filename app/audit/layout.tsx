"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";
import { Inter } from "next/font/google";
import AuditNavbar from "@/components/layout/AuditNavbar";
import clsx from "clsx";
import AuditFooter from "@/components/layout/AuditFooter";

const inter = Inter({ subsets: ["latin"] });
/**
 * Define your steps in order
 */
const steps = [
  "/audit/q1",
  "/audit/q2",
  "/audit/q3",
  "/audit/q4",
  "/audit/q5",
  "/audit/q6",
  "/audit/loading",
  "/audit/results",
];

export default function AuditLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const answers = useAuditStore((s) => s.answers);

  /**
   * Calculate progress
   */
  const currentStepIndex = steps.indexOf(pathname);
  const totalQuestions = 6;

  const progress =
    currentStepIndex >= 0 && currentStepIndex < totalQuestions
      ? ((currentStepIndex + 1) / totalQuestions) * 100
      : pathname === "/audit/loading"
        ? 95
        : pathname === "/audit/results"
          ? 100
          : 0;

  /**
   * Determine if we should show progress bar
   */
  const showProgress =
    pathname.includes("/audit/q") || pathname === "/audit/loading";

  return (
    <div>
      {/* TOP BAR */}
      <AuditNavbar />
      <div className="w-full pt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Back */}

          {/* Optional reset */}
          {Object.keys(answers).length > 0 && (
            <button
              onClick={() => {
                useAuditStore.getState().reset();
                window.location.href = "/audit/q1";
              }}
              className="text-xs text-white/60 hover:text-white transition"
            >
              Restart
            </button>
          )}
        </div>
      </div>

      {/* PROGRESS BAR */}
      {showProgress && (
        <div className="w-full px-6 mt-6">
          <div className="max-w-7xl mx-auto">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className={clsx(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  "bg-gradient-to-r from-blue-500 to-violet-500",
                )}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step indicator */}
            {pathname.includes("/audit/q") && (
              <p className="mt-2 text-xs text-white/50">
                Step {currentStepIndex + 1} of {totalQuestions}
              </p>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
