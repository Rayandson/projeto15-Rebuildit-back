import { itemSchema } from "../models/cart.model.js";

export async function cartSchemaValidation(req, res, next){
    const item = req.body;
    const {error} = itemSchema.validate (item, {abortEarly:false})
    if (error){
        const errors = error.details.map((detail) => detail.message);
        res.status(400).send(errors);
        return
    }
    next();
}