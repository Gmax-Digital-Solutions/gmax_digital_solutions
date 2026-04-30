// "use client";

// import { ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import { useAuditStore } from "@/lib/audit/auditStore";
// import { Inter } from "next/font/google";
// import clsx from "clsx";
// import AuditNavbar from "@/components/layout/AuditNavbar";

// const inter = Inter({ subsets: ["latin"] });

// const steps = [
//   "/audit/q1",
//   "/audit/q2",
//   "/audit/q3",
//   "/audit/q4",
//   "/audit/q5",
//   "/audit/q6",
//   "/audit/q7",
//   "/audit/loading",
//   "/audit/results",
// ];

// const TOTAL_QUESTIONS = 7;

// export default function AuditLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const answers = useAuditStore((s) => s.answers);

//   const currentStepIndex = steps.indexOf(pathname);

//   const progress =
//     currentStepIndex >= 0 && currentStepIndex < TOTAL_QUESTIONS
//       ? ((currentStepIndex + 1) / TOTAL_QUESTIONS) * 100
//       : pathname === "/audit/loading"
//         ? 95
//         : pathname === "/audit/results"
//           ? 100
//           : 0;

//   const showProgress =
//     pathname.includes("/audit/q") || pathname === "/audit/loading";

//   return (
//     <div>
//       {/* TOP BAR */}
//       <div className="w-full pt-6">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
//           {Object.keys(answers).length > 0 && (
//             <button
//               onClick={() => {
//                 useAuditStore.getState().reset();
//                 window.location.href = "/audit/q1";
//               }}
//               className="text-xs text-white/60 hover:text-white transition ml-auto"
//             >
//               Restart
//             </button>
//           )}
//         </div>
//       </div>

//       {/* PROGRESS BAR */}
//       {showProgress && (
//         <div className="w-full px-6 mt-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
//               <div
//                 className={clsx(
//                   "h-full rounded-full transition-all duration-500 ease-out",
//                   "bg-gradient-to-r from-blue-500 to-violet-500",
//                 )}
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//             {pathname.includes("/audit/q") && (
//               <p className="mt-2 text-xs text-white/50">
//                 Step {currentStepIndex + 1} of {TOTAL_QUESTIONS}
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* MAIN CONTENT */}
//       <AuditNavbar />
//       <main className="flex-1 flex items-center justify-center">
//         <div className="w-full">{children}</div>
//       </main>
//     </div>
//   );
// }

"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useAuditStore } from "@/lib/audit/auditStore";
import clsx from "clsx";
import AuditNavbar from "@/components/layout/AuditNavbar";

const QUESTION_ROUTES = [
  "/audit/q1",
  "/audit/q2",
  "/audit/q3",
  "/audit/q4",
  "/audit/q5",
  "/audit/q6",
  "/audit/q7",
];

const ALL_STEPS = [...QUESTION_ROUTES, "/audit/loading", "/audit/results"];
const TOTAL_QUESTIONS = 7;

export default function AuditLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const answers = useAuditStore((s) => s.answers);

  const isResultsPage = pathname === "/audit/results";
  const isLoadingPage = pathname === "/audit/loading";
  const currentStepIndex = ALL_STEPS.indexOf(pathname);

  const progress =
    currentStepIndex >= 0 && currentStepIndex < TOTAL_QUESTIONS
      ? ((currentStepIndex + 1) / TOTAL_QUESTIONS) * 100
      : isLoadingPage
        ? 95
        : isResultsPage
          ? 100
          : 0;

  const showProgress = pathname.includes("/audit/q") || isLoadingPage;

  // Results page is fully self-contained — skip layout chrome entirely
  if (isResultsPage) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full pt-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
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

      {showProgress && (
        <div className="w-full px-6 mt-4">
          <div className="max-w-7xl mx-auto">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className={clsx(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  "bg-gradient-to-r from-blue-500 to-violet-500",
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
            {pathname.includes("/audit/q") && (
              <p className="mt-2 text-xs text-white/50">
                Step {currentStepIndex + 1} of {TOTAL_QUESTIONS}
              </p>
            )}
          </div>
        </div>
      )}

      <AuditNavbar />

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
