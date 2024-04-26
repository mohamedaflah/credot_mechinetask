import { z } from "zod";
import { imageSchema } from "../common/imageSchema";

export const productSchema = z.object({
  productName: z.string().min(2),
  category: z.string(),
  brand: z.string(),
  price: z.number(),
  images: z.array(imageSchema.nullable()).refine((img) => img.length >= 2, {
    message: "Please upload atleast two images",
  }),
  stock: z.number(),
  description: z.string().min(10),
  status: z.string(),
  color: z.string(),
  specifications: z.array(z.string()).refine((spec) => spec.length >= 2, {
    message: "please add atleast two specification",
  }),
  memory: z.string(),
  modelNumber: z.string(),
  releasedDate: z.string(),
});
