"use client";

import { newsletterSchema } from "@/lib/validations/newsletter-schema";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics/posthog";

export function useNewsletter() {
  const [formData, setFormData] = useState({ email: "", first_name: "" });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  useEffect(() => {
    if (errors.api) {
      const timer = setTimeout(() => {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.api;
          return newErrors;
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors.api]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = newsletterSchema.safeParse(formData);

    console.log(result);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Record<string, string[]>);
      setLoading(false);
    }

    try {
      const response = await fetch("api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ api: [data.message || "An error occurred"] });
        setLoading(false);
        return;
      }

      setSubmitted(true);

      setFormData({ email: "", first_name: "" });
      trackEvent("newsletter_form_submitted", {
        form: "newsletter_form",
      });
    } catch (error) {
      setErrors({
        api: ["An unexpected error occurred. Please try again later."],
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    handleSubmit,
    submitted,
    loading,
  };
}
