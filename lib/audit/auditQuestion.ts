export type Option = {
  value: string;
  title: string;
  description: string;
  icon: string;
};

export type Question = {
  key: string;
  step: number;
  total: number;
  title: string;
  subtitle: string;
  options: Option[];
  next: string;
  prev?: string;
};

export const auditQuestions: Question[] = [
  {
    key: "traffic_source",
    step: 1,
    total: 6,
    title: "Where do most of your customers currently come from?",
    subtitle:
      "Understanding your acquisition channels reveals growth dependency.",
    next: "/audit/q2",
    options: [
      {
        value: "referrals",
        title: "Referrals",
        description: "Word of mouth driven growth.",
        icon: "groups",
      },
      {
        value: "social",
        title: "Social Media",
        description: "Organic or paid social.",
        icon: "public",
      },
      {
        value: "ads",
        title: "Paid Ads",
        description: "Google, Meta, etc.",
        icon: "ads_click",
      },
      {
        value: "search",
        title: "Search (SEO)",
        description: "Google search traffic.",
        icon: "search",
      },
      {
        value: "unknown",
        title: "Not Sure",
        description: "No clear tracking.",
        icon: "help",
      },
    ],
  },

  {
    key: "ai_visibility",
    step: 2,
    total: 6,
    title: "How does your brand appear in AI tools like ChatGPT?",
    subtitle: "AI is becoming the new discovery layer.",
    prev: "/audit/q1",
    next: "/audit/q3",
    options: [
      {
        value: "high",
        title: "High Visibility",
        description: "Frequently cited with strong detail.",
        icon: "visibility",
      },
      {
        value: "inconsistent",
        title: "Inconsistent",
        description: "Appears sometimes but weak.",
        icon: "cloud_sync",
      },
      {
        value: "none",
        title: "Not Visible",
        description: "Not recognized by AI.",
        icon: "search_off",
      },
      {
        value: "incorrect",
        title: "Incorrect Info",
        description: "AI gives wrong data.",
        icon: "error",
      },
    ],
  },

  {
    key: "content_type",
    step: 3,
    total: 6,
    title: "What type of content do you publish?",
    subtitle: "Content structure determines AI understanding.",
    prev: "/audit/q2",
    next: "/audit/q4",
    options: [
      {
        value: "structured",
        title: "Structured Content",
        description: "Guides, FAQs, long-form.",
        icon: "article",
      },
      {
        value: "blog",
        title: "Occasional Blogs",
        description: "Some written content.",
        icon: "edit_note",
      },
      {
        value: "social",
        title: "Mostly Social",
        description: "Short-form posts.",
        icon: "share",
      },
      {
        value: "none",
        title: "No Content Strategy",
        description: "Nothing consistent.",
        icon: "block",
      },
    ],
  },

  {
    key: "intent_coverage",
    step: 4,
    total: 6,
    title: "Do you answer customer questions with your content?",
    subtitle: "Intent-driven content is key for AI.",
    prev: "/audit/q3",
    next: "/audit/q5",
    options: [
      {
        value: "extensive",
        title: "Extensively",
        description: "We cover most queries.",
        icon: "done_all",
      },
      {
        value: "some",
        title: "Some Coverage",
        description: "But not optimized.",
        icon: "check_circle",
      },
      {
        value: "little",
        title: "Very Little",
        description: "Minimal effort.",
        icon: "remove_circle",
      },
      {
        value: "none",
        title: "None",
        description: "No structured answers.",
        icon: "cancel",
      },
    ],
  },

  {
    key: "website_clarity",
    step: 5,
    total: 6,
    title: "How clear is your website messaging?",
    subtitle: "Clarity impacts both humans and AI.",
    prev: "/audit/q4",
    next: "/audit/q6",
    options: [
      {
        value: "clear",
        title: "Very Clear",
        description: "Instantly understandable.",
        icon: "visibility",
      },
      {
        value: "moderate",
        title: "Somewhat Clear",
        description: "Needs refinement.",
        icon: "tune",
      },
      {
        value: "confusing",
        title: "Confusing",
        description: "Hard to understand.",
        icon: "help",
      },
      {
        value: "none",
        title: "No Clear Message",
        description: "No positioning.",
        icon: "block",
      },
    ],
  },

  {
    key: "growth_bottleneck",
    step: 6,
    total: 6,
    title: "What is your biggest growth challenge?",
    subtitle: "This helps personalize your strategy.",
    prev: "/audit/q5",
    next: "/audit/loading",
    options: [
      {
        value: "traffic",
        title: "Getting Traffic",
        description: "Low visibility.",
        icon: "trending_up",
      },
      {
        value: "conversion",
        title: "Conversions",
        description: "Visitors don’t convert.",
        icon: "swap_vert",
      },
      {
        value: "competition",
        title: "Competition",
        description: "Hard to stand out.",
        icon: "groups",
      },
      {
        value: "strategy",
        title: "No Strategy",
        description: "Lack of direction.",
        icon: "route",
      },
    ],
  },
];
