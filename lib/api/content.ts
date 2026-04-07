import { Content } from "@/types/content";
import { supabaseServer } from "../supabase/server";
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getContent(): Promise<Content[]> {
  try {
    const { data, error } = await supabaseServer.from("content").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting content");
  }
}

export async function getSingleContent(slug: string): Promise<Content[]> {
  try {
    const { data, error } = await supabaseServer
      .from("content")
      .select("*")
      .eq("slug", slug);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching single content data");
  }
}

export async function getInsights(): Promise<Content[]> {
  try {
    const { data, error } = await supabaseServer
      .from("content")
      .select("*")
      .eq("content_type", "insight");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching insights data");
  }
}

export async function getSingleInsight(slug: string): Promise<Content> {
  try {
    const { data, error } = await supabaseServer
      .from("content")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("error fetching single insight data");
  }
}

export async function getRelatedInsights(
  currentSlug: string,
  category: string | undefined,
): Promise<Content[]> {
  try {
    const { data, error } = await supabaseServer
      .from("content")
      .select("*")
      .eq("slug", currentSlug)
      .neq("category", category)
      .limit(3);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch {
    throw new Error("Error fetching related insights data");
  }
}
