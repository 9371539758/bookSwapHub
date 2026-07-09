import { Router } from "express";
import { registerValidator } from "../validators/user.validtor.js";
import { registerUser , loginUser} from "../controllers/auth.controller.js";
import { loginValidator } from "../validators/login.validtor.js";
const authRouter = Router();


authRouter.post("/register",registerValidator,registerUser);
authRouter.post("/login",loginValidator,loginUser);
export default authRouter;