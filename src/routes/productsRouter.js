import { Router } from "express";
import { authRoutesValidation } from "../middlewares/authValidationMiddleware.js";
import registeredProducts from "../controllers/productsControllers.js";

const router = Router();

router.get("/products", authRoutesValidation, registeredProducts);

export default router;