import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type } = req.query;
    let products;
    if (type === "admin") {
      products = await ProductModel.find();
    } else {
      products = await ProductModel.aggregate([
        { $match: { "variants.status": "publish" } },
        {
          $project: {
            productName: 1,
            tag: 1,
            category: 1,
            brand: 1,
            slug: 1,
            variants: {
              $filter: {
                input: "$variants",
                as: "variant",
                cond: { $eq: ["$$variant.status", "publish"] },
              },
            },
            createdAt: 1,
            updatedAt: 1,
          },
        },
      ]);
    }
    res.status(200).json({ status: true, message: "successfull" });
  } catch (error) {
    next(error);
  }
};
