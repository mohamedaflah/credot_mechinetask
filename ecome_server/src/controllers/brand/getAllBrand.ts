import { NextFunction, Request, Response } from "express";
import BrandModel from "../../models/Brand/Brand";

export const getAllBrands = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type } = req.query;
    let brands;
    if (type == "admin") {
      brands = await BrandModel.find({});
    } else {
      brands = await BrandModel.find({ status: true });
    }
    res.status(200).json({ status: true, message: "Successful", brands });
  } catch (error) {
    next(error);
  }
};
