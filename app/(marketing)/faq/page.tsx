import FAQCTA from "@/components/faq/FaqCta";
import FaqHero from "@/components/faq/FaqHero";
import FaqList from "@/components/faq/FaqList";
import FAQQuote from "@/components/faq/FaqQuote";
import FAQVisual from "@/components/faq/FaqVisual";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <main>
      <FaqHero />
      <FaqList />
      <FAQQuote />
      <FAQCTA />
      <FAQVisual />
      <Footer />
    </main>
  );
};

export default page;
