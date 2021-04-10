import Router from "express";
import homeValidators from "./validators";
import { homeController } from "../../controllers";
import { handleResponse } from "../../utils/handler";
const router = Router();
router.get(
  "/",
  handleResponse(async (res, req, next) => {
    console.log("suppppp ya basha");
    return { hello: "world" };
  })
)
.get("/search", homeController.userSearch);

router
  .post("/createhome", homeValidators.createValidator, homeController.userCreate);

router
  .put("/join/:homeID", homeValidators.joinValidator, homeController.userJoin);

export default router;
