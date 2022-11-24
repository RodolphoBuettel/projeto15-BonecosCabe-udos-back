import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const mongoClient = new MongoClient(process.env.MONGO_URI);
const mongoClient = new MongoClient("mongodb://localhost:27017");


try {
    await mongoClient.connect();
    console.log("MongoDB conected");
} catch (err) {
    console.log("Erro no mongo.conect", err.message);
}

const db = mongoClient.db("bonecosCabecudos");
export const products = db.collection("products");
