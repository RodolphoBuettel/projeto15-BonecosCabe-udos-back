import { sessions, users } from "../database/db.js"
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
  const user = res.locals.user;
  const passwordHash = bcrypt.hashSync(user.password, 10);

  try {
    await users.insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const user = res.locals.user;
  
  const token = uuidV4();

  delete user.password;
  
  try {
    await sessions.insertOne({ token, userId: user._id });
    res.send({ token, user });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

