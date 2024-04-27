export interface OrderPayload {
  userId: string;
  paymentMode: "online" | "cod";
  status: "pending" | "shipped" | "delivered";
  totalAmount: number;
  products: { productId: string; qty: number; price: number }[];
  address: {
    place: string;
    street: string;
    state: string;
    pincode: string;
    phone: string;
    email: string;
  };
}

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
