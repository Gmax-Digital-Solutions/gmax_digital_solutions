import { supabaseServer } from "../supabase/server";
import { CaseStudy } from "@/types/caseStudy";
import { Insight } from "@/types/insight";
import { Testimonial } from "@/types/testimonial";

export async function getInsights(): Promise<Insight[]> {
  try {
    const { data, error } = await supabaseServer.from("insights").select("*");

    if (error) {
      console.log(error.message);

      return [];
    }

    return data || [];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching insights data");
  }
}

export async function getSingleInsight(slug: string): Promise<Insight> {
  try {
    const { data, error } = await supabaseServer
      .from("insights")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      console.log(error.message);

      throw new Error("error fetching single insights");
    }

    return data || [];
  } catch (error) {
    console.log(error);

    throw new Error("error fetching insight data");
  }
}

export async function getRelatedInsights(
  currentSlug: string,
  category: string | undefined,
): Promise<Insight[]> {
  try {
    const { data, error } = await supabaseServer
      .from("insights")
      .select("*")
      .eq("slug", currentSlug)
      .neq("category", category)
      .limit(3);

    if (error) {
      console.log(error.message);

      return [];
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching related insights data");
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const { data, error } = await supabaseServer
      .from("case_studies")
      .select("*");

    if (error) {
      console.log(error.message);

      return [];
    }

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getSingleCaseStudy(slug: string): Promise<CaseStudy> {
  try {
    const { data, error } = await supabaseServer
      .from("case_studies")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      console.log(error.message);

      throw new Error("error fetching insight data");
    }

    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);

    throw new Error("error fetching insight data");
  }
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy> {
  const { data, error } = await supabaseServer
    .from("case_studies")
    .select("*")
    .eq("featured", true)
    .single();

  if (data) return data;

  // fallback to latest
  const { data: fallback } = await supabaseServer
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  return fallback ?? null;
}

export async function getHomeCaseStudies(): Promise<CaseStudy[]> {
  try {
    // 1. Get featured (optional)
    const { data: featured } = await supabaseServer
      .from("case_studies")
      .select("*")
      .eq("featured", true)
      .limit(1);

    // 2. Get latest 4
    const { data: latest, error } = await supabaseServer
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4);

    if (error) throw error;

    let results = latest || [];

    // 3. If featured exists, put it first (no duplicates)
    if (featured && featured.length > 0) {
      const featuredItem = featured[0];

      results = [
        featuredItem,
        ...results.filter((item) => item.id !== featuredItem.id),
      ].slice(0, 4);
    }

    return results;
  } catch (error) {
    console.log("Home case studies error:", error);

    return []; // never break UI
  }
}

// lib/api/insights.ts

export async function getSingleFeaturedInsight() {
  try {
    // 1. Try featured
    const { data: featured } = await supabaseServer
      .from("insights")
      .select("*")
      .eq("featured", true)
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (featured) return featured;

    // 2. Fallback → latest
    const { data: latest } = await supabaseServer
      .from("insights")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    return latest ?? null;
  } catch (error) {
    console.log("Single featured insight error:", error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabaseServer
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) {
      console.log(error);

      return [];
    }

    return data;
  } catch (err) {
    console.log(err);

    return [];
  }
}
