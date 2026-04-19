"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const CaseHero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-primary px-4 py-1.5 bg-surface-container-low rounded-full">
            Strategic Analysis
          </span>

          <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight text-on-background">
            How strategic <span className="text-primary">clarity</span>{" "}
            influences business outcomes
          </h1>

          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Selected examples showing how positioning, trust, and digital
            structure shape growth decisions.
          </p>

          <div className="pt-4">
            <Link
              href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("discovery_btn_clicked", {
                  location: "case_study_hero",
                  source: "case_study",
                  label: "Book Strategy Call",
                })
              }
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center group transition-transform active:scale-95"
            >
              Discuss Your Project
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-surface-container-low rounded-full absolute -top-12 -right-12 w-64 h-64 -z-10 blur-3xl opacity-50"></div>

          <div className="relative bg-surface-container border border-outline-variant/10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9DTt4DoviZbB5vKDSgltDzBuJ7DaywMQGUW2FTHCXaHiea1zz2SUomgpwHJ9RaVyp4Ed_i2tkTa31fUsAQGe5vfMQJzskyzOdco04LPx370S7QormweHYO3CcM2NU4KyLWo5ABIa6CUkqMuldCsNCSvjAz6qeGQ-ZcV_00nOlVGytZdyYDyahiGMIrwwN6cwErUAkFHp8HcFuYBJj6I4xy9clbSsSuKgsPmnL9wi_ZPU4TrazlNG4qJvD8ds07Rk6qzIHe9du49Q"
              alt="Strategic workspace"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseHero;
