type Quote = {
  text: string;
  author?: string;
};

export type SubSection = {
  subheading: string; // renders as <h3>
  paragraphs: string[];
};

export type ContentSection = {
  heading: string; // renders as <h2>
  intro_paragraphs?: string[]; // paragraphs before any subsections
  subsections?: SubSection[]; // optional <h3>-level blocks
  quote?: Quote; // optional pull-quote after subsections
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
  content: ContentSection[]; // ← now an array of sections
  key_takeaways: string[];
  author_name: string;
  author_role: string;
  read_time: number;
  featured: boolean;
  published: boolean;
  published_at: string;
};
