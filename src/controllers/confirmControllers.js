import { finishOrders } from "../database/db.js";
import { informationSchema } from "../models/informationsModel.js";


export async function confirmInformations(req, res) {
    const informations = req.body;
    const user = res.locals.user;
    const idUser = user._id;

    const { error } = informationSchema.validate(info, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }

    try {
        await finishOrders.insertOne({ ...informations, idUser });
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(409);
    }
}