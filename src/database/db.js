import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
    await mongoClient.connect();
    db = mongoClient.db("Rebuildit");
    } catch {
    console.log("Erro na conexão com o servidor");
    }

    export const usersCollection = db.collection("users")
    export const sessionsCollection = db.collection("sessions")
    export const productsCollection = db.collection("products")
    export const purchasesCollection = db.collection("purchases")