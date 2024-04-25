import { Router } from "express";
import { signupUser } from "../../controllers/user/signupController";
import { loginUser } from "../../controllers/user/loginController";
import { getUser } from "../../controllers/user/getUserController";
import { logoutUser } from "../../controllers/user/logoutUserController";
import { checkUserBlockStatus } from "../../middlewares/checkUserStatus";
import { getAllUsers } from "../../controllers/user/getAllUsers";
import { updateUserStatus } from "../../controllers/user/blockUser";

const userRouter = Router();

userRouter.route("/user").post(signupUser).get(checkUserBlockStatus, getUser).put(updateUserStatus);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/getAllusers", getAllUsers);

export default userRouter;
