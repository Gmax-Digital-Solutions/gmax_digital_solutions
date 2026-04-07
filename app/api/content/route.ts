import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      content_type,
      title,
      slug,
      excerpt,
      featured_image,
      author,
      category,
      read_time,
      content_blocks,
      client_name,
      industry,
      status,
      seo_title,
      seo_description,
    } = body;

    if (!content_type || !title || !slug) {
      return NextResponse.json(
        { error: "content_type, title and slug are required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabaseServer.from("content").insert(
      Array.isArray(body)
        ? body
        : [
            {
              content_type,
              title,
              slug,
              excerpt,
              featured_image,
              author,
              category,
              read_time,
              content_blocks,
              client_name,
              industry,
              status,
              seo_title,
              seo_description,
            },
          ],
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: "Content created successfully",
        data,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid request",
      },
      { status: 500 },
    );
  }
}

// export async function GET(req: Request, {params}: Params) {

// }

export async function GET(req: Request, { params }: Params) {
  const { data, error } = await supabaseServer
    .from("content")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from("content")
      .update(body)
      .eq("slug", params.slug);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      message: "Content updated successfully",
      data,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const { error } = await supabaseServer
    .from("content")
    .delete()
    .eq("slug", params.slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "Content deleted successfully",
  });
}
