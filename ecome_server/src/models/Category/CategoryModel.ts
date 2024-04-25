import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,
    image: String,
    status: Boolean,
  },
  { timestamps: true }
);
export default mongoose.model(
  process.env.CATEGORY_MODEL as string,
  CategoryModel
);
