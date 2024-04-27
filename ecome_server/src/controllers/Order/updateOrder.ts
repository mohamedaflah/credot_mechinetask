import { NextFunction, Request, Response } from "express";
import OrderModel from "../../models/Orders/OrderModel";

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderId, data } = req.body;
    await OrderModel.updateOne({ _id: orderId }, { $set: { ...data } });
    const order = await OrderModel.findOne({ _id: orderId });
    res.status(200).json({ status: true, message: "Succesfull", order });
  } catch (error) {
    next(error);
  }
};
