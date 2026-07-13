import { Router } from "express";
import { registerValidator } from "../validators/user.validtor.js";
import { registerUser, loginUser, googleCallback } from "../controllers/auth.controller.js";
import { loginValidator } from "../validators/login.validtor.js";
import passport from "passport";
const authRouter = Router();

authRouter.post("/register", registerValidator, registerUser);
authRouter.post("/login", loginValidator, loginUser);
/**
 *
 *google auth routes
 */
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
// callback route that google will redirect to after authentication
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback,
);
export default authRouter;
