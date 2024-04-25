import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
  {
    productName: String,
    tag: String,
    category: mongoose.Types.ObjectId,
    brand: mongoose.Types.ObjectId,
    slug: String,
    variants: [
      {
        description: String,
        images: [String],
        price: Number,
        discount: Number,
        stock: Number,
        sold: Number,
        color: String,
        memory: String,
        status: {
          type: String,
          enum: ["publish", "unpublish"],
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model(
  process.env.PRODUCT_MODEL as string,
  ProductModel
);
