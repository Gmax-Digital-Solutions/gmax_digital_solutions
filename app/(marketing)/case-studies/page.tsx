import CaseHero from "@/components/casestudies/CaseHero";
import CaseStudyGrid from "@/components/casestudies/CaseStudyGrid";
import FeaturedCase from "@/components/casestudies/FeaturedCase";
import SolutionBridge from "@/components/casestudies/SolutionBridge";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import React from "react";

const page = () => {
  return (
    <main>
      <CaseHero />
      <FeaturedCase />
      <CaseStudyGrid />
      <SolutionBridge />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default page;
