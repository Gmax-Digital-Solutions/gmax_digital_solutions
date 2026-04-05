import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact-schema";
import { supabaseServer } from "@/lib/supabase/server";

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
