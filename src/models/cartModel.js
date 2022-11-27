import joi from "joi";

export const cartSchema = joi.object(({
  items: joi.array().required(),
  userId: joi.object().required(),
  datetime: joi.number().required()
}));
