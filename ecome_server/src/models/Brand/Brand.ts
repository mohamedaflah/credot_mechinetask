import mongoose, { Schema } from "mongoose";
import { Document } from "mongoose";

interface IBrand extends Document {
  title: string;
  slug?: string;
  description?: string;
  image?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  _id: string;
}
const BrandModel: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: async function (value: string) {
          const brand = await (this as any).constructor.findOne({
            title: { $regex: new RegExp(`^${value}$`, "i") },
          });
          return !brand;
        },
        message: "Brand with this name already exists",
      },
    },
    slug: String,
    description: String,
    image: String,
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model(process.env.BRAND_MODEL as string, BrandModel);
