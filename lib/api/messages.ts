import { BrandType } from "@/types/brands/brand.type";
import { client } from "../supabase/client";

export async function getMessagesByBrandId(brandId: string) {
  try {
    const { data, error } = await client
      .from("brands")
      .select(
        `
        *,
        brand_messages (
            *
        )
        `,
      )
      .eq("id", brandId)
      .single()
      .overrideTypes<Partial<BrandType>>();
    if (error) {
      throw error;
    }
    return data;
  } catch {
    return null;
  }
}
