import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const getCartProductsIds = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  try {
    const { userId } = req.body;
    const cart = await CartModel.findOne({ userId: userId });
    let products = cart?.products.map((value) => value?.productId);
    res.status(200).json({ status: true, message: "Succesfull", products });
  } catch (error) {
    nex(error);
  }
};
