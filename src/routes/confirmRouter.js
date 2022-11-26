import { Router } from "express";
import { confirmInformations } from "../controllers/confirmControllers.js";
import { authRoutesValidation } from "../middlewares/authValidationMiddleware.js";


const router = Router();

router.post("/finish", authRoutesValidation, confirmInformations);

export default router;