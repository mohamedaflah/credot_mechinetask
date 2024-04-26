import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const deleteCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // CART_MODEL
    const { userId, productId } = req.body;
    const cart = await CartModel.findOne({ userId: userId });

    if (cart && cart.products) {
      cart.products = cart.products.filter(
        (value) => value.productId !== productId
      ) as any;
      cart.save();
    }
    res
      .status(200)
      .json({ status: true, message: "Succesfull", cartProduct: productId });
  } catch (error) {
    next(error);
  }
};
