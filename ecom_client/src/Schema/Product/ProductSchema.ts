import { z } from "zod";
import { imageSchema } from "../common/imageSchema";

export const productSchema = z.object({
  productName: z.string().min(2),
  category: z.string().nonempty(),
  brand: z.string().nonempty(),
  price: z.number().nonnegative(),
  images: z.array(imageSchema.nullable()).refine((img) => img.length >= 2, {
    message: "Please upload atleast two images",
  }),
  stock: z.number().nonnegative(),
  description: z.string().min(10),
  status: z.string().nonempty(),
  color: z.string().nonempty(),
  specifications: z.array(z.string()).refine((spec) => spec.length >= 2, {
    message: "please add atleast two specification",
  }),
  memory: z.string(),
  modelNumber: z.string().nonempty(),
  releasedDate: z.string().nonempty(),
});
