import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, status } = req.body;
    await ProductModel.updateOne(
      { _id: productId },
      { $set: { status: status } }
    );
  } catch (error) {
    next(error);
  }
};
