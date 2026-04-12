import Image from "next/image";
import Hero from "@/components/sections/Hero";
import StatHook from "@/components/sections/StatHook";
import Services from "@/components/sections/Services";
import SolutionBridge from "@/components/sections/SolutionBridge";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import Newsletter from "@/components/sections/Newsletter";
import TestimonialSection from "@/components/sections/Testmonials";
import { getTestimonials } from "@/lib/api/content";

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <div className="flex flex-1 flex-col h-full w-[100%] text-on-surface">
      <Hero />
      <StatHook />
      <Services />
      <SolutionBridge />
      <CaseStudies />
      <TestimonialSection testimonialData={testimonials} />
      <Newsletter />
      <CTABanner />
      <Footer />
    </div>
  );
}
