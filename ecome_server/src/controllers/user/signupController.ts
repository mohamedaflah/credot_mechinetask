import { NextFunction, Request, Response } from "express";
import { validateUserData } from "../../_lib/util/validateUserData";
import { HashPassword } from "../../_lib/util/hashUserPassword";
import UserModel from "../../models/user/UserModel";
import { generateToken } from "../../_lib/util/generateJWT";

export const SignupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { email, password, name } = req.body;
    if (!validateUserData(email, password).valid) {
      throw new Error(validateUserData(email, password).message);
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
      secure: true,
      sameSite: "strict", // or 'lax' depending on your needs
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ status: true, message: "Successfull", user: newUser });
  } catch (error) {
    next(error);
  }
};
