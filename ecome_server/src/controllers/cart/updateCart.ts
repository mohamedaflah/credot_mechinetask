import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // CART_MODEL
    const { userId, productId, qty, cartId } = req.body;
    const cart = await CartModel.findOne({ _id: cartId, userId: userId });
    if (cart && cart.products) {
      cart.products = cart?.products.map((product) => {
        if (product.productId == productId) {
          return {
            ...product,
            qty: qty,
          };
        } else {
          product;
        }
    }) as any
    await cart.save();
    }

    res
      .status(200)
      .json({ status: true, message: "Succesfull", cartProduct: productId });
  } catch (error) {
    next(error);
  }
};
