"use client";

import BorderGlow from "../BorderGlow";
import { useNewsletter } from "@/hooks/useNewsletter";

const Footer = () => {
  const { formData, setFormData, errors, handleSubmit, submitted, loading } =
    useNewsletter();

  return (
    <footer className="bg-[#241E20] text-white w-full relative">
      <div className="w-full px-8 py-16 flex flex-col lg:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        <div className="space-y-4 md:mt-8">
          <div className="text-lg font-black text-white uppercase tracking-tighter">
            Gmax Digital
          </div>
          <p className="text-white/40 max-w-xs text-sm font-inter leading-relaxed">
            Small Businesses. Big Solutions. We engineer digital growth through
            architectural design and strategy.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:mt-8 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F84343]">
              Home
            </span>
            <a
              className="text-white/60 hover:text-white transition-all text-sm"
              href="about"
            >
              About Us
            </a>
            <a
              className="text-white/60 hover:text-white transition-all text-sm"
              href="services"
            >
              Services
            </a>
            <a
              className="text-white/60 hover:text-white transition-all text-sm"
              href="contact"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F84343]">
              Resources
            </span>
            <a
              className="text-white/60 hover:text-white transition-all text-sm"
              href="insights"
            >
              Blog
            </a>
            <a
              className="text-white/60 hover:text-white transition-all text-sm"
              href="faq"
            >
              FAQ
            </a>
          </div>
        </div>
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#060010"
          borderRadius={28}
          glowRadius={40}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={["#484dd1", "#ba1a1a", "#38bdf8"]}
        >
          {/* footer newsletter */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm px-8 py-12 rounded-xl"
          >
            <h3 className="text-xl font-black text-white mb-3">
              Subscribe to Our Newsletter
            </h3>
            {submitted && (
              <div className="text-green-800 px-4 py-3 rounded mb-4">
                Successfully subscribed to the newsletter!
              </div>
            )}
            {errors.api && (
              <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">
                {errors.api[0]}
              </div>
            )}
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-inter">
              Stay updated with our latest insights. No spam. Only
              high-conviction perspectives for builders.
            </p>
            <input
              type="text"
              placeholder="Enter your first name (optional)"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              value={formData.first_name || ""}
              className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-[#F84343] focus:outline-none transition-colors mb-3"
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-[#F84343] focus:outline-none transition-colors mb-3"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F84343] text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-[#F84343]/90 transition-colors"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </BorderGlow>
      </div>
      <div className="border-t border-white/5 px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/40 text-xs">
          © 2026 Gmax Digital. Small Businesses. Big Solutions.
        </div>
        <div className="flex gap-6">
          <a
            href="privacy-policy"
            className="text-white/60 hover:text-white text-xs"
          >
            Privacy Policy
          </a>
          <a
            href="terms-of-service"
            className="text-white/60 hover:text-white text-xs"
          >
            Terms of Service
          </a>
          <a
            href="cookie-settings"
            className="text-white/60 hover:text-white text-xs"
          >
            Cookie Settings
          </a>
          <a
            href="global-locations"
            className="text-white/60 hover:text-white text-xs"
          >
            Global Locations
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
