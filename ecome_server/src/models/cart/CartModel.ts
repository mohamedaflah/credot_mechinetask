import mongoose from "mongoose";

const CartModel = new mongoose.Schema(
  {
    userId: String,
    products: [
      {
        productId: mongoose.Types.ObjectId,
        qty: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model(process.env.CART_MODEL as string, CartModel);
