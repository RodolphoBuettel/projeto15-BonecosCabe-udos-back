import { carts, users } from "../database/db.js";
import { userSchema } from "../models/usersModel.js";
import { cartSchema } from "../models/cartModel.js";


export function cartSchemaValidation(req, res, next) {
  const cart = req.body;
  const user = res.locals.user;

  const newCart = {
    items: cart,
    userId: user._id,
  }

  const { error } = cartSchema.validate(newCart, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    console.log("api: parei na validação do schemacart ")
    return res.status(400).send(errors);
  }

  res.locals.cart = newCart;

  next();
}

