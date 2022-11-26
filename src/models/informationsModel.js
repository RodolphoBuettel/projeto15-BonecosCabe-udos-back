import joi from "joi";

export const informationSchema = joi.object({
email: joi.string().email().required().min(3),
name:  joi.string().required().min(3),
lastName: joi.string().required().min(3),
country: joi.string().required().min(2),
city: joi.string().required().min(2),
address: joi.string().required().min(10),
numberCard: joi.string().required().min(12).max(12),
nameCard: joi.string().required().min(5),
validity: joi.string().required().min(5).max(5),
securityCode: joi.string().required().min(3).max(3)
});