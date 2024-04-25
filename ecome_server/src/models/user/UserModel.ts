import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model(process.env.USER_MODEL as string, UserModel);
