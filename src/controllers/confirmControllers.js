import { finishOrders } from "../database/db.js";
import { informationSchema } from "../models/informationsModel.js";


export async function confirmInformations(req, res) {
    const informations = req.body;
    const user = res.locals.user;
    const idUser = user._id;
    console.log(informations);

    const { error } = informationSchema.validate(informations, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }

    const orderPlaced = {
        informations,
        idUser
    }

    try {
        await finishOrders.insertOne(orderPlaced);
        res.sendStatus(201);
        console.log(finishOrders);
    } catch (err) {
        console.log(err);
        res.sendStatus(409);
    }
}