import React from "react";

const CaseStudyGrid = () => {
  return (
    <section className="py-24 bg-surface text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-on-background">
            Selected Strategic Work
          </h2>
          <div className="h-1 w-20 bg-primary-container mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
            <div className="mb-6 overflow-hidden rounded-lg aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk57sNxxrvWJtYjagiXxj3AhJk2WKV8EfrrjVubzlCGwunZCY0Sluat0x4Al1_E5P78Ua7M6Lqw4Jh5M81fexZX4emY2u1mtaXh4iSJ_yQal2JTj5inEhujYzePN1LQDu0mFaZjIubGQRb0FtblffILtFhZbo8GcXjZ4v2hnGoQRCbFdUhzX8GVh4oEzhA9SPfuBHvChpkmYsrVNsn43j9KqE-4e1m2q_9CxFAONJVrwQsoz0bHfKy9SDk2tvvuvunvEdfxe9y36E"
                alt="Case study visual"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
              Positioning a product for stronger first-market perception
            </h3>

            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Focusing on product clarity, refined communication strategies, and
              ensuring direct market relevance for early traction.
            </p>

            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link"
            >
              Read Case Study
              <span className="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">
                chevron_right
              </span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
            <div className="mb-6 overflow-hidden rounded-lg aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0SafVpCippFvDvVIiifRBcZk_68vOt0TRnF87VMH9lnYNpXGVuSlnXpks0y_nB-IdhF6N3LEQgHG-PlzFYv25yDHZM202iIKEujrb32IkV453_7GZRq8arjbTu2bervtIEEkmSRiouucYt9eDeDYEWQhH6sP0-rDZUdVMBoRoZY1UONfSvQ5Y458-r3dNc3_XjyLKBmvpr4OLIkKXkCeJFD5i6E_saKOPDRBd-MAqLYR-tMAnrmSiUy2MS7pyG90aQlWNscKWeQA"
                alt="Case study visual"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
              Improving digital credibility before growth campaigns
            </h3>

            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Enhancing website trust through perception-driven design and
              building decision confidence for prospective clients.
            </p>

            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link"
            >
              Read Case Study
              <span className="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">
                chevron_right
              </span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
            <div className="mb-6 overflow-hidden rounded-lg aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgwYUeArhbvA7ocARDp8sRbAx_j-81Nxt_O0o9SZyTetm0AbNhyv3gNQSwVnQCA49yt10MF89fP2bolEXv0v--xUQJt9nrGfeFD9OYDEwvLhfuKtHJXwvl8cV251hh7kUVnhYVsJsaXNlrMHC6MjO2d1IayDLAhT4wMIkrfMZ92G8y-RYWw5J2UOOuWzo9548xXE6kGNoQwmfuVeBQQROViFIZ1mZ0tzLgsOAodhOlJ5yetRHQOhKZFcSsfnD1Q8h_H0MS0omoW4"
                alt="Case study visual"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
              Clarifying service value for early-stage growth
            </h3>

            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Defining offer clarity and strategic messaging to ensure
              conversion readiness before significant investment.
            </p>

            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link"
            >
              Read Case Study
              <span className="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">
                chevron_right
              </span>
            </a>
          </div>

          {/* Card 4 */}
          <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
            <div className="mb-6 overflow-hidden rounded-lg aspect-video">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYbPAKrPl4DCZbKrW3vdXMuW9lax6_4W3imqL6m9tseyHQOMCPlXr7lN5TiMiBdywB-waMHSNUYADjUOqHS0_oIxAnFy3lA40wvNNqpZuk0WGqjfij_9uVGaz_mtV9SbpVcWquN2RsSxf50NoXZgrO86n81x-zBAYziS_KENSmBQimoShb3JoZs3NhhsEvTb2LzU41drolUDHRTxQkiE4kk3Ci27Okpr4wjjf-XMvZbzvpELUzrc6n3VxEs16_GzuuOLFtEwXEbfw"
                alt="Case study visual"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
              Strengthening how businesses present value online
            </h3>

            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Building trust architecture and solid digital structure to
              professionalize a brand's online presence.
            </p>

            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link"
            >
              Read Case Study
              <span className="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">
                chevron_right
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
