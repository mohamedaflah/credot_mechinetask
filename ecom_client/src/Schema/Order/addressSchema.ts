import { z } from "zod";

export const addressSchema = z.object({
  place: z.string().min(2),
  street: z.string().min(2),
  state: z.string().min(2),
  pincode: z
    .string()
    .min(6, { message: "Enter 6 digit for pincode" })
    .max(6, { message: "Enter 6 digit for pincode" })
    .refine((val) => /^\d{6}$/.test(val), {
      message: "Invalid pincode format",
    }),
  phone: z.string().min(10,{message:"Enter 10 digit mobile number"}).max(10,{message:"10 digit only allowed"}).refine((val) => /^\d+$/.test(val), {
    message: "Phone number must be digits only",
  }),
  email: z.string().email(),
});

// const OrderModel = new mongoose.Schema(
//   {
//     userId: mongoose.Types.ObjectId,
//     paymentMode: {
//       type: String,
//       enum: ["online", "cod"],
//     },
//     status: {
//       type: String,
//       enum: ["pending", "shipped", "delivered"],
//     },
//     totalAmount: {
//       type: Number,
//     },
//     products: [
//       {
//         productId: mongoose.Types.ObjectId,
//         qty: Number,
//         price: Number,
//       },
//     ],
//     address: {
//       place: String,
//       street: String,
//       state: String,
//       pincode: String,
//       phone: String,
//       email: String,
//     },
//   },

// );
