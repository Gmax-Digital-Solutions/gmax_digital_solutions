// app/api/audit/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // use service role to bypass RLS
);

export async function POST(req: NextRequest) {
  try {
    const { email, result, answers } = await req.json();

    if (!email || !result) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // ── 1. Upsert lead in Supabase ──────────────────────────────────────────
    const { error: dbError } = await supabase.from("audit_leads").upsert(
      {
        email,
        score: result.score,
        website_url: answers?.website_url ?? null,
        competitor_url: answers?.competitor_url ?? null,
        answers,
        result,
        submitted_at: new Date().toISOString(),
      },
      { onConflict: "email" }, // update if same email re-takes audit
    );

    if (dbError) {
      console.error("Supabase upsert error:", dbError);
      // Don't block email send on DB errors
    }

    // ── 2. Build score label ─────────────────────────────────────────────────
    const scoreLabel =
      result.score > 80
        ? "High Visibility"
        : result.score > 50
          ? "Moderate Visibility"
          : "Low Visibility";

    const scoreColor =
      result.score > 80 ? "#10b981" : result.score > 50 ? "#585DE1" : "#f43f5e";

    // ── 3. Send report email via Resend ──────────────────────────────────────
    const { error: emailError } = await resend.emails.send({
      from: "AI Visibility Monolith <hello@gmaxdigitals.com>", // ← replace with your verified domain
      to: email,
      subject: `Your AI Visibility Score: ${result.score}/100 — Full Report Inside`,
      html: buildEmailHTML({ result, answers, scoreLabel, scoreColor }),
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send email route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// ── Email HTML builder ────────────────────────────────────────────────────────
function buildEmailHTML({
  result,
  answers,
  scoreLabel,
  scoreColor,
}: {
  result: any;
  answers: any;
  scoreLabel: string;
  scoreColor: string;
}): string {
  const listItems = (items: string[], bullet = "→") =>
    items
      .map(
        (item) =>
          `<li style="margin:8px 0;padding-left:8px;border-left:2px solid #e5e7eb;color:#374151;font-size:14px;line-height:1.6;">${bullet} ${item}</li>`,
      )
      .join("");

  const section = (
    title: string,
    color: string,
    items: string[],
    bullet?: string,
  ) =>
    items.length
      ? `
    <div style="margin:32px 0;">
      <p style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:${color};margin-bottom:12px;">${title}</p>
      <ul style="list-style:none;padding:0;margin:0;">${listItems(items, bullet)}</ul>
    </div>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    
    <!-- Header -->
    <div style="background:#241E20;padding:32px 40px;">
      <p style="font-size:10px;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin:0 0 8px;">AI Visibility Monolith</p>
      <h1 style="font-size:22px;font-weight:800;color:#ffffff;margin:0;line-height:1.3;">
        Your AI Visibility Report
      </h1>
      ${answers?.website_url ? `<p style="font-size:12px;color:rgba(255,255,255,0.4);margin:8px 0 0;">${answers.website_url}</p>` : ""}
    </div>

    <!-- Score block -->
    <div style="padding:32px 40px;border-bottom:1px solid #f3f4f6;display:flex;align-items:center;gap:24px;">
      <div style="text-align:center;min-width:100px;">
        <div style="font-size:56px;font-weight:900;color:${scoreColor};line-height:1;">${result.score}</div>
        <div style="font-size:11px;color:#9ca3af;font-weight:600;">/100</div>
        <div style="font-size:11px;color:${scoreColor};font-weight:700;margin-top:4px;text-transform:uppercase;letter-spacing:0.05em;">${scoreLabel}</div>
      </div>
      <div style="flex:1;">
        <div style="height:6px;background:#f3f4f6;border-radius:99px;overflow:hidden;">
          <div style="height:100%;width:${result.score}%;background:${scoreColor};border-radius:99px;"></div>
        </div>
        <p style="font-size:14px;color:#6b7280;line-height:1.6;margin:16px 0 0;">${result.summary}</p>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 40px;">

      ${
        result.visibility_outlook
          ? `
      <div style="background:#585DE1;border-radius:8px;padding:16px;margin-bottom:32px;">
        <p style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.7);margin:0 0 6px;">Outlook</p>
        <p style="font-size:14px;color:#ffffff;margin:0;line-height:1.6;">${result.visibility_outlook}</p>
      </div>`
          : ""
      }

      ${section("What's Working", "#10b981", result.strengths ?? [], "✓")}
      ${section("Gap Analysis", "#f43f5e", result.gaps ?? [], "✗")}
      ${section("Opportunities", "#10b981", result.opportunities ?? [], "→")}
      ${section("Quick Wins (30 days)", "#585DE1", result.quick_wins ?? [], "⚡")}
      ${section("Long-Term Strategy", "#7c3aed", result.long_term ?? [], "◈")}

      ${
        result.competitor_analysis
          ? `
      <div style="margin:32px 0;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <div style="background:#f9fafb;padding:16px 20px;border-bottom:1px solid #e5e7eb;">
          <p style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#6b7280;margin:0;">Competitive Landscape vs ${result.competitor_analysis.competitor_name}</p>
        </div>
        <div style="padding:20px;">
          <p style="font-size:13px;color:#374151;margin:0 0 16px;font-style:italic;">${result.competitor_analysis.verdict}</p>
          ${section("Their Strengths", "#f43f5e", result.competitor_analysis.their_strengths, "↑")}
          ${section("Your Advantages", "#10b981", result.competitor_analysis.your_advantages, "✓")}
          ${section("Gaps to Close", "#585DE1", result.competitor_analysis.gaps_to_close, "→")}
        </div>
      </div>`
          : ""
      }

    </div>

    <!-- CTA -->
    <div style="background:#f9fafb;padding:32px 40px;text-align:center;border-top:1px solid #f3f4f6;">
      <p style="font-size:16px;font-weight:700;color:#241E20;margin:0 0 8px;">Ready to turn this into growth?</p>
      <p style="font-size:13px;color:#6b7280;margin:0 0 24px;">Book a 60-minute strategy session and we'll build your AI visibility roadmap.</p>
      <a href="#" style="display:inline-block;background:#585DE1;color:#ffffff;font-size:13px;font-weight:700;padding:14px 32px;border-radius:8px;text-decoration:none;letter-spacing:0.05em;">
        Schedule Your Strategy Call
      </a>
    </div>

    <!-- Footer -->
    <div style="padding:20px 40px;text-align:center;">
      <p style="font-size:11px;color:#9ca3af;margin:0;">
        AI Visibility Monolith · You received this because you completed our audit.<br>
        <a href="#" style="color:#9ca3af;">Unsubscribe</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}
