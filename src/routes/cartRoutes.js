import { Router } from "express";
import { InserttoCart } from "../controllers/cart.controller.js";
import { cartSchemaValidation } from "../middlewares/cartValidation.Middleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";

const router = Router()

router.use(validateToken)

router.post("/cart", cartSchemaValidation, InserttoCart);

export default router;