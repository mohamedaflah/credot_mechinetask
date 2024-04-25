import { Router } from "express";

const userRouter = Router();

userRouter.route("/user");
userRouter.post("/login");

export default userRouter;
