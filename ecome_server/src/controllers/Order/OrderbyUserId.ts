import { NextFunction, Request, Response } from "express";
import { getOrdersByUserId } from "./getOrderByUserId";

export const ordersgetByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await getOrdersByUserId(req.body.userId);
    res.status(200).json({ status: true, message: "Successfull", order });
  } catch (error) {
    next(error);
  }
};
