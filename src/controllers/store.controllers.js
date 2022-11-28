import { productsCollection, purchasesCollection } from "../database/db.js";

export async function getProducts(req, res){
    try {
        const renderProducts= await productsCollection.find({}).toArray()
        res.send(renderProducts)
    } catch (err) {
        const errors = err.details.map ((detail)=> detail.message);
        return res.status(400).send(errors);
    }
}

export async function postPurchases(req, res){
    try {
        await purchasesCollection.insertOne({user: req.body.user, purchases: req.body.purchases})
        res.sendStatus(200)
    } catch (err) {
        // const errors = err.details.map ((detail)=> detail.message);
        return res.status(400).send(err);
    }
}