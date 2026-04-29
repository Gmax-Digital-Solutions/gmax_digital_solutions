import React from "react";
import HeroSection from "@/components/audit/sections/HomeHero";
import CoreFrameworkSection from "@/components/audit/sections/keyPillars";
import SolutionBridge from "@/components/audit/sections/SolutionsBridge";
import AuditFooter from "@/components/layout/AuditFooter";
import AuditNavbar from "@/components/layout/AuditNavbar";

const page = () => {
  return (
    <>
      <AuditNavbar />
      <HeroSection />
      <CoreFrameworkSection />
      <SolutionBridge />
      <AuditFooter />
    </>
  );
};

export default page;
