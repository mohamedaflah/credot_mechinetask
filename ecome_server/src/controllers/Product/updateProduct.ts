import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.body;
    await ProductModel.updateOne({ _id: productId }, { $set: req.body.data });
    const updatedProduct = ProductModel.findOne({ _id: productId });

    res
      .status(200)
      .json({ status: true, message: "succesfull", product: updatedProduct });
  } catch (error) {
    next(error);
  }
};
