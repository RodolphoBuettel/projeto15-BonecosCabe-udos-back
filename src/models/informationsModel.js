import joi from "joi";

export const informationSchema = joi.object({
    email: joi.string().email().required().min(3),
    name: joi.string().required().min(3),
    country: joi.string().required().min(3),
    city: joi.string().required().min(3),
    address: joi.string().required().min(3),
    items: joi.required(),
    paymentType: joi.string().required().min(3).valid("cartão de crédito")
});