import Joi from "joi";

export const itemSchema = Joi.object({
    item: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    img: Joi.string().required(),
})