import { NextFunction, Request, Response } from "express";

export const logoutUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[process.env.COOKIE_NAME as string];
    if (!token) {
      throw new Error("Somehting went wrong");
    }
    res.clearCookie(process.env.COOKIE_NAME as string);
    res
      .status(200)
      .json({
        status: true,
        message: "Cookie cleared",
        user: null,
        role: null,
      });
  } catch (error) {
    next(error);
  }
};
