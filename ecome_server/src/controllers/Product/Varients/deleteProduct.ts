import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const deleteVarients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const { status, varientId } = req.body;
    await ProductModel.updateOne(
      { _id: productId },
      { $set: { status: status } }
    );
    const updatedProduct = await ProductModel.updateOne(
      {
        _id: productId,
        "variants._id": varientId,
      },
      { $set: { "variants.$[elem]": { status: status } } },
      { arrayFilters: [{ "elem._id": varientId }], new: true }
    );
    res
      .status(200)
      .json({ status: true, message: "Success", product: updatedProduct });
  } catch (error) {
    next(error);
  }
};
