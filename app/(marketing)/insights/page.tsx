import InsightHero from "@/components/insights/InsightHero";
import FeaturedPerspective from "@/components/insights/FeaturedPerspective";
import ArchiveSection from "@/components/insights/ArchiveSection";
import CategoriesSection from "@/components/insights/CategoriesSection";
import Footer from "@/components/sections/Footer";
import CtaClose from "@/components/insights/CtaClose";
import QuotesSection from "@/components/insights/QuotesSection";
import Newsletter from "@/components/sections/Newsletter";
import { getInsights } from "@/lib/api/content";

export default async function page() {
  const insights = await getInsights();
  console.log(insights);

  return (
    <main>
      <InsightHero />
      <FeaturedPerspective />
      <ArchiveSection initialInsights={insights} />
      <CategoriesSection />
      <QuotesSection />
      <Newsletter />
      <CtaClose />
      <Footer />
    </main>
  );
}
