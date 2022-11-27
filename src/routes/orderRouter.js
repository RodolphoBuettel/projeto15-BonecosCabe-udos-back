import {Router} from 'express';
import {createCart, findCart} from '../controllers/cartController.js';
import {authRoutesValidation} from "../middlewares/authValidationMiddleware.js";
import {cartSchemaValidation} from "../middlewares/cartMiddleware.js";

const router = Router();

router.post("/cart", authRoutesValidation, cartSchemaValidation, createCart);
router.get("/cart", authRoutesValidation, findCart);
router.post("/checkout");

export default router;