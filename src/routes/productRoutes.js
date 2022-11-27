import { Router } from "express";
import { getProducts } from "../controllers/store.controller";

const router = Router()

router.get("/store", getProducts)
 
export default router;