import mongoose, { mongo } from "mongoose";

const OrderModel = new mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    paymentMode: {
      type: String,
      enum: ["online", "cod"],
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered","rejected"],
    },
    totalAmount: {
      type: Number,
    },
    products: [
      {
        productId: mongoose.Types.ObjectId,
        qty: Number,
        price: Number,
      },
    ],
    address: {
      place: String,
      street: String,
      state: String,
      pincode: String,
      phone: String,
      email: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(process.env.ORDER_MODEL as string, OrderModel);
