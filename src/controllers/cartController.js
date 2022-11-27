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

  try {
    const cart = await carts
      .findOne({ user: user._id })
      .toArray().sort({ datetime: -1});

    
    res.send({ cart });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}