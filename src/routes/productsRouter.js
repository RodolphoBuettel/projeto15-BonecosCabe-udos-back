import { Router } from "express";
import registeredProducts from "../controllers/productsControllers.js";

const router = Router();

router.get("/products", registeredProducts);

export default router;