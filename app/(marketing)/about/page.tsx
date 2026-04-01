import AboutHero from "@/components/about/AboutHero";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurPerspective from "@/components/about/OurPerspective";
import TeamSection from "@/components/about/TeamSection";
import TargetAudience from "@/components/about/TargetAudience";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import WorkingPhilosophy from "@/components/about/WorkingPhilosophy";
import OutcomesSection from "@/components/about/OutcomeSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhyChooseUs />
      <OurPerspective />
      <TeamSection />
      <TargetAudience />
      <WorkingPhilosophy />
      <OutcomesSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
