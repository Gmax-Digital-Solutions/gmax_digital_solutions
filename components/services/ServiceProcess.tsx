const ServiceProcess = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-background mb-4">
            Service Process
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            A clear process designed to help businesses move from uncertainty to
            stronger digital execution.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-4 gap-12">
          <div className="relative">
            <div className="text-6xl font-black text-surface-container-highest mb-6">
              01
            </div>
            <h4 className="text-xl font-bold mb-2">Understand</h4>
            <p className="text-on-surface-variant text-sm">
              Deep dive into current bottlenecks and core business objectives.
            </p>
            <div className="hidden md:block absolute top-8 -right-6 text-primary/20">
              <span className="material-symbols-outlined text-4xl">
                arrow_forward
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="text-6xl font-black text-surface-container-highest mb-6">
              02
            </div>
            <h4 className="text-xl font-bold mb-2">Clarify</h4>
            <p className="text-on-surface-variant text-sm">
              Simplifying messaging and aligning strategy with market truth.
            </p>
            <div className="hidden md:block absolute top-8 -right-6 text-primary/20">
              <span className="material-symbols-outlined text-4xl">
                arrow_forward
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="text-6xl font-black text-surface-container-highest mb-6">
              03
            </div>
            <h4 className="text-xl font-bold mb-2">Build</h4>
            <p className="text-on-surface-variant text-sm">
              Executing digital assets and campaigns with precision.
            </p>
            <div className="hidden md:block absolute top-8 -right-6 text-primary/20">
              <span className="material-symbols-outlined text-4xl">
                arrow_forward
              </span>
            </div>
          </div>

          <div>
            <div className="text-6xl font-black text-surface-container-highest mb-6">
              04
            </div>
            <h4 className="text-xl font-bold mb-2">Strengthen</h4>
            <p className="text-on-surface-variant text-sm">
              Optimizing based on feedback to ensure long-term stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
