import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js";
import confirmRouter from "./routes/confirmRouter.js";
import orderRouter from "./routes/orderRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(productsRouter);
app.use(confirmRouter);
app.use(orderRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`)); 

