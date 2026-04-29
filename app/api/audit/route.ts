// app/api/audit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;

interface CompetitorAnalysis {
  competitor_url: string;
  competitor_name: string;
  competitive_score: number;
  their_strengths: string[];
  your_advantages: string[];
  gaps_to_close: string[];
  verdict: string;
}

interface AuditResult {
  score: number;
  summary: string;
  strengths: string[];
  gaps: string[];
  opportunities: string[];
  quick_wins: string[];
  long_term: string[];
  visibility_outlook: string;
  competitor_analysis?: CompetitorAnalysis;
}

export async function POST(req: NextRequest) {
  try {
    const answers = await req.json();

    const {
      website_url,
      competitor_url,
      traffic_source,
      ai_visibility,
      content_type,
      intent_coverage,
      website_clarity,
      growth_bottleneck,
    } = answers;

    const hasCompetitor = !!(competitor_url || website_url);

    const prompt = `
You are a senior AI Visibility & Growth Strategist. A business has just completed an audit questionnaire. Produce a rigorous, specific, and actionable audit report.
 
Return ONLY valid JSON — no markdown, no backticks, no explanation before or after.
 
${
  hasCompetitor
    ? `
COMPETITOR ANALYSIS INSTRUCTIONS:
The user's website: ${website_url || "not provided"}
Competitor website: ${competitor_url || "identify one based on their industry context from the answers below"}
 
Produce a realistic competitor comparison. If competitor_url is not provided, infer a plausible industry competitor based on their answers and state their domain in competitor_url.
`
    : ""
}
 
REQUIRED JSON FORMAT:
{
  "score": <number 0–100>,
  "summary": "<2–3 sentence executive summary. Be specific about their situation — reference their traffic source, AI visibility status, and content posture.>",
  "strengths": ["<specific strength based on answers>", "<strength>"],
  "gaps": ["<concrete gap — name the specific problem>", "<gap>", "<gap>"],
  "opportunities": ["<actionable opportunity — give a specific tactic, not a vague directive>", "<opportunity>", "<opportunity>"],
  "quick_wins": ["<something achievable in 30 days>", "<quick win>"],
  "long_term": ["<6–12 month strategic play>", "<long term>"],
  "visibility_outlook": "<one sentence forward-looking statement about AI visibility trajectory>",
  ${
    hasCompetitor
      ? `"competitor_analysis": {
    "competitor_url": "<the competitor domain>",
    "competitor_name": "<clean brand name>",
    "competitive_score": <number 0–100, their estimated AI visibility score>,
    "their_strengths": ["<what the competitor does well — be specific>", "<strength>"],
    "your_advantages": ["<where this user has or could have an edge>", "<advantage>"],
    "gaps_to_close": ["<specific gap where competitor is ahead>", "<gap>"],
    "verdict": "<1 sentence honest competitive verdict — who is winning the AI visibility race and why>"
  }`
      : `"competitor_analysis": null`
  }
}
 
USER AUDIT ANSWERS:
- Primary traffic source: ${traffic_source}
- AI visibility status: ${ai_visibility}
- Content strategy: ${content_type}
- Intent/search coverage: ${intent_coverage}
- Website messaging clarity: ${website_clarity}
- Biggest growth bottleneck: ${growth_bottleneck}
- Website: ${website_url || "not provided"}
 
SCORING GUIDE:
- ai_visibility=high → +20 pts
- ai_visibility=inconsistent → +10 pts
- ai_visibility=none or incorrect → +0 pts
- content_type=structured → +20 pts
- content_type=blog → +10 pts
- intent_coverage=extensive → +20 pts
- intent_coverage=some → +12 pts
- website_clarity=clear → +15 pts
- website_clarity=moderate → +8 pts
- traffic_source=search → +15 pts
- traffic_source=referrals → +10 pts
- Apply penalty of –10 if growth_bottleneck=traffic
 
Rules:
- Be brutally specific — mention their actual answers in your insights
- No filler phrases like "it's important to" or "consider implementing"
- Each bullet 1–2 clear sentences max
- 2–3 items per array, never more than 4
`;

    const text = await generateWithRetry(prompt);
    const parsed = safeParse(text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ error: "Audit failed" }, { status: 500 });
  }
}

async function generateWithRetry(prompt: string): Promise<string> {
  let lastError: unknown;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      return response.text ?? "";
    } catch (error) {
      lastError = error;
      if (!isRetryable(error)) throw error;
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(
        `Gemini 503 — retrying in ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`,
      );
      await sleep(delay);
    }
  }

  throw lastError;
}

function isRetryable(error: unknown): boolean {
  if (error instanceof Error) {
    const msg = error.message;
    return (
      msg.includes("503") ||
      msg.includes("UNAVAILABLE") ||
      msg.includes("high demand") ||
      msg.includes("529")
    );
  }
  return false;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function safeParse(text: string): AuditResult {
  // Strip markdown code fences if present
  const cleaned = text
    .replace(/```json\s*/gi, "")
    .replace(/```\s*/g, "")
    .trim();

  try {
    return JSON.parse(cleaned) as AuditResult;
  } catch {
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]) as AuditResult;
      } catch {
        return fallback();
      }
    }
    return fallback();
  }
}

function fallback(): AuditResult {
  return {
    score: 55,
    summary:
      "We encountered an issue generating your full analysis. Based on your answers, there are significant AI visibility improvements available to you.",
    strengths: ["Some foundational presence detected"],
    gaps: [
      "Limited AI-indexed content",
      "Unclear positioning signals for AI models",
    ],
    opportunities: [
      "Build a structured FAQ hub targeting your buyer's top questions",
      "Add schema markup to clarify your entity and offering to AI crawlers",
    ],
    quick_wins: ["Publish 3 intent-driven Q&A pages this month"],
    long_term: ["Build a content moat across 50+ buyer intent queries"],
    visibility_outlook:
      "AI visibility can improve significantly with structured content investment.",
    competitor_analysis: undefined,
  };
}
