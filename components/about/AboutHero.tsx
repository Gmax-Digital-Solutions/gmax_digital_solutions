"use client";

import Grainient from "../Grainient";
import WomenHero from "@/public/images/women_business.jpg";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

export default function AboutHero() {
  return (
    <section className="relative px-8 pt-40 pb-32">
      <div className="absolute inset-0 -z-10 ">
        <Grainient
          color1="#edbac2"
          color2="#f7ebed"
          color3="#f2f2f2"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={3.4}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={57}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={1.55}
          className="h-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="label-md mb-6 block font-bold uppercase tracking-[0.2em] text-primary">
            About Gmax Digital
          </span>

          <h1 className="mb-8 text-6xl font-bold tracking-tighter leading-[1.05] text-on-background md:text-7xl">
            We help e-commerce brands{" "}
            <span className="italic text-primary">
              get found on Google and AI.
            </span>
          </h1>

          <p className="mb-12 max-w-2xl text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            Paid ads are expensive. Organic visibility is forever. We combine
            SEO and Answer Engine Optimisation to reduce your ad spend while
            increasing your real revenue.
          </p>

          <Link
            href="https://calendly.com/hello-gmaxdigitals/strategic-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("discovery_btn_clicked", {
                location: "cta_section",
                source: "cta_section",
                label: "Book Strategy Call",
              })
            }
            className="group inline-flex items-center rounded-lg bg-primary-container px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02]"
          >
            Get Your Free AI Search Visibility Audit
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="relative hidden lg:block aspect-square w-full rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
          <div className="aspect-square bg-surface-container rounded-full relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <Image
              alt="Abstract digital composition"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              data-alt="Minimal premium abstract digital geometric composition with blue tones"
              src={WomenHero}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute w-48 h-48 border border-secondary/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
