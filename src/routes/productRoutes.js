import { Router } from "express";
import { getProducts, postPurchases } from "../controllers/store.controllers.js";
import {validateToken} from "../middlewares/validateTokenMiddleware.js";

const router = Router()

router.get("/products", getProducts)

router.post("/purchases", validateToken, postPurchases)
export default router;