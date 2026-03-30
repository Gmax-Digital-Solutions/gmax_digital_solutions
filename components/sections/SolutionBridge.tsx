const SolutionBridge = () => {
  return (
    <section className="relative bg-white pt-32 pb-24 px-8">
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('/images/solutions_bg_img.png')]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-surface-container-low p-12 rounded-2xl shadow-sm border border-outline-variant/20 -mt-32 relative z-10">
            <span className="text-[0.75rem] font-bold text-[#F84343] tracking-widest uppercase mb-4 block">Our Methodology</span>
            <h2 className="text-3xl font-black text-[#241E20] mb-8">The Blueprint for Authority</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">01</div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Architectural Audit</h4>
                  <p className="text-on-surface-variant text-sm mt-1">We dissect your current digital footprint to find structural leaks.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">02</div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Core Engineering</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Bespoke development focused on speed, SEO, and conversion.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">03</div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Expansion Phase</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Aggressive scaling through targeted digital advocacy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-4xl font-black text-[#241E20] mb-6 leading-tight">We bridge the gap between where you are and where the giants stand.</h3>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Most agencies focus on aesthetics. We focus on authority. Your digital presence shouldn't just look good—it should command the room.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#F84343]">check_circle</span>
                <span className="font-medium">Proprietary Gmax Analytics Engine</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#F84343]">check_circle</span>
                <span className="font-medium">24/7 Managed Performance Monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#F84343]">check_circle</span>
                <span className="font-medium">Editorial Content Strategy Team</span>
              </li>
            </ul>
            <button className="bg-[#241E20] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3">
              Secure Your Blueprint
              <span className="material-symbols-outlined">trending_up</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge;
