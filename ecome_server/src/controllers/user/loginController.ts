import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/user/UserModel";
import bcrypt from "bcrypt";
import { generateToken } from "../../_lib/util/generateJWT";
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      throw new Error("User not registered");
    }

    if (!userExist.status) {
      throw new Error("Your Permission has been denied by admin");
    }
    const passCompare = await bcrypt.compare(password, userExist.password);
    if (!passCompare) {
      throw new Error("User not registered");
    }

    const acessToken = generateToken({
      userId: userExist._id,
      role: userExist.role,
    });
    res.cookie(process.env.COOKIE_NAME as string, acessToken, {
      httpOnly: true,
      //   secure: true,
      //   sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({
        status: true,
        message: "Succesfull",
        user: userExist,
        role: userExist.role,
      });
  } catch (error) {
    next(error);
  }
};
