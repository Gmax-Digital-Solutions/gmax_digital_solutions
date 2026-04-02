import { CheckCircle } from "lucide-react";

const SolutionBridge = () => {
  return (
    <section className="relative bg-white pt-32 pb-24 px-8">
      <div className="absolute top-0 left-0 w-full h-16 bg-surface-container-low"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-surface-container-low p-12 rounded-2xl shadow-sm border border-outline-variant/20 -mt-32 relative z-10">
            <span className="text-[0.75rem] font-bold text-[#F84343] tracking-widest uppercase mb-4 block">
              Our Strategic Process
            </span>
            <h2 className="text-3xl font-black text-[#241E20] mb-8">
              Our 4-step Blueprint Structure
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Discover</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    We understand your business, market realities, audience
                    behavior, and growth barriers.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Position</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    We define messaging, value clarity, and strategic direction
                    so your business becomes easier to trust and easier to
                    choose.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Build</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    We create the digital assets, systems, and experiences that
                    support credibility and conversion.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-[#241E20]">Grow</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    We help strengthen visibility, engagement, and long-term
                    relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-4xl font-black text-[#241E20] mb-6 leading-tight">
              Bridging the gap between what you build and what the market is
              ready to embrace.
            </h3>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Success rarely depends on product quality alone, it depends on how
              clearly your value fits real demand, real users, and real market
              expectations.
            </p>
            <ul className="space-y-4 mb-10 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Identify where market demand and product value disconnect
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Refine positioning so your offer becomes easier to trust
                </span>
              </li>
              {/* <li className="flex items-center gap-3">
                <CheckCircle size={24} className="text-[#F84343] flex-shrink-0" />
                <span className="font-medium"></span>
              </li> */}
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Build digital infrastructure that supports credibility
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={24}
                  className="text-[#F84343] flex-shrink-0"
                />
                <span className="font-medium">
                  Create growth foundations designed for long-term relevance
                </span>
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
