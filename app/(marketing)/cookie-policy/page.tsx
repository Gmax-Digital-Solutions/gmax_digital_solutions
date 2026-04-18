import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-on-background py-24 md:py-40">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-on-background to-secondary"></div>
            <div
              className="h-full w-full opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-secondary-fixed text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Cookie Policy
              </span>

              <h1 className="text-5xl md:text-7xl font-black text-on-primar leading-[1.1] tracking-tight mb-8">
                Transparent Tracking. <br />
                <span className="text-primary-fixed-dim">
                  Intentional Data Use.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-surface-variant leading-relaxed opacity-90 max-w-2xl">
                At Gmax Digital, we believe in clarity. We use cookies not to
                monitor, but to measure performance, refine our strategy, and
                provide a seamless architectural experience for your small
                business.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="editorial-grid">
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-sm font-bold tracking-widest text-on-surface-variant uppercase">
                  Foundation
                </h2>
              </div>

              <div className="col-span-12 md:col-span-8">
                <p className="text-2xl md:text-3xl font-light text-on-surface leading-tight mb-12">
                  Cookies are small text files that act as digital memory. They
                  help us remember your preferences and understand how you
                  interact with our solutions, ensuring every visit is more
                  relevant than the last.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-surface-container-low border-l-4 border-primary">
                    <h3 className="text-lg font-bold mb-3 text-primary">
                      Our Promise
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      We never sell your data. We use it exclusively to improve
                      the architecture of our services and your user experience.
                    </p>
                  </div>

                  <div className="p-8 bg-surface-container-low border-l-4 border-secondary">
                    <h3 className="text-lg font-bold mb-3 text-secondary">
                      Clarity First
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      No dense legal jargon. We explain what each cookie does
                      and why it's necessary for our partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">
                Our Tech Stack
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                A breakdown of the specific tracking technologies we utilize to
                maintain peak performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Essential */}
              <div className="bg-surface p-8 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className="material-symbols-outlined text-primary mb-6"
                  style={{ fontSize: 40 }}
                >
                  lock
                </span>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  Essential Cookies
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Critical for site security and navigation. Without these, our
                  portal cannot function correctly.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Category: Mandatory
                </div>
              </div>

              {/* Analytics */}
              <div className="bg-surface p-8 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className="material-symbols-outlined text-secondary mb-6"
                  style={{ fontSize: 40 }}
                >
                  analytics
                </span>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  Analytics Cookies
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  We use PostHog to understand user behavior, identifying
                  friction points to refine our interface.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Category: Performance
                </div>
              </div>

              {/* Functional */}
              <div className="bg-surface p-8 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className="material-symbols-outlined text-primary mb-6"
                  style={{ fontSize: 40 }}
                >
                  settings
                </span>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  Functional Cookies
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Remembering your choices, like language preferences or region,
                  to personalize your journey.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Category: Preference
                </div>
              </div>

              {/* Third Party */}
              <div className="bg-surface p-8 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className="material-symbols-outlined text-secondary mb-6"
                  style={{ fontSize: 40 }}
                >
                  extension
                </span>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  Third-Party Tools
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  External integrations like Calendly or Hubspot that enable
                  direct communication and scheduling.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Category: Integration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Bridge */}
        <section className="relative">
          <div className="h-48 bg-surface-container-low"></div>
          <div className="h-48 bg-on-background"></div>

          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="max-w-5xl w-full bg-surface-container-highest p-12 md:p-20 shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-on-surface leading-tight mb-6">
                    Why Intentional Tracking Matters.
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    Data without context is noise. We use cookies to gain the
                    context needed to build better digital solutions for small
                    businesses.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    [
                      "Performance Analysis",
                      "Real-time site health monitoring.",
                    ],
                    ["UX Optimization", "Streamlining user navigation flows."],
                    [
                      "Strategic Strategy",
                      "Informed decision-making for our roadmaps.",
                    ],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <div>
                        <span className="font-bold block text-primary">
                          {title}
                        </span>
                        <span className="text-sm text-on-surface-variant">
                          {desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Control Section */}
        <section className="py-24 bg-on-background text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="editorial-grid">
              <div className="col-span-12 md:col-span-5">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                  Take Command of Your Data.
                </h2>
                <p className="text-surface-variant opacity-80 leading-relaxed mb-10">
                  You have full control over your cookie preferences. Most
                  browsers allow you to refuse cookies through their settings
                  menu. Note that disabling certain cookies may impact the site
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
