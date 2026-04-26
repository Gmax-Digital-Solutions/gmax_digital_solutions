import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter-schema";
import { supabaseServer } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

const PLAYBOOK_URL = "https://gmaxdigitals.com/ai-playbook.pdf"; // update if needed

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 },
      );
    }

    const { first_name, email } = result.data;

    const { error } = await supabaseServer
      .from("newsletter_subscribers")
      .insert({ first_name, email });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "This email is already subscribed to the newsletter" },
          { status: 400 },
        );
      }

      return NextResponse.json(
        { message: "An error occurred while subscribing to the newsletter" },
        { status: 500 },
      );
    }

    // =========================
    // 1. SEND PLAYBOOK EMAIL
    // =========================
    await resend.emails.send({
      from: "Gmax Digital <hello@gmaxdigitals.com>",
      to: [email],
      subject: "Your AI Marketing Playbook is ready",
      html: getEmailTemplate({ first_name, playbookUrl: PLAYBOOK_URL }),
    });

    // =========================
    // 2. INTERNAL NOTIFICATION
    // =========================
    await resend.emails.send({
      from: "Gmax Digital <noreply@gmaxdigitals.com>",
      to: ["hello@gmaxdigitals.com"],
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Subscriber</h3>
        <p><strong>Name:</strong> ${first_name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({
      message: "Successfully subscribed. Check your email.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}

const getEmailTemplate = ({
  first_name,
  playbookUrl,
}: {
  first_name?: string;
  playbookUrl: string;
}) => {
  return `
  <div style="background:#0f0f14;padding:40px;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:600px;margin:auto;background:#15151d;border-radius:12px;padding:40px;color:#ffffff;">

      <!-- Brand -->
      <h2 style="margin:0 0 24px;font-weight:800;letter-spacing:-0.5px;">
        Gmax Digital
      </h2>

      <!-- Headline -->
      <h1 style="font-size:28px;line-height:1.2;margin-bottom:20px;">
        Your AI Marketing Playbook is ready.
      </h1>

      <!-- Body -->
      <p style="color:#a1a1aa;font-size:16px;line-height:1.6;">
        ${first_name ? `Hey ${first_name},` : "Hey,"}
        <br/><br/>
        You’re in.
        <br/><br/>
        This isn’t another surface-level guide.  
        It’s the system behind how we help founders turn attention into revenue.
      </p>

      <!-- CTA -->
      <div style="margin:32px 0;">
        <a href="${playbookUrl}" 
           style="
             background:#585DE1;
             color:#ffffff;
             padding:14px 24px;
             text-decoration:none;
             border-radius:8px;
             font-weight:600;
             display:inline-block;
           ">
          Download the Playbook
        </a>
      </div>

      <!-- Supporting -->
      <p style="color:#71717a;font-size:14px;line-height:1.6;">
        Over the next few days, we’ll break down how to actually apply this.
        <br/><br/>
        Stay sharp.
      </p>

      <!-- Footer -->
      <div style="margin-top:40px;padding-top:20px;border-top:1px solid #27272a;">
        <p style="font-size:12px;color:#52525b;">
          Gmax Digital · Strategic Growth Systems  
          <br/>
          <a href="https://gmaxdigitals.com" style="color:#585DE1;text-decoration:none;">
            gmaxdigitals.com
          </a>
        </p>
      </div>

    </div>
  </div>
  `;
};
