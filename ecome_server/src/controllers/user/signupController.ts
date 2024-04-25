import { NextFunction, Request, Response } from "express";
import { validateUserData } from "../../_lib/util/validateUserData";
import { HashPassword } from "../../_lib/util/hashUserPassword";
import UserModel from "../../models/user/UserModel";
import { generateToken } from "../../_lib/util/generateJWT";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body?.email) throw new Error("Pleae provide email ");
    if (!req.body?.password) throw new Error("Please provide password");
    let { email, password, name } = req.body;
    if (!validateUserData(email, password).valid) {
      throw new Error(validateUserData(email, password).message);
    }
    const emailExist = await UserModel.findOne({ email });
   
    if (emailExist) {
      throw new Error("User already exist with this email");
    }
    password = await HashPassword(password, 10);
    const newUser = new UserModel({
      email,
      password,
      name,
    });
    await newUser.save();
    const acessToken = generateToken({ userId: newUser._id });
    res.cookie(process.env.COOKIE_NAME as string, acessToken, {
      httpOnly: true,
      // secure: true,
      // sameSite: "strict", 
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ status: true, message: "Successfull", user: newUser });
  } catch (error) {
    next(error);
  }
};
