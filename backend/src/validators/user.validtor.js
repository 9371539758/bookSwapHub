import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  // body("location.city")
  //   .notEmpty()
  //   .withMessage("City is required"),

  // body("location.state")
  //   .notEmpty()
  //   .withMessage("State is required"),

  // body("location.country")
  //   .notEmpty()
  //   .withMessage("Country is required"),


body("phone")
  .trim()
  .notEmpty()
  .withMessage("Phone number is required")
  .isMobilePhone("en-IN")
  .withMessage("Enter a valid Indian phone number"),

  // Validation handler
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];