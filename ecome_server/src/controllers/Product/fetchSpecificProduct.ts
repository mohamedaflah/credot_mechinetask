import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";
import mongoose from "mongoose";

export const fetchSpecificProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.body;

    
    const product=await ProductModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(productId) },
      },
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "result",
        },
      },
      {
        $unwind: "$result",
      },
      {
        $set: {
          brand: { $concat: ["$result.title", "[(*)]", "$result.image"] },
        },
      },
      {
        $project: { result: false },
      },
    ]);

    res.status(200).json({ status: true, message: "Succesfull", product:product[0] });
  } catch (error) {
    next(error);
  }
};
