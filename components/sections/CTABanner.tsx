const CTABanner = () => {
  return (
    <section className="bg-[#585DE1] py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready for a big solution?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join the 200+ businesses who transitioned from noise to authority with Gmax Digital.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#F84343] text-white px-10 py-5 rounded-lg font-black text-lg shadow-xl shadow-black/10">Get Your Free Strategy Call</button>
          <button className="bg-white text-[#241E20] px-10 py-5 rounded-lg font-black text-lg">Download Services Guide</button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
