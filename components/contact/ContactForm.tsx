// components/ContactFullSection.tsx

"use client";

import React, { useState } from "react";

const ContactFullSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    helpWith: "Strategic Consultation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      company: "",
      helpWith: "Strategic Consultation",
      message: "",
    });
  };

  return (
    <section className="bg-surface-container-low py-24 px-8 text-on-surface-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Direct Contact & Info */}
        <div className="lg:col-span-4 space-y-12">
          {/* Direct Contact */}
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
                  <p className="text-lg font-medium">hello@gmaxdigital.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary editorial-shadow">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-outline mb-1">
                    Global Presence
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Serving clients globally, with strategic focus on founders
                    and growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="pt-8 border-t border-outline-variant/30">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-outline mb-8">
              We usually hear from
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border-l-4 border-primary editorial-shadow">
                <h4 className="font-bold text-lg mb-1">
                  Founders building software products
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Translating vision into scalable technical architecture.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border-l-4 border-secondary editorial-shadow">
                <h4 className="font-bold text-lg mb-1">
                  Startups refining market direction
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

        {/* Right: Solution Bridge Form */}
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

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Julian Anderson"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                  required
                />
              </div>
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. julian@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                  required
                />
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
                  placeholder="e.g. Gmax Labs"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                  required
                />
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
                  <option>Strategic Consultation</option>
                  <option>Product Development</option>
                  <option>Market Positioning</option>
                  <option>Scaling Infrastructure</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your current challenges and goals..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface resize-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
              <p className="text-xs text-on-surface-variant italic max-w-xs">
                All conversations are treated with professional discretion and
                confidentiality. view our{" "}
                <span className="underline hover:text-primary cursor-pointer">
                  privacy policy
                </span>{" "}
                for more details.
              </p>
              <button
                type="submit"
                className="bg-primary text-white px-12 py-4 font-bold rounded hover:bg-primary-container transition-all active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFullSection;
