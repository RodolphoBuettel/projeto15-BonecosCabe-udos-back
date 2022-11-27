import { carts } from "../database/db.js";

export async function createCart(req, res) {
  const cart = res.locals.cart;

  try {
    await carts.insertOne(cart);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findCart(req, res) {
  const user = res.locals.user;

  console.log("User do findcart: "+user);

  try {
    const cart = await carts
      .findOne({ userId: user._id });

    console.log(cart);
    res.send({ cart });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}