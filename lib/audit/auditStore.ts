import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * All question answers
 */
export type AuditAnswers = {
  traffic_source?: string;
  ai_visibility?: string;
  content_type?: string;
  intent_coverage?: string;
  website_clarity?: string;
  growth_bottleneck?: string;
  website_url?: string;
};

/**
 * AI Result Structure
 */
export type AuditResult = {
  score: number;
  summary: string;
  strengths: string[];
  gaps: string[];
  quick_wins: string[];
  long_term: string[];
  opportunities: string[];
  visibility_outlook?: string;
};

/**
 * Store Type
 */
type AuditState = {
  answers: AuditAnswers;
  result: AuditResult | null;

  isLoading: boolean;
  error: string | null;
  sessionId: string;

  setAnswer: (key: keyof AuditAnswers, value: string) => void;
  setAnswers: (answers: AuditAnswers) => void;

  setResult: (result: AuditResult) => void;

  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  clearResult: () => void;
  reset: () => void;

  isComplete: () => boolean;
  getProgress: () => number;
};

/**
 * Zustand Store
 */
export const useAuditStore = create<AuditState>()(
  persist(
    (set, get) => ({
      answers: {},
      result: null,

      isLoading: false,
      error: null,

      sessionId: crypto.randomUUID(),

      /**
       * Set a single answer
       */
      setAnswer: (key, value) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [key]: value,
          },
        })),

      /**
       * Set all answers (useful for hydration)
       */
      setAnswers: (answers) => set({ answers }),

      /**
       * Store AI result
       */
      setResult: (result) => set({ result }),

      /**
       * Loading state (for API calls)
       */
      setLoading: (loading) => set({ isLoading: loading }),

      /**
       * Error handling
       */
      setError: (error) => set({ error }),

      /**
       * Clear only result
       */
      clearResult: () => set({ result: null }),

      /**
       * Full reset (new audit session)
       */
      reset: () =>
        set({
          answers: {},
          result: null,
          isLoading: false,
          error: null,
          sessionId: crypto.randomUUID(),
        }),

      /**
       * Check if all required questions are answered
       */
      isComplete: () => {
        const a = get().answers;

        return (
          !!a.traffic_source &&
          !!a.ai_visibility &&
          !!a.content_type &&
          !!a.intent_coverage &&
          !!a.website_clarity &&
          !!a.growth_bottleneck
        );
      },

      /**
       * Calculate progress percentage
       */
      getProgress: () => {
        const a = get().answers;
        const total = 6;

        const answered = [
          a.traffic_source,
          a.ai_visibility,
          a.content_type,
          a.intent_coverage,
          a.website_clarity,
          a.growth_bottleneck,
        ].filter(Boolean).length;

        return Math.round((answered / total) * 100);
      },
    }),
    {
      name: "audit-storage",
    },
  ),
);
