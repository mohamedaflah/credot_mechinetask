import { NextFunction, Request, Response } from "express";
import OrderModel from "../../models/Orders/OrderModel";

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderId, data } = req.body;
    await OrderModel.updateOne({ _id: orderId }, { $set: data  });
    const order = await OrderModel.findOne({ _id: orderId });
    console.log(req.body,' ()()');
    
    res.status(200).json({ message: "Succesfull", order,orderId:orderId,status:order?.status });
  } catch (error) {
    next(error);
  }
};
