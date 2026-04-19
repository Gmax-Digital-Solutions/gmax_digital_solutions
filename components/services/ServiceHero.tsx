"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Grainient from "../Grainient";
import { trackEvent } from "@/lib/analytics/posthog";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-surface px-8 pb-24 pt-40">
      <div className="absolute inset-0">
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
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left Content */}
        <div className="relative z-10">
          <span className="mb-6 inline-block rounded bg-secondary/5 px-3 py-1 text-[0.75rem] font-bold uppercase tracking-widest text-secondary">
            Strategic Digital Solutions
          </span>

          <h1 className="mb-8 text-5xl font-black leading-[1.1] tracking-tight text-on-background md:text-6xl capitalize">
            Innovative solutions designed to help businesses thrive{" "}
            <span className="text-primary italic">in a fast pace</span>,
            ever-evolving digital landscape.
          </h1>

          <p className="mb-10 max-w-xl text-xl leading-relaxed text-on-surface-variant">
            Strong businesses often need more than execution — they need
            clarity, stronger digital foundations, and strategic visibility
            built intentionally.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="contact#proposal"
              onClick={() =>
                trackEvent("proposal_requested_btn", {
                  location: "service_hero",
                  label: "request proposal btn",
                })
              }
              className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-on-secondary transition-all duration-300 hover:opacity-90 active:scale-95"
            >
              Request a Proposal
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-full bg-surface-container-high p-12">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXVJN4lrxyxfcR8GRG0wfojBysBc53eGzXgRBDB00uGxcfwTOTYGAZ-CNQVUL3BzbpFuWxYamtyELU5p9NQnNhB_0clUFs7iIdzWtAArZoXCzvWox3KMXgU9B9FtHZ7CxZfCIIqq8jysrbauFtwUTapd2X07abt3F97UJMGW6LTuihUMfEQUtsOZ85vgOp-_LhJQPwBTqw3MBZgAI2vDnLegIG4ea2LK_9M3vN-bjzj2t4XQ7Wq2qhifrIKa8HL0gBIURmPtAOUY"
              alt="Abstract digital network pattern"
              width={800}
              height={800}
              className="h-full w-full rounded-full object-cover opacity-80 mix-blend-multiply"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-xl border border-surface-container bg-white p-8 shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-on-surface">
                Proven Outcomes
              </span>
            </div>

            <p className="text-sm text-on-surface-variant">
              Strategically led digital growth for service-based founders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
