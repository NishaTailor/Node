const { Router } = require("express");
const {
  getusers,
  getuserById,
  createuser,
  deleteuser,
  updateuser,
  getLoginPage,
  getSignupPage,
  login,
} = require("../controllers/user.controller");

const userRoute = Router();

userRouter.get("/login", getLoginPage)
userRouter.get("/signup", getSignupPage)

userRoute.get("/", getusers);
userRoute.get("/:userId", getuserById);
userRoute.post("/", createuser);
userRoute.delete("/:userId", deleteuser);
userRoute.patch("/:userId", updateuser);
userRouter.post("/login",login)

module.exports = userRoute;