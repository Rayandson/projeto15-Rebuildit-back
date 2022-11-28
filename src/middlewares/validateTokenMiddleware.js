import { sessionsCollection, usersCollection } from "../database/db.js";

export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "")

    if(!token) {
        return res.sendStatus(409)
    }
    try{
        const session = await sessionsCollection.findOne({token})
        if (!session){
            return res.sendStatus(404)
        }
        const user = await usersCollection.findOne({_id: session?.userId})
        if (!user){
            return res.sendStatus(404)
        }
        res.locals.user = user;
        res.locals.token = token;
    } catch (err) {
        res.sendStatus(500);
    }
    next()
}