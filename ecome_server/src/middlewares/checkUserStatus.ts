import { NextFunction, Request, Response } from "express";
import { getPayloadFromJWT } from "../_lib/util/getPayloadFromJwt";
import UserModel from "../models/user/UserModel";

export const checkUserBlockStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies[process.env.COOKIE_NAME as string];
  console.log("🚀 ~ token:", token);
  if (token) {
    const { userId } = getPayloadFromJWT(token);
    console.log("🚀 ~ userId:", userId);
    const user = await UserModel.findById(userId);
    if (!user?.status) {
      res.clearCookie(process.env.COOKIE_NAME as string)
      res
        .status(200)
        .json({
          status: true,
          user: null,
          message: "Your Permission Denied by Admin",
        });
    } else {
      next();
    }
  } else {
    next();
  }
};
