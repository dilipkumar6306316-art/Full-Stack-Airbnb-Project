// External Module
const express = require("express");
const authRouter = express.Router();

// Local Module
const authController = require("../controllers/authController");

authRouter.get("/login", authController.getLogin);

authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);

authRouter.post("/signup", authController.postSignup);


authRouter.get("/signup", authController.getSignup);



module.exports = authRouter;