import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact-schema";
import { supabaseServer } from "@/lib/supabase/server";
import { Resend } from "resend";
import { identifyServerUser } from "@/lib/analytics/posthog-server";

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
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Need:</strong> ${helpWith}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    // Auto reply to user
    await identifyServerUser(email, {
      full_name: fullName,
      email,
      company,
      help_with: helpWith,
      message,
      form: "contact_page",
    });

    await resend.emails.send({
      from: "Gmax Digital <hello@gmaxdigitals.com>",
      to: [email],
      subject: "We received your message",
      html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gmax Digital</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f5f6fa; font-family: Inter, Arial, sans-serif;">
    
    <!-- Wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f6fa; padding:40px 0;">
      <tr>
        <td align="center">
          
          <!-- Email Container -->
          <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05);">

            <!-- Top Accent -->
            <tr>
              <td style="height:4px; background-color:#585DE1;"></td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:32px 40px 16px 40px;">
                <h1 style="margin:0; font-size:20px; font-weight:800; color:#241E20; letter-spacing:-0.02em;">
                  Gmax Digital
                </h1>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 40px;">
                <div style="height:1px; background:#eee;"></div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 40px;">
                
                <h2 style="margin:0 0 16px 0; font-size:22px; font-weight:800; color:#241E20;">
                  We’ve received your message.
                </h2>

                <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#555;">
                  Hi ${fullName},
                </p>

                <p style="margin:0 0 24px 0; font-size:15px; line-height:1.6; color:#555;">
                  Thanks for reaching out to Gmax Digital. Your message is in, and our team is reviewing it.
                  We’ll get back to you shortly with the next steps.
                </p>

                <!-- CTA -->
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <a href="https://gmaxdigitals.com"
                        style="display:inline-block; padding:12px 24px; font-size:13px; font-weight:700; color:#ffffff; background:#585DE1; border-radius:6px; text-decoration:none; letter-spacing:0.03em;">
                        Visit Website
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer Divider -->
            <tr>
              <td style="padding:0 40px;">
                <div style="height:1px; background:#eee;"></div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 40px;">
                <p style="margin:0; font-size:12px; color:#888; line-height:1.5;">
                  Gmax Digital<br/>
                  AI Visibility & Growth Systems
                </p>
              </td>
            </tr>

          </table>

          <!-- Bottom note -->
          <table width="600" cellpadding="0" cellspacing="0" style="margin-top:16px;">
            <tr>
              <td align="center">
                <p style="font-size:11px; color:#aaa; margin:0;">
                  © ${new Date().getFullYear()} Gmax Digital. All rights reserved.
                </p>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `,
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
