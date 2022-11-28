import joi from "joi";

export const cartSchema = joi.object(({
  items: joi.array().required(),
  userId: joi.object().required(),
  status: joi.string().valid("open", "closed"),
}));
