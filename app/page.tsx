import Image from "next/image";
import Hero from "@/components/sections/Hero";
import StatHook from "@/components/sections/StatHook";
import Services from "@/components/sections/Services";
import SolutionBridge from "@/components/sections/SolutionBridge";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full w-[100%] text-on-surface">
      <Hero />
      <StatHook />
      <Services />
      <SolutionBridge />
      <CaseStudies />
      <Newsletter />
      <CTABanner />
      <Footer />
    </div>
  );
}
