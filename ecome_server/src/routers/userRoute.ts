import { Router } from "express";
import { signupUser } from "../controllers/user/signupController";
import { loginUser } from "../controllers/user/loginController";

const userRouter = Router();

userRouter.route("/user").post(signupUser);
userRouter.post("/login", loginUser);

export default userRouter;
