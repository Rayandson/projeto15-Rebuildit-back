import { cartCollection } from "../database/db.js";
export async function InserttoCart(req, res){
    const item = req.body
    try {
        await cartCollection.insertOne(item)
        res.send(200).status({message:"Item adicionado ao Carrinho com sucesso!"})
    } catch (err) {
        const errors = err.details.map ((detail)=> detail.message);
        return res.status(400).send(errors);
    }
}