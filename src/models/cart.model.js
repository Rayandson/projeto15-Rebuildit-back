import Joi from "joi";

export const itemSchema = Joi.object({
    item: Joi.string().required(),
    price: Joi.string().required(),
    quantity: Joi.string().required(),
    img: Joi.string().required(),
})