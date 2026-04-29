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
  competitor_url?: string;
};

/**
 * Competitor Analysis Structure
 */
export type CompetitorAnalysis = {
  competitor_url: string;
  competitor_name: string;
  competitive_score: number;
  their_strengths: string[];
  your_advantages: string[];
  gaps_to_close: string[];
  verdict: string;
};

/**
 * AI Result Structure
 */
export type AuditResult = {
  score: number;
  summary: string;
  strengths: string[];
  gaps: string[];
  opportunities: string[];
  quick_wins?: string[];
  long_term?: string[];
  visibility_outlook?: string;
  competitor_analysis?: CompetitorAnalysis;
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

      setAnswer: (key, value) =>
        set((state) => ({
          answers: { ...state.answers, [key]: value },
        })),

      setAnswers: (answers) => set({ answers }),

      setResult: (result) => set({ result }),

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),

      clearResult: () => set({ result: null }),

      reset: () =>
        set({
          answers: {},
          result: null,
          isLoading: false,
          error: null,
          sessionId: crypto.randomUUID(),
        }),

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

      getProgress: () => {
        const a = get().answers;
        const total = 7;
        const answered = [
          a.traffic_source,
          a.ai_visibility,
          a.content_type,
          a.intent_coverage,
          a.website_clarity,
          a.growth_bottleneck,
          a.website_url,
        ].filter(Boolean).length;
        return Math.round((answered / total) * 100);
      },
    }),
    { name: "audit-storage" },
  ),
);
