import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);

    const newProduct = await ProductModel.create(req.body);
    res
      .status(200)
      .json({ status: true, message: "Succesfull", product: newProduct });
  } catch (error) {
    next(error);
  }
}
