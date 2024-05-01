import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

export const updateVarient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId,varientId } = req.params;

    const updatedProduct = await ProductModel.updateOne(
      {
        _id: productId,
        "variants._id": varientId,
      },
      { $set: { "variants.$[elem]": req.body } },
      { arrayFilters: [{ "elem._id": varientId }], new: true }
    );

    res.status(200).json({status:true,message:"Succesfull",product:updatedProduct})
  } catch (error) {
    next(error);
  }
};
