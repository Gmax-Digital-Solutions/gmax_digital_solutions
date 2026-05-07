"use client";

import React, { useState, useEffect } from "react";
import { contactSchema } from "@/lib/validations/contact-schema";
import { identifyUser, trackEvent } from "@/lib/analytics/posthog";

const ContactFullSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    helpWith: "Strategic Consultation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[e.target.name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit event triggered");
    setErrors({});
    setSubmitted(false);
    setLoading(true);

    const result = contactSchema.safeParse(formData);

    console.log(result);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Record<string, string[]>);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({
          api: [data.error || "An error occurred. Please try again."],
        });
        setLoading(false);
        return;
      }

      console.log(data);

      setSubmitted(true);

      identifyUser(formData.email, {
        full_name: formData.fullName,
        email: formData.email,
        company: formData.company,
        help_with: formData.helpWith,
        message: formData.message,
        form: "contact_page",
      });

      setFormData({
        fullName: "",
        email: "",
        company: "",
        helpWith: "Strategic Consultation",
        message: "",
      });

      trackEvent("contact_form_submitted", {
        form: "contact_page",
      });
    } catch {
      setErrors({
        api: ["Network error. Please try again."],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="proposal"
      className="bg-surface-container-low py-24 px-8 text-on-surface-variant"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left */}
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Prefer direct contact?
            </h2>

            <div className="space-y-6">
              <a
                className="group flex items-start gap-4"
                href="mailto:hello@gmaxdigital.com"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary editorial-shadow group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-outline mb-1">
                    Email
                  </p>
                  <p className="text-lg font-medium">hello@gmaxdigitals.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl p-3 bg-white flex items-center justify-center text-primary editorial-shadow">
                  <span className="material-symbols-outlined">public</span>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-outline mb-1">
                    Global Presence with a focus on English-speaking markets
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Serving clients globally, with strategic focus on e-commerce
                    brands and SMEs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/30">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-outline mb-8">
              We usually hear from
            </h3>

            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border-l-4 border-primary editorial-shadow">
                <h4 className="font-bold text-lg mb-1">
                  Entrepreneurs launching new ventures
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Bringing new ideas to market with a strong digital foundation.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-l-4 border-secondary editorial-shadow">
                <h4 className="font-bold text-lg mb-1">
                  E-commerce brands seeking growth
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Aligning digital presence with commercial strategy.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-l-4 border-on-surface editorial-shadow">
                <h4 className="font-bold text-lg mb-1">
                  Businesses improving visibility
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Strengthening digital authority in competitive markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 editorial-shadow rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Tell us what you are working on
          </h2>

          <p className="text-on-surface-variant mb-10 font-light">
            Your message helps us understand where your business is and what may
            be worth discussing first.
          </p>

          {submitted && (
            <p className="text-green-600 mb-6">
              Thanks for reaching out! We will get back to you shortly.
            </p>
          )}

          {errors.api && <p className="text-red-500 mb-6">{errors.api[0]}</p>}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Julian Anderson"
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                />

                {errors.fullName && (
                  <p className="text-secondary text-sm mt-2">
                    {errors.fullName[0]}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. julian@company.com"
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                />

                {errors.email && (
                  <p className="text-secondary text-sm mt-2">
                    {errors.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  Company / Project Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Gmax Labs"
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                />

                {errors.company && (
                  <p className="text-secondary text-sm mt-2">
                    {errors.company[0]}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  What do you need help with?
                </label>

                <select
                  name="helpWith"
                  value={formData.helpWith}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface appearance-none"
                >
                  <option>Search Engine Optimization</option>
                  <option>AI Search Visibility</option>
                  <option>Content Strategy</option>
                  <option>Strategic Consultation</option>
                </select>

                {errors.helpWith && (
                  <p className="text-secondary text-sm mt-2">
                    {errors.helpWith[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your current challenges and goals..."
                className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface resize-none"
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message[0]}</p>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
              <p className="text-xs text-on-surface-variant italic max-w-xs">
                All conversations are treated with professional discretion and
                confidentiality. View our{" "}
                <span className="underline hover:text-primary cursor-pointer">
                  privacy policy
                </span>{" "}
                for more details.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-12 py-4 font-bold rounded hover:bg-primary-container transition-all active:scale-95 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFullSection;
