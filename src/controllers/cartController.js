import { carts } from "../database/db.js";

export async function createCart(req, res) {
  const cart = {
    ...res.locals.cart,
    status: "open"
  } 
  

  try {
    await carts.insertOne(cart);
    res.sendStatus(201);
    console.log("api: criou carrinho")
  } catch (err) {
    console.log(err);
    console.log("api: não conseguiu criar carrinho")
    res.sendStatus(500);
  }
}

export async function findCart(req, res) {
  const user = res.locals.user;

  console.log(" api: User do findcart: "+user);

  try {
    const cart = await carts
      .findOne({ userId: user._id, status: "open" });

    console.log(cart);
    res.send({ cart });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateCart(req, res) {
  const newCart = res.locals.cart;
  console.log(newCart)

  try {
    const cart = await carts
      .findOne({ userId: newCart.userId, status: "open" });

      if (!cart) {
        console.log("api: mandando para criar cart, não achou para atualizar");
        createCart(req,res);
        return;
      }
  
      await carts.updateOne(
        { _id:  cart._id},
        { $set: { items: newCart.items } }
      );
    console.log("api: Atualizou o carrinho.")
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    console.log("api: Erro na atualização do cart");
    res.sendStatus(500);
  }
}

export async function closeCart(req, res) {
  const user = res.locals.user;

  console.log("api: User do findcart: "+user);

  try {
    const cart = await carts
      .findOne({ userId: user._id, status: "open" });

      if (!cart) {
        console.log("api: Não achou cart limpar")
        return res.sendStatus(404);
      }
  
      await carts.updateOne(
        { _id:  cart._id},
        { $set: { status: "closed" } }
      );

    res.sendStatus(200);
    console.log("api: limpeza do cart");
  } catch (err) {
    console.log(err);
    console.log("api: Erro na  limpeza do cart")
    res.sendStatus(500);
  }
}

export async function deleteCart(req, res) {
  const user = res.locals.user;

  console.log("api: User do findcart: "+user);

  try {
    const cart = await carts
      .findOne({ userId: user._id, status: "open" });

      if (!cart) {
        console.log("api: Não achou cart para apagar")
        return res.sendStatus(404);
      }
  
      await carts.deleteOne({_id: cart?._id})

    res.sendStatus(200);
    console.log("api: limpeza do cart");
  } catch (err) {
    console.log(err);
    console.log("api: Erro na  limpeza do cart")
    res.sendStatus(500);
  }
}
