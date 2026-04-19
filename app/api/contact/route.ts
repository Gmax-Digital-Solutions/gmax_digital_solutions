import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact-schema";
import { supabaseServer } from "@/lib/supabase/server";
import { Resend } from "resend";
import { trackEvent } from "@/lib/analytics/posthog";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { fullName, email, company, helpWith, message } = result.data;

    const { error } = await supabaseServer.from("contact_messages").insert([
      {
        full_name: fullName,
        email,
        company,
        help_with: helpWith,
        message,
      },
    ]);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 },
      );
    }

    // 2. Send Email via Resend
    await resend.emails.send({
      from: "Gmax Digital <hello@gmaxdigitals.com>",
      to: ["hello@gmaxdigitals.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Compaby:</strong> ${company}</p>
        <p><strong>Need:</strong> ${helpWith}</p>

      `,
    });

    // Auto reply to user
    await resend.emails.send({
      from: "Gmax Digital <hello@gmaxdigitals.com>",
      to: [email],
      subject: "We received your message",
      html: `<p>Hi ${fullName}, thanks for trusting us, we’ll get back to you shortly.</p>`,
    });

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
