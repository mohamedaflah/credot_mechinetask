import { NextFunction, Request, Response } from "express";
import BrandModel from "../../models/Brand/Brand";

export const updateBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type } = req.query;
    const { brandId, data } = req.body;
    let brand;
    if (type == "update") {
      await BrandModel.updateOne(
        { _id: brandId },
        { $set: { ...data } }
      );

    } else {
       await BrandModel.updateOne(
        { _id: brandId },
        { $set: { status: data } }
      );
    }
    brand=await BrandModel.findById(brandId)
    res.status(200).json({ status: true, message: "Successful", brand });
  } catch (error) {
    next(error);
  }
};
