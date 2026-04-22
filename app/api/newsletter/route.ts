import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter-schema";
import { supabaseServer } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

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

    // 2. Send confirmation email (TO USER)
    await resend.emails.send({
      from: "Gmax Digital <hello@gmaxdigitals.com>",
      to: [email],
      subject: "You're in — Welcome to Gmax Insights",
      html: `
        <h2>Welcome to Gmax Digital</h2>
        <p>You’ve successfully subscribed to our insights.</p>
        <p>Expect strategic breakdowns, growth frameworks, and execution playbooks — not noise.</p>
        <br/>
        <p>— Gmax Digital</p>
      `,
    });

    // 3. Send notification email (TO YOU)
    
    await resend.emails.send({
      from: "Gmax Digital <noreply@gmaxdigitals.com>",
      to: ["hello@gmaxdigitals.com"],
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Subscriber</h3>
        <p>Email: ${email}</p>
      `,
    });

    return NextResponse.json({
      message: "Successfully subscribed to the newsletter!",
    });
  } catch {
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
