export default function InsightsPage() {
  return (
    <div className="px-12 py-10 max-w-7xl mx-auto bg-background">
      {/* Editorial Header Section */}
      <section className="mb-12 text-on-surface-variant">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-secondary font-bold text-[0.65rem] tracking-[0.2em] uppercase">
              Intelligence Portal
            </span>

            <h1 className="text-5xl font-black tracking-tighter leading-none text-on-background">
              Strategic <br />
              Authority <span className="text-primary">Insights.</span>
            </h1>

            <p className="text-on-surface-variant max-w-md mt-4 text-lg leading-relaxed">
              High-impact analytics decoded to bridge the gap between small
              business data and enterprise-level solutions.
            </p>
          </div>

          {/* Filter Cluster */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer border-b-2 border-primary">
              <span className="text-xs font-bold tracking-widest uppercase">
                Category
              </span>
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </div>

            <div className="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
                Date
              </span>
              <span className="material-symbols-outlined text-sm text-stone-500">
                calendar_month
              </span>
            </div>

            <div className="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
                Metric
              </span>
              <span className="material-symbols-outlined text-sm text-stone-500">
                bar_chart
              </span>
            </div>

            <button className="bg-on-background text-white p-2 px-3 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                filter_list
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Card */}
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="bg-secondary text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                High Impact
              </span>

              <span className="text-stone-400 text-sm font-medium">
                May 24, 2024
              </span>
            </div>

            <h3 className="text-on-surface text-4xl font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors">
              Positioning Drift Analysis
            </h3>

            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-12">
              Tracking the deviation of brand messaging against competitive
              benchmarks over the Q2 cycle. Identifying 14% authority erosion in
              local search sectors.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-outline-variant/20">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                  Views
                </p>
                <p className="text-2xl font-black text-on-surface">12.4K</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                  Shares
                </p>
                <p className="text-2xl font-black text-on-surface">842</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                  Trust Score
                </p>

                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-primary">98%</p>
                  <span
                    className="material-symbols-outlined text-primary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blue Card */}
        <div className="bg-primary p-8 rounded-xl flex flex-col justify-between text-white group cursor-pointer">
          <div>
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">bolt</span>
            </div>

            <h4 className="text-2xl font-bold tracking-tight mb-2">
              Conversion Lift Strategy
            </h4>

            <p className="text-white/70 text-sm">
              Real-time engagement optimization based on user heatmaps.
            </p>
          </div>

          <div className="pt-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-4xl font-black">+22.4%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Avg. Lift
                </p>
              </div>

              <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                trending_up
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-container-highest rounded-xl p-8 group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">
              Engagement Report
            </span>
            <span className="text-on-surface-variant text-xs">
              May 21, 2024
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight mb-3 text-on-surface">
            SEO Semantic Cluster Evolution
          </h3>

          <p className="text-on-surface-variant text-sm mb-8">
            Shift in long-tail keyword relevance within the digital
            transformation vertical.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-8 shadow-sm group cursor-pointer border-t-4 border-secondary">
          <div className="flex justify-between items-start mb-6">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest text-on-surface">
              Critical Alert
            </span>
            <span className="text-on-surface-container text-xs">
              May 19, 2024
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight mb-3 text-on-surface">
            Bounce Rate Anomaly
          </h3>

          <p className="text-on-surface-variant text-sm mb-8">
            Unexpected 4% spike in mobile drop-offs across secondary service
            pages.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-surface-container rounded-xl p-8 group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <span className="text-stone-500 text-xs font-bold uppercase tracking-widest text-on-surface">
              Growth Metric
            </span>
            <span className="text-on-surface-container text-xs">
              May 18, 2024
            </span>
          </div>

          <h3 className="text-xl text-on-surface font-bold tracking-tight mb-3">
            Newsletter Retention Curve
          </h3>

          <p className="text-on-surface-variant text-sm mb-8">
            Subscriber behavior analysis following the Strategic Pivot campaign.
          </p>
        </div>
      </div>
    </div>
  );
}
