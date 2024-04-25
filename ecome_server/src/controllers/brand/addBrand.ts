import { NextFunction, Request, Response } from "express";
import BrandModel from "../../models/Brand/Brand";

export const addBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, image, description } = req.body;
    const brand = new BrandModel({
      title,
      image,
      description,
    });
    await brand.save();
    res.status(200).json({ status: true, message: "Successful", brand });
  } catch (error) {
    next(error);
  }
};
