import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
  {
    productName: { type: String, unique: true },
    tag: String,
    category: String,
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
        specifications: [String],
        modelNumber: String,
        releasedDate: Date,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model(
  process.env.PRODUCT_MODEL as string,
  ProductModel
);
