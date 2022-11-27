import { Router } from "express";
import { getProducts } from "../controllers/store.controllers.js";

const router = Router()

router.get("/products", getProducts)
export default router;