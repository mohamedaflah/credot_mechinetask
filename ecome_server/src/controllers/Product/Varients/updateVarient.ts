import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const updateVarient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const { varientId, data } = req.body;

    const updatedProduct = await ProductModel.updateOne(
      {
        _id: productId,
        "variants._id": varientId,
      },
      { $set: { "variants.$[elem]": data } },
      { arrayFilters: [{ "elem._id": varientId }], new: true }
    );

    console.log("🚀 ~ updatedProduct:", updatedProduct);
  } catch (error) {
    next(error);
  }
};
