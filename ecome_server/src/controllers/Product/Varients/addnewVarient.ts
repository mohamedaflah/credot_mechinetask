import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const addNewVarient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;

    const product = await ProductModel.findById(productId);
    product?.variants.push(req.body);
    product?.save();

    const addedVariant = product?.variants[product?.variants.length - 1];
    res
      .status(200)
      .json({ status: true, message: "Successful", product: addedVariant });
  } catch (error) {
    next(error);
  }
};
