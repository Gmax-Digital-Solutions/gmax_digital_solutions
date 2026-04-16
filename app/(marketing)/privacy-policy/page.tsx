"use client";

import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="pt-10 md:pt-15 text-on-surface-variant">
        {/* HERO */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-on-background">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #585DE1 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary-fixed-dim text-xs font-bold tracking-[0.2em] uppercase rounded mb-5">
                Privacy Policy
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                Your Data, Handled With Intentionality
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                At Gmax Digital, transparency is not a compliance requirement—it
                is a foundational pillar of trust. We treat your operational
                data with the same rigor we apply to our own.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* MAIN CONTENT */}
              <div className="md:col-span-8">
                <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-4">
                  Our Commitment
                </h2>

                <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                  Privacy isn&apos;t just about legal jargon; it&apos;s about
                  respecting the boundaries of the digital partnerships we
                  build. When you work with Gmax Digital, you aren&apos;t just a
                  &quot;user&quot;—you are a partner.
                </p>

                {/* TRUST BLOCK */}
                <div className="bg-surface-container-low p-6 md:p-10 rounded-xl mb-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary opacity-5 rounded-full -mr-12 -mt-12" />

                  <div className="flex items-start md:items-center gap-5">
                    <span
                      className="material-symbols-outlined text-secondary text-4xl md:text-5xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      shield_lock
                    </span>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-on-surface mb-1">
                        The Gmax Guarantee
                      </h3>
                      <p className="text-xl md:text-2xl font-medium text-on-surface">
                        We do not sell or misuse your data. Ever.
                      </p>
                    </div>
                  </div>
                </div>

                {/* POLICY SECTIONS */}
                <div className="space-y-20">
                  {/* COLLECT */}
                  <div id="collect" className="scroll-mt-28">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-5">
                      01. Information We Collect
                    </h3>

                    <p className="text-sm md:text-base text-on-surface-variant mb-6">
                      To provide high-end consultancy services, we collect
                      minimal but necessary data:
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4">
                      <li className="p-5 bg-surface-container rounded-lg flex gap-3">
                        <span className="material-symbols-outlined text-primary">
                          person
                        </span>
                        <div>
                          <span className="font-semibold block text-sm mb-1">
                            Direct Identification
                          </span>
                          <span className="text-xs text-on-surface-variant">
                            Name, email, and contact details.
                          </span>
                        </div>
                      </li>

                      <li className="p-5 bg-surface-container rounded-lg flex gap-3">
                        <span className="material-symbols-outlined text-primary">
                          business_center
                        </span>
                        <div>
                          <span className="font-semibold block text-sm mb-1">
                            Business Context
                          </span>
                          <span className="text-xs text-on-surface-variant">
                            Industry, size, and digital challenges.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* USE */}
                  <div id="use" className="scroll-mt-28">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-5">
                      02. How We Use Your Information
                    </h3>

                    <p className="text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
                      Data is used strictly for service optimization,
                      communication, and improving user experience.
                    </p>

                    <div className="bg-surface-container-high p-6 rounded-xl border-l-4 border-primary">
                      <span className="block font-semibold text-sm mb-1 italic">
                        Proactive Protection
                      </span>
                      <p className="text-xs text-on-surface-variant">
                        Access is restricted to team members directly assigned
                        to your account.
                      </p>
                    </div>
                  </div>

                  {/* ECOSYSTEM */}
                  <div id="ecosystem" className="scroll-mt-28">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-5">
                      03. Digital Partners &amp; Ecosystem
                    </h3>

                    <p className="text-sm md:text-base text-on-surface-variant mb-6">
                      We integrate trusted third-party tools for seamless
                      service delivery.
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface-container-lowest rounded-xl">
                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                          <div className="w-10 h-10 bg-zinc-100 rounded flex items-center justify-center text-xs font-bold">
                            PH
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">PostHog</h4>
                            <p className="text-xs text-on-surface-variant">
                              Behavior analytics
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] px-3 py-1 bg-surface-container rounded-full">
                          Anonymized
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SECURITY */}
                  <div id="security" className="scroll-mt-28">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-5">
                      04. Security Measures
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-sm">
                            lock
                          </span>
                          Encryption
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          256-bit SSL encryption protects all data in transit.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-sm">
                            delete_forever
                          </span>
                          Data Retention
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Data is retained only as necessary.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHTS */}
                  <div id="rights" className="border-t pt-12 scroll-mt-28">
                    <h3 className="text-xl font-bold text-on-surface mb-4">
                      Your Rights
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Access",
                        "Correction",
                        "Deletion",
                        "Withdraw Consent",
                      ].map((right) => (
                        <span
                          key={right}
                          className="px-3 py-1 text-xs border rounded-lg"
                        >
                          {right}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <aside className="hidden md:block md:col-span-4 sticky top-28">
                <div className="bg-surface-container-lowest p-6 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-5">
                    On This Page
                  </h4>

                  <nav className="space-y-3 text-sm">
                    <a
                      href="#collect"
                      className="block text-zinc-400 hover:text-primary"
                    >
                      Collection
                    </a>
                    <a
                      href="#use"
                      className="block text-zinc-400 hover:text-primary"
                    >
                      Usage
                    </a>
                    <a
                      href="#ecosystem"
                      className="block text-zinc-400 hover:text-primary"
                    >
                      Third Parties
                    </a>
                    <a
                      href="#security"
                      className="block text-zinc-400 hover:text-primary"
                    >
                      Security
                    </a>
                    <a
                      href="#rights"
                      className="block text-zinc-400 hover:text-primary"
                    >
                      Rights
                    </a>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
