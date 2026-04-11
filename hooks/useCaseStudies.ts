"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";

export function useCaseStudies(initialData: any[]) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchWithRetry<T>(
    fetchFn: () => Promise<T>,
    retries = 3,
    delay = 1000,
  ): Promise<T> {
    for (let i = 0; i < retries; i++) {
      try {
        return await fetchFn();
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }

    throw new Error("failed to fetch");
  }

  async function fetchCaseStudies() {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchWithRetry(async () => {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.log(error);
          throw new Error(error.message);
        }

        console.log(data);

        return data;
      });

      if (!result) throw new Error("Insights unavailable");

      setData(result);

      console.log(result);
      localStorage.setItem("cached-all", JSON.stringify(result));
    } catch (error: unknown) {
      const cached = localStorage.getItem("cached-all");

      if (cached) {
        try {
          setData(JSON.parse(cached));
        } catch {
          localStorage.removeItem("cached-all");
        }
      }

      if (error instanceof Error) {
        setError(
          error.message.includes("Failed to fetch")
            ? "Temporary network issue."
            : "Unable to load content.",
        );
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCaseStudies;
  }, [data]);

  return {
    data,
    loading,
    error,
    refetch: fetchCaseStudies,
  };
}
