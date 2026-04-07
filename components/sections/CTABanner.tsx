"use client";

import FloatingLines from "../FloatingLines";
import posthog from "posthog-js";

const CTABanner = () => {
  return (
    <section className="relative flex bg-[#585DE1] py-20 px-8">
      <div className="max-w-4xl mx-auto text-center z-10 ">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Ready for a big solution?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join the 200+ businesses who transitioned from noise to authority with
          Gmax Digital.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/gmax-digital/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("Clicked Strategy Call", {
                source: "homepage-hero",
              })
            }
            className="bg-[#F84343] text-white px-10 py-5 rounded-lg font-black text-lg shadow-xl shadow-black/10"
          >
            Book A Free Strategy Call
          </a>
          <button className="bg-white text-[#241E20] px-10 py-5 rounded-lg font-black text-lg">
            Download Services Guide
          </button>
        </div>
      </div>
      <div className="h-full w-full absolute top-0 left-0">
        <FloatingLines
          linesGradient={["#464554", "#585DE1", "#201a1c"]}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>
    </section>
  );
};

export default CTABanner;
