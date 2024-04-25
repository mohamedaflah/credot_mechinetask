import { NextFunction, Request, Response } from "express";
import { getPayloadFromJWT } from "../../_lib/util/getPayloadFromJwt";
import UserModel from "../../models/user/UserModel";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('()');
    
    if (!req.cookies[process.env.COOKIE_NAME as string]) {
      throw new Error("Token expired");
    }
    const payload = getPayloadFromJWT(
      req.cookies[process.env.COOKIE_NAME as string]
    );
    const userData = await UserModel.findById(payload.userId);
    res
      .status(200)
      .json({ status: true, message: "Succsfull", user: userData,role:userData?.role });
  } catch (error) {
    next(error);
  }
};
