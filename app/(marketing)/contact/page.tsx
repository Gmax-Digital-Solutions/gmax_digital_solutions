import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactExpectation from "@/components/contact/ContactExpectation";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactExpectation />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default page;
