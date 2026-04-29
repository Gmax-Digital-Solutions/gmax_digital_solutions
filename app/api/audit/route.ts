import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const answers = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are an expert AI visibility auditor.

Return ONLY valid JSON.

Format:
{
  "score": number (0-100),
  "summary": string,
  "strengths": string[],
  "gaps": string[],
  "opportunities": string[]
}

User answers:
${JSON.stringify(answers)}

Rules:
- Be specific
- No fluff
- Tie insights to answers
- Max 2-3 bullet points per section
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const parsed = safeParse(text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Audit failed" }, { status: 500 });
  }
}

/**
 * Safe JSON parser (critical for Gemini)
 */
function safeParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : fallback();
  }
}

function fallback() {
  return {
    score: 60,
    summary: "We encountered an issue generating your full report.",
    strengths: ["Basic presence detected"],
    gaps: ["Limited structured data"],
    opportunities: ["Improve content clarity"],
  };
}
