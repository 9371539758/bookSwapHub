
import { userModel } from "../model/user.model.js";
import { sendToken } from "../utils/sendToken.js";


// Register User
export const registerUser = async (req, res) => {
  console.log("REGISTER API HIT");
console.log(req.body);
  try {
    const { username, email, password, phone, location } = req.body;

    // Check if email or phone already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email or phone number.",
      });
    }

    // Create new user
    const user = await userModel.create({
      username,
      email,
      password,
      phone,
      location,
    });

    // Send JWT Token
   return sendToken(user, 201, res, "User registered successfully.");
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// login 

export const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;

    // Find user by email or username
    const user = await userModel
      .findOne({
        $or: [
          { email: login },
          { username: login },
        ],
      })
      .select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return sendToken(user, 200, res, "Logged in successfully.");
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const googleCallback = async(req,res) =>{
  console.log(req.user);
  res.redirect("http://localhost:5173/")
}