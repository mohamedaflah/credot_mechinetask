import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const getAllVarients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const products = await ProductModel.find({ _id: productId });
    res
      .status(200)
      .json({ status: true, message: "Successful", products: products });
  } catch (error) {
    next(error);
  }
};
