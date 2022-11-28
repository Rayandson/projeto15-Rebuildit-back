import { Router } from "express";
import { InserttoCart } from "../controllers/cart.controller.js";
import { cartSchemaValidation } from "../middlewares/cartValidation.Middleware.js";

const router = Router()

router.post("/cart", cartSchemaValidation, InserttoCart);

export default router;