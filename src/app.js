import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./routes/productsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(productsRouter);

app.listen(process.env.PORT, () => console.log(`Server running in port: ${process.env.PORT
}`));