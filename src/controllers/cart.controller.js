import { cartCollection } from "../database/db.js";
export async function InserttoCart(req, res){
    const item = req.body
    try {
        await cartCollection.insertOne(item)
        res.send(200).status({message:"Item adicionado ao Carrinho com sucesso!"})
        return
    } catch (err) {
        return res.sendStatus(500)
    }
}