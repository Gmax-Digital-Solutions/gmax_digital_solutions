import InsightHero from "@/components/insights/InsightHero";
import FeaturedPerspective from "@/components/insights/FeaturedPerspective";
import ArchiveSection from "@/components/insights/ArchiveSection";
import CategoriesSection from "@/components/insights/CategoriesSection";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function page() {
  return (
    <main>
      <InsightHero />
      <FeaturedPerspective />
      <ArchiveSection />
      <CategoriesSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
