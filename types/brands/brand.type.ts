import { BrandSchema } from "@/schemas/brands/brand.schema";
import { InferInput } from "valibot";

export type BrandType = InferInput<typeof BrandSchema>;
