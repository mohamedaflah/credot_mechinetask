import { NextFunction, Request, Response } from "express";
import ProductModel from "../../../models/Products/ProductModel";

// :productId/:varientId
export const getProductAndVarient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, varientId } = req.params;
    const product = await ProductModel.findOne({ _id: productId });
    const varient = product?.variants.find(
      (varient) => String(varient._id) === varientId
    );

    res.status(200).json({status:true,message:"Successfull",product,varient})
  } catch (error) {
    next(error);
  }
};
