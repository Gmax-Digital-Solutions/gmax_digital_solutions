export type Option = {
  value: string;
  title: string;
  description: string;
  icon: string;
};

export type QuestionType = "options" | "url_input";

export type Question = {
  key: string;
  step: number;
  total: number;
  title: string;
  subtitle: string;
  type?: QuestionType; // defaults to "options"
  options?: Option[];
  placeholder?: string;
  helperText?: string;
  next: string;
  prev?: string;
};

export const TOTAL_STEPS = 7;

export const auditQuestions: Question[] = [
  {
    key: "traffic_source",
    step: 1,
    total: TOTAL_STEPS,
    title: "Where do most of your new customers currently come from?",
    subtitle:
      "Your primary acquisition channel reveals how dependent your growth is on a single source — and how exposed you are when it shifts.",
    next: "/audit/q2",
    options: [
      {
        value: "referrals",
        title: "Referrals & Word of Mouth",
        description:
          "Growth driven by existing customers recommending you. Organic but hard to scale predictably.",
        icon: "groups",
      },
      {
        value: "social",
        title: "Social Media",
        description:
          "Organic posts or paid social campaigns on platforms like Instagram, LinkedIn, or TikTok.",
        icon: "public",
      },
      {
        value: "ads",
        title: "Paid Search & Display Ads",
        description:
          "Google Ads, Meta Ads, or similar PPC. High control but spend-dependent.",
        icon: "ads_click",
      },
      {
        value: "search",
        title: "Organic Search (SEO)",
        description:
          "Traffic from Google rankings. Compounding returns over time but slow to build.",
        icon: "search",
      },
      {
        value: "unknown",
        title: "Not Sure / No Clear Tracking",
        description:
          "No analytics in place, or traffic sources aren't clearly attributed.",
        icon: "help",
      },
    ],
  },

  {
    key: "ai_visibility",
    step: 2,
    total: TOTAL_STEPS,
    title:
      "How does your brand appear when someone searches AI tools like ChatGPT or Perplexity?",
    subtitle:
      "AI is rapidly becoming the first point of discovery for buyers. How you show up — or don't — has compounding consequences on inbound demand.",
    prev: "/audit/q1",
    next: "/audit/q3",
    options: [
      {
        value: "high",
        title: "Frequently & Accurately Cited",
        description:
          "AI tools reference your brand by name, describe what you do correctly, and sometimes recommend you unprompted.",
        icon: "visibility",
      },
      {
        value: "inconsistent",
        title: "Inconsistent Mentions",
        description:
          "Appears sometimes but descriptions are vague, incomplete, or vary between queries.",
        icon: "cloud_sync",
      },
      {
        value: "none",
        title: "Largely Invisible",
        description:
          "AI tools don't seem to know your brand exists, even for directly relevant searches.",
        icon: "search_off",
      },
      {
        value: "incorrect",
        title: "Mentioned But With Wrong Info",
        description:
          "AI surfaces your brand but misrepresents your offering, pricing, or positioning.",
        icon: "error",
      },
    ],
  },

  {
    key: "content_type",
    step: 3,
    total: TOTAL_STEPS,
    title: "What best describes your current content strategy?",
    subtitle:
      "The format and depth of your content determines how well AI systems can understand, index, and cite your expertise.",
    prev: "/audit/q2",
    next: "/audit/q4",
    options: [
      {
        value: "structured",
        title: "Structured, In-Depth Content",
        description:
          "Long-form guides, FAQs, comparison pages, how-tos — content built to answer specific questions thoroughly.",
        icon: "article",
      },
      {
        value: "blog",
        title: "Occasional Blog Posts",
        description:
          "Some written content published irregularly. Topics are mixed and not systematically covering buyer questions.",
        icon: "edit_note",
      },
      {
        value: "social",
        title: "Primarily Short-Form Social",
        description:
          "Content lives mainly on social platforms. High volume but low AI indexability.",
        icon: "share",
      },
      {
        value: "none",
        title: "No Defined Content Strategy",
        description:
          "Nothing consistent. Content is ad-hoc or only exists as sales copy.",
        icon: "block",
      },
    ],
  },

  {
    key: "intent_coverage",
    step: 4,
    total: TOTAL_STEPS,
    title:
      "How well does your content address what your customers are actively searching for?",
    subtitle:
      "Intent-matched content is the single biggest driver of AI discoverability. AI tools prioritize sources that directly answer questions buyers are already asking.",
    prev: "/audit/q3",
    next: "/audit/q5",
    options: [
      {
        value: "extensive",
        title: "Extensively — We Map Content to Buyer Questions",
        description:
          "We research what questions our audience asks and publish content that answers them at each stage of the funnel.",
        icon: "done_all",
      },
      {
        value: "some",
        title: "Partially — Some Intent Coverage",
        description:
          "We address some common questions but haven't systematically mapped content to search intent.",
        icon: "check_circle",
      },
      {
        value: "little",
        title: "Minimal — Mostly Promotional",
        description:
          "Content focuses on features and announcements, not the questions buyers actually ask.",
        icon: "remove_circle",
      },
      {
        value: "none",
        title: "None — No Intent-Driven Content",
        description:
          "We haven't thought about content from the perspective of buyer search behavior.",
        icon: "cancel",
      },
    ],
  },

  {
    key: "website_clarity",
    step: 5,
    total: TOTAL_STEPS,
    title:
      "How clearly does your website communicate what you do and who you serve?",
    subtitle:
      "Website clarity directly impacts both conversion rates and AI comprehension. If a visitor can't understand your offer in 5 seconds, neither can an AI model.",
    prev: "/audit/q4",
    next: "/audit/q6",
    options: [
      {
        value: "clear",
        title: "Crystal Clear — No Ambiguity",
        description:
          "Our homepage immediately communicates who we serve, what problem we solve, and what makes us different.",
        icon: "visibility",
      },
      {
        value: "moderate",
        title: "Somewhat Clear — Needs Refinement",
        description:
          "The message is there but takes some reading to grasp. Jargon or assumptions create friction.",
        icon: "tune",
      },
      {
        value: "confusing",
        title: "Unclear — Visitors Often Misunderstand",
        description:
          "Feedback suggests people don't immediately 'get it.' High bounce rates or confused prospects.",
        icon: "help",
      },
      {
        value: "none",
        title: "No Clear Positioning",
        description:
          "The site doesn't have a defined message or point of view. Everything is generic.",
        icon: "block",
      },
    ],
  },

  {
    key: "growth_bottleneck",
    step: 6,
    total: TOTAL_STEPS,
    title: "What is holding your growth back most right now?",
    subtitle:
      "Identifying your primary constraint lets us focus the audit on what will move the needle — not just what's easy to fix.",
    prev: "/audit/q5",
    next: "/audit/q7",
    options: [
      {
        value: "traffic",
        title: "Not Enough Traffic or Visibility",
        description:
          "The top of the funnel is dry. Not enough people are finding us to begin with.",
        icon: "trending_up",
      },
      {
        value: "conversion",
        title: "Traffic Exists But Visitors Don't Convert",
        description:
          "We get visitors, but they don't take action. Something breaks between interest and intent.",
        icon: "swap_vert",
      },
      {
        value: "competition",
        title: "Losing Ground to Competitors",
        description:
          "Competitors seem to be winning deals, rankings, or AI visibility that we should own.",
        icon: "groups",
      },
      {
        value: "strategy",
        title: "Lack of a Coherent Strategy",
        description:
          "No clear plan for content, SEO, or positioning. Effort is scattered across channels.",
        icon: "route",
      },
    ],
  },

  {
    key: "website_url",
    step: 7,
    total: TOTAL_STEPS,
    type: "url_input",
    title: "Enter your website URL to unlock your full competitive analysis.",
    subtitle:
      "We'll use your URL to benchmark your AI visibility against a key competitor. The competitor field is optional — leave it blank and we'll identify one for you.",
    prev: "/audit/q6",
    next: "/audit/loading",
    placeholder: "https://yourwebsite.com",
    helperText:
      "We only use your URL for analysis — it's never stored or shared.",
  },
];
