import { z } from "zod";
import { imageSchema } from "../common/imageSchema";

export const brandFormSchema = z.object({
  title: z.string().min(2,{message:"add title with alteast 2 letter"}),
  description: z.string().min(5,{message:"Description need with alteast 5 words"}),
  image: imageSchema
    .nullable()
    .refine((data) => data !== null, { message: "Please upload brand image" }),
});
