import { getHomeCaseStudies } from "@/lib/api/content";
import Link from "next/link";

const CaseStudies = async () => {
  const studies = await getHomeCaseStudies();

  console.log(studies);
  if (studies.length === 0) {
    return (
      <div className="w-full text-center mx-auto py-24 px-6 bg-surface">
        <h2 className="text-4xl italic font-black text-surface-container-highest mb-6">
          Featured Case Studies temporarily unavailable. Please refresh page.
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#585DE1] font-bold tracking-[0.2em] text-xs uppercase block mb-2">
              Real E-Commerce Results
            </span>
            <h2 className="text-4xl font-black text-[#241E20]">
              E-commerce Brands Scaling with Gmax Digital
            </h2>
          </div>
          <Link
            href={`/case-studies`}
            className="hidden md:flex items-center gap-2 text-[#241E20] font-bold border-b-2 border-[#241E20] pb-1"
          >
            View All Cases
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt="Case Study 1"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={study.hero_image}
                />
                <div className="absolute top-4 left-4 bg-[#F84343] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  {study.category}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-[#241E20] mb-3">
                  {study.title}
                </h4>
                <p className="text-on-surface-variant mb-6">{study.subtitle}</p>
                <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                  <div>
                    <p className="text-xs uppercase font-bold text-outline">
                      {study.metrics[0].label}
                    </p>
                    <p className="text-xl font-black text-[#585DE1]">
                      {study.metrics[0].value}
                    </p>
                  </div>
                  <Link
                    href={`case-studies/${study.slug}`}
                    className="material-symbols-outlined text-[#241E20] group-hover:translate-x-2 transition-transform"
                  >
                    arrow_forward
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
