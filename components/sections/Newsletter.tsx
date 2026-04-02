import React from "react";
import BorderGlow from "../BorderGlow";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative bg-white pt-32 pb-48 overflow-hidden"
    >
      {/* Asymmetric Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-20">
          {/* Left Column */}
          <div className="md:w-3/5 space-y-12">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary flex items-center gap-3">
                <span className="h-px w-8 bg-primary"></span>
                The Digest
              </span>

              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface leading-[1.1]">
                Ideas that help businesses grow <br />
                <span className="text-zinc-400 font-light italic">
                  with more clarity
                </span>
              </h2>

              <p className="text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
                Occasional reflections on trust, positioning, digital clarity,
                and the small decisions that often shape growth.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/5 w-full">
            <BorderGlow
              edgeSensitivity={40}
              glowColor="40 80 80"
              backgroundColor="#fdf1f3"
              borderRadius={40}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={true}
              colors={["#484dd1", "#ba1a1a", "#201a1c"]}
            >
              <div className="p-10 md:p-14 rounded-xl space-y-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 4px 4px, #412830 2px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                <div className="relative space-y-8">
                  <div className="space-y-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-bold uppercase tracking-wider text-on-surface-variant"
                    >
                      Your Email
                    </label>

                    <div className="relative">
                      <input
                        id="email-address"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full bg-transparent border-b-2 border-outline-variant py-4 px-0 text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-primary-container text-on-primary py-5 px-8 rounded-lg text-lg font-bold tracking-tight flex items-center justify-between group hover:shadow-xl transition-all duration-300">
                    <span>Join the List</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>

                  <div className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-primary-container shrink-0"
                      style={{ fontVariationSettings: "'opsz' 20" }}
                    >
                      verified
                    </span>

                    <p className="text-sm text-on-surface-variant font-medium leading-tight">
                      No noise — just thoughtful ideas shared when they’re
                      genuinely worth your time.
                    </p>
                  </div>
                </div>
              </div>
            </BorderGlow>
            <div className="mt-8 flex items-center justify-end gap-4 text-outline/40">
              <span className="text-xs font-bold uppercase tracking-widest">
                Gmax Digital Private List
              </span>
              <span className="h-px w-12 bg-outline/20"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-50"></div>
    </section>
  );
};

export default Newsletter;
