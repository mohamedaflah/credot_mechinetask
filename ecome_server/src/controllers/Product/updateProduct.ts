import { NextFunction, Request, Response } from "express";
import ProductModel from "../../models/Products/ProductModel";
import mongoose from "mongoose";
import Brand from "../../models/Brand/Brand";

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId,data } = req.body;

    if(req.body.data.brand){
      req.body.data.brand=new mongoose.Types.ObjectId(req.body.data.brand)
    }
    await ProductModel.updateOne({ _id: productId }, { $set: req.body.data });
    const updatedProduct =await ProductModel.findOne({ _id: productId });

    const brand=await Brand.findOne({_id:updatedProduct?.brand})


    res
      .status(200)
      .json({ status: true, message: "succesfull", product: updatedProduct,brand:`${brand?.title}[(*)]${brand?.image}` });
  } catch (error) {
    next(error);
  }
};
