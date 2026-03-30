const CaseStudies = () => {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#585DE1] font-bold tracking-[0.2em] text-xs uppercase block mb-2">Success Stories</span>
            <h2 className="text-4xl font-black text-[#241E20]">Proven Outcomes</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#241E20] font-bold border-b-2 border-[#241E20] pb-1">
            View All Cases
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white rounded-xl overflow-hidden shadow-sm group">
            <div className="relative overflow-hidden aspect-video">
              <img
                alt="Case Study 1"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_z9U38PbxnsDq6-0eA1dy84aYzBXva5zzgO-O20y65vjxjfuAjDKAn3lepyO4gaICWRt900fughqwuoiLZmK7n3bHburbPbeWBbbufT-tEs2XGW1hsqcpq74DjQzGer6nL8nOs5vJlNB_4TAwA5oj02Bz5dB1Tx8O7UJtQVcpoSD-D-sb7zUwS0UehxhSa-BcPoIO44V4S39QjLuqCGShvpCWhWJ2nbfLPUQZ-Wlur2ruudyZfbOYK4N-x0kgPd3baGBflr8sP64"
              />
              <div className="absolute top-4 left-4 bg-[#F84343] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">FinTech</div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-black text-[#241E20] mb-3">Nebula Systems</h4>
              <p className="text-on-surface-variant mb-6">Redefining digital banking for the next generation of European entrepreneurs.</p>
              <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                <div>
                  <p className="text-xs uppercase font-bold text-outline">Growth</p>
                  <p className="text-xl font-black text-[#585DE1]">+210%</p>
                </div>
                <span className="material-symbols-outlined text-[#241E20] group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl overflow-hidden shadow-sm group">
            <div className="relative overflow-hidden aspect-video">
              <img
                alt="Case Study 2"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGRwPJt3GOQI0IqyjML-xyk2QbhDFRzmv4KsIh7jKQIV34txXowpg424QG3hlrbHDfTY-uftwp-vX5NiBaT0oMI-Owbi3xveHRPyGiEnrZCgdvT9MMnvXLfoX6bAUEMRypFIxR6MLG3OsRKaiJ7fuG0a0ff3jtV_ZOnNZSX65Id_3H56l5dTeEPS3ijdApq7JumBkyee0I4XCC4KlFZwkEwZlcUU8rZmXXkWR63mJ0mIHYx-zXs94pqg5-ve7zYckr1U9Fy3GjejY"
              />
              <div className="absolute top-4 left-4 bg-[#F84343] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Retail</div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-black text-[#241E20] mb-3">Vanguard Goods</h4>
              <p className="text-on-surface-variant mb-6">Transitioning a heritage brand into a high-conversion e-commerce powerhouse.</p>
              <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                <div>
                  <p className="text-xs uppercase font-bold text-outline">Revenue</p>
                  <p className="text-xl font-black text-[#585DE1]">$4.2M/yr</p>
                </div>
                <span className="material-symbols-outlined text-[#241E20] group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
