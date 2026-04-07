export type ContentBlock = {
  type: string;
  content: string;
};

export type Content = {
  id: string;
  content_type: "insight" | "case-study" | "report";
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: string;
  category: string;
  read_time?: string;
  client_name?: string;
  industry?: string;
  status: string;
  content_blocks: ContentBlock[];
};
