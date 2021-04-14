import Router from "express";
import categoryValidators from "./validators";
import { categoryController } from "../../controllers";
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
  .post("/create", categoryValidators.createValidator, categoryController.categoryCreate);

export default router;
