"use client";

import Image from "next/image";
import SubscribeBtn from "../ui/SubscribeBtn";
import HomeHero from "@/public/images/BusinessGathering.jpg";
import Grainient from "../Grainient";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const Hero = () => {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
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
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-24 md:my-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center z-10">
        <div className="z-10 order-2 md:order-1">
          <span className="inline-block px-3 py-1 bg-surface-container-low text-primary font-bold text-[10px] uppercase tracking-widest mb-6">
            E-Commerce Growth
          </span>
          <h1 className="text-editorial-lg text-[#241E20] mb-8">
            We help e-commerce brands{" "}
            <span className="text-primary-container">
              get found on Google and AI search
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
            Stop relying only on paid ads. Discover exactly where your store is
            invisible, and how to fix it in 90 days.
          </p>
          <div className="flex flex-col lg:flex-row flex-wrap gap-4">
            <Link
              href="contact#proposal"
              onClick={() =>
                trackEvent("proposal_btn_clicked", {
                  location: "insigh_hero",
                  label: "audit_btn",
                  source: "insights",
                })
              }
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold transition-transform hover:-translate-y-1 active:scale-95"
            >
              Get a Free AI Search Audit
            </Link>
            <SubscribeBtn />
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden relative border-8 border-white shadow-2xl transform rotate-3 max-w-md mx-auto md:max-w-none">
            <Image
              alt="Digital Agency Team Work"
              className="w-full h-full object-cover"
              src={HomeHero}
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-primary-container/10 mix-blend-multiply"></div>
          </div>
          <div className="absolute -bottom-10 -left-10 bg-on-background text-white p-8 rounded-xl max-w-xs shadow-2xl hidden lg:block">
            <h4 className="font-bold text-xl mb-2">
              E-commerce brands are invisible.
            </h4>
            <p className="text-sm text-white/70">
              We help e-commerce brands get found on Google AND AI search before
              their competitors do — with results you can measure in 90 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
