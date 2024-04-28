import { z } from "zod";

export const productEdit = z.object({
  productName: z.string().min(2),
  category: z.string().nonempty(),
  brand: z.string().nonempty(),
  
});
