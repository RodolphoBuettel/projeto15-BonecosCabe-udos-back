import {Router} from 'express';
import {signUp, signIn} from '../controllers/authControllers.js';
import {userSchemaValidation, signInBodyValidation} from "../middlewares/authValidationMiddleware.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;
