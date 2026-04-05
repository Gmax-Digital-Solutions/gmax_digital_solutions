import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter-schema";
import { supabaseServer } from "@/lib/supabase/server";

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
