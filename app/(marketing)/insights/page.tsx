import InsightHero from "@/components/insights/InsightHero";
import FeaturedPerspective from "@/components/insights/FeaturedPerspective";
import ArchiveSection from "@/components/insights/ArchiveSection";
import CategoriesSection from "@/components/insights/CategoriesSection";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import CtaClose from "@/components/insights/CtaClose";
import QuotesSection from "@/components/insights/QuotesSection";

export default function page() {
  return (
    <main>
      <InsightHero />
      <FeaturedPerspective />
      <ArchiveSection />
      <CategoriesSection />
      <QuotesSection />
      <CtaClose />
      <Footer />
    </main>
  );
}
