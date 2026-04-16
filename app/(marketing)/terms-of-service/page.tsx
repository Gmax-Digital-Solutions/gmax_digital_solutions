import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import React from "react";

const TermsPage = () => {
  return (
    <>
      <main className="pt-20 md:pt-28 text-on-surface-variant">
        {/* HERO */}
        <header className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-24">
          <div className="inline-block px-3 py-1 bg-surface-container text-primary font-bold text-[10px] tracking-[0.15em] uppercase rounded-full mb-5">
            Terms of Service
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] font-black text-[#241E20] tracking-tight mb-6">
            Clear Terms.
            <br className="hidden sm:block" />
            Strong Partnerships.
          </h1>

          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Our engagement is built on transparency, mutual protection, and a
            shared commitment to digital excellence.
          </p>
        </header>

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-24">
          <div className="bg-surface-container-low p-6 md:p-10 rounded-xl border-l-4 border-primary">
            <p className="text-base md:text-lg leading-relaxed text-on-surface italic">
              "At Gmax Digital, we believe the best work happens when
              expectations are crystal clear. These terms are the blueprint for
              our collaboration."
            </p>
          </div>
        </section>

        {/* CORE */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 md:space-y-32 mb-24 md:mb-32">
          {/* SECTION */}
          {[
            {
              number: "01",
              title: "Services Overview",
              content: (
                <>
                  <p className="text-base md:text-lg font-medium text-on-surface">
                    We provide architectural authority through three primary
                    pillars:
                  </p>
                  <ul className="space-y-4 mt-4">
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary">
                        architecture
                      </span>
                      <div>
                        <strong className="block text-on-surface">
                          Digital Strategy
                        </strong>
                        <span className="text-sm">
                          High-level planning and positioning.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary">
                        settings_input_component
                      </span>
                      <div>
                        <strong className="block text-on-surface">
                          Infrastructure
                        </strong>
                        <span className="text-sm">
                          Web systems and automation stacks.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary">
                        record_voice_over
                      </span>
                      <div>
                        <strong className="block text-on-surface">
                          Strategic Advisory
                        </strong>
                        <span className="text-sm">
                          Ongoing consulting and optimization.
                        </span>
                      </div>
                    </li>
                  </ul>
                </>
              ),
            },
            {
              number: "02",
              title: "Engagement Model",
              content: (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-surface-container p-6 md:p-8 rounded-xl">
                    <h3 className="font-bold mb-2">Project-Based</h3>
                    <p className="text-sm text-on-surface-variant">
                      Defined scope with clear deliverables.
                    </p>
                  </div>
                  <div className="bg-surface-container p-6 md:p-8 rounded-xl">
                    <h3 className="font-bold mb-2">Retainer-Based</h3>
                    <p className="text-sm text-on-surface-variant">
                      Long-term strategic partnership.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              number: "03",
              title: "Responsibilities",
              content: (
                <div className="space-y-4">
                  {[
                    "Provide feedback within 48–72 hours",
                    "Provide access to assets and systems",
                    "Assign a single point of contact",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 bg-white border rounded-lg"
                    >
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              number: "04",
              title: "Payments",
              content: (
                <div className="space-y-4 text-sm text-on-surface-variant">
                  <p>
                    <strong className="text-on-surface">Billing:</strong> 50%
                    upfront, 50% completion.
                  </p>
                  <p>
                    <strong className="text-on-surface">Late Fees:</strong> 5%
                    after 15 days.
                  </p>
                </div>
              ),
            },
            {
              number: "05",
              title: "Intellectual Property",
              content: (
                <p className="text-sm text-on-surface-variant">
                  Ownership transfers upon full payment. Gmax retains internal
                  frameworks and systems.
                </p>
              ),
            },
          ].map((section) => (
            <div
              key={section.number}
              className="grid md:grid-cols-12 gap-8 md:gap-16"
            >
              <div className="md:col-span-4">
                <span className="text-primary font-black text-3xl md:text-4xl opacity-20">
                  {section.number}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-[#241E20] mt-3 uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>

              <div className="md:col-span-8">{section.content}</div>
            </div>
          ))}

          {/* LEGAL */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t">
            {[
              {
                title: "Confidentiality",
                text: "All shared data remains confidential.",
              },
              {
                title: "Liability",
                text: "Limited to fees paid.",
              },
              {
                title: "Termination",
                text: "30 days written notice required.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-xs uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
