import { NextFunction, Request, Response } from "express";
import OrderModel from "../../models/Orders/OrderModel";
import CartModel from "../../models/cart/CartModel";

export const createNewOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Order = new OrderModel(req.body);
    await Order.save();
    await CartModel.deleteOne({ userId: req.body.userId });
    
    res
      .status(200)
      .json({ status: true, message: "Order created", order: Order });
  } catch (error) {
    next(error);
  }
};
