import { Router } from "express";
import { getProducts } from "../controllers/store.controllers.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";

const router = Router()

router.use(validateToken)

router.get("/products", getProducts)
export default router;