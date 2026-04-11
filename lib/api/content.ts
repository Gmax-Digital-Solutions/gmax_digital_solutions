import { supabaseServer } from "../supabase/server";
import { CaseStudy } from "@/types/caseStudy";
import { Insight } from "@/types/insight";

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
