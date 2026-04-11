type Metric = {
  label: string;
  value: string;
  description: string;
};

type CaseInsight = {
  title: string;
  description: string;
};

type Section = {
  title: string;
  body: string[];
};

export type CaseStudy = {
  excerpt: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  metrics: Metric[];
  hero_image: string;
  insights: CaseInsight[];
  deliverables: string[];
  sections: Section[];
  transformation: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
};
