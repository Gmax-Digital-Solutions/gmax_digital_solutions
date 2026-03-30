const Footer = () => {
  return (
    <footer className="bg-[#241E20] text-white w-full relative">
      <div className="w-full px-8 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-black text-white uppercase tracking-tighter">Gmax Digital</div>
          <p className="text-white/40 max-w-xs text-sm font-inter leading-relaxed">
            Small Businesses. Big Solutions. We engineer digital growth through architectural design and strategy.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F84343]">Company</span>
            <a className="text-white/60 hover:text-white transition-all text-sm" href="#">About Us</a>
            <a className="text-white/60 hover:text-white transition-all text-sm" href="#">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F84343]">Resources</span>
            <a className="text-white/60 hover:text-white transition-all text-sm" href="#">Blog</a>
            <a className="text-white/60 hover:text-white transition-all text-sm" href="#">Guides</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/40 text-xs">© 2024 Gmax Digital. Small Businesses. Big Solutions.</div>
        <div className="flex gap-6">
          <a className="text-white/60 hover:text-white text-xs" href="#">Privacy Policy</a>
          <a className="text-white/60 hover:text-white text-xs" href="#">Terms of Service</a>
          <a className="text-white/60 hover:text-white text-xs" href="#">Cookie Settings</a>
          <a className="text-white/60 hover:text-white text-xs" href="#">Global Locations</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
