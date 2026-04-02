// components/FaqHero.js
export default function FaqHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 max-w-4xl">
        <span className="inline-block text-secondary font-bold tracking-widest uppercase text-xs">
          FAQ
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-on-background">
          Questions businesses often ask before moving forward
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-2xl">
          Strategic work usually begins with clarity, and these answers help
          explain how engagements are approached.
        </p>
        <a
          href="#faq-list"
          className="mt-4 inline-block text-primary font-semibold hover:underline"
        >
          See all questions
        </a>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container to-transparent blur-3xl"></div>
    </section>
  );
}
