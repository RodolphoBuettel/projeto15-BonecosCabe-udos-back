import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./routes/productsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(productsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`)); 

