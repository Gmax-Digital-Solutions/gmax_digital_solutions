import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcess from "@/components/services/ServiceProcess";
import EngagementModels from "@/components/services/EngagementModels";
import Outcomes from "@/components/services/Outcomes";

const page = () => {
  return (
    <main>
      <ServiceHero />
      <ServiceOfferings />
      <ServiceProcess />
      <EngagementModels />
      <Outcomes />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default page;
