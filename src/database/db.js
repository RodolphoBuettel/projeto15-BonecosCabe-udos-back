import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const mongoClient = new MongoClient(process.env.MONGO_URI);
const mongoClient = new MongoClient("mongodb+srv://admin:admin@store.ghxwrzw.mongodb.net/?retryWrites=true&w=majority");


try {
    await mongoClient.connect();
    console.log("MongoDB conected");
} catch (err) {
    console.log("Erro no mongo.conect", err.message);
}

const db = mongoClient.db("bonecosCabecudos");
export const products = db.collection("products");
export const users = db.collection("users");
export const sessions = db.collection("sessions");
export const finishOrders = db.collection("finishOrders");
