import Router from "express";
import userValidators from "./validators";
import { userController } from "../../controllers";
import { handleResponse } from "../../utils/handler";
const router = Router();
router.get(
  "/",
  handleResponse(async (res, req, next) => {
    console.log("suppppp");
    return { hello: "world" };
  })
);

router
  .post("/signup", userValidators.signupValidator, userController.userSignup)
  .post("/login", userValidators.loginValidator, userController.userLogin);

export default router;
