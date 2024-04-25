import { NextFunction, Request, Response } from "express";
import { getPayloadFromJWT } from "../../_lib/util/getPayloadFromJwt";
import UserModel from "../../models/user/UserModel";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserModel.find({ role: "user" });
    res.status(200).json({
      status: true,
      message: "Successful",
      users,
    });
  } catch (error) {
    next(error);
  }
};
