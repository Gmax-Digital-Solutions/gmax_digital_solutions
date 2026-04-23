type Quote = {
  text: string;
  author: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  quote: Quote;
};

export type Insight = {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  hero_image: string;
  theme: string;
  content: ContentSection;
  key_takeaways: string[];
  author_name: string;
  author_role: string;
  read_time: number;
  featured: boolean;
  published: boolean;
  published_at: string;
};
