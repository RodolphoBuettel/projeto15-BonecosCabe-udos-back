import {Router} from 'express';
import {createCart, findCart, updateCart, closeCart, deleteCart} from '../controllers/cartController.js';
import {authRoutesValidation} from "../middlewares/authValidationMiddleware.js";
import {cartSchemaValidation} from "../middlewares/cartMiddleware.js";

const router = Router();

router.post("/cart", authRoutesValidation, cartSchemaValidation, createCart);
router.get("/cart", authRoutesValidation, findCart);
router.post("/update-cart", authRoutesValidation, cartSchemaValidation, updateCart);
router.post("/clear-cart", authRoutesValidation, closeCart);
router.delete("/cart", authRoutesValidation, deleteCart);
router.post("/checkout");

export default router;