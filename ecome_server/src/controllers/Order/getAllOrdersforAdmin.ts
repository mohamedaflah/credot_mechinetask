import { NextFunction, Request, Response } from "express";
import { getAllOrders } from "./getAllOrdrs";

export const getAllOrdersForAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getAllOrders();
   
    res.status(200).json({ status: true, message: "Succesfull", orders });
  } catch (error) {
    next(error);
  }
};
