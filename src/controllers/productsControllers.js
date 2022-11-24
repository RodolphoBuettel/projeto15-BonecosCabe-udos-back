import { products } from "../database/db.js";

export default async function registeredProducts(req, res){
    try{
        const items = await products.find().toArray();
        console.log(items);
        res.send(items)
    }catch (err){
        console.log(err);
    }
}