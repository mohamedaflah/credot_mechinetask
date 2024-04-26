import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const addToCartController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // CART_MODEL
    const { userId, productId, qty } = req.body;
    const cart = await CartModel.findOne({ userId: userId });
    if (!cart) {
      await new CartModel({
        userId: userId,
        products: [
          {
            productId: productId,
            qty: qty,
          },
        ],
      }).save();
    } else {
      cart.products.push({
        productId: productId,
        qty: qty,
      });
      cart.save();
    }

    res
      .status(200)
      .json({ status: true, message: "Succesfull", cartProduct: productId });
  } catch (error) {
    next(error);
  }
};
