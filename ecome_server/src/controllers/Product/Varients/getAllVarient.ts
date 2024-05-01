import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const getAllVarients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const { type } = req.query;
    const products = await ProductModel.find(
      { _id: productId },
      { variants: true }
    );

    res
      .status(200)
      .json({ status: true, message: "Successful", products: products[0] });
  } catch (error) {
    next(error);
  }
};
