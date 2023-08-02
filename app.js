import express from "express";
import { connectToDb } from "./config/database.js";
import cors from "cors"
import dotenv from "dotenv"
const app = express();

dotenv.config({ path: "config/config.env" })
connectToDb();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get(("/"), (req, res) => {
//    res.send("<h1> Working Fine </h1>")
// })


// Deploy Only
import path from "path";
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./client/build")))    // deploy only

app.get('/', async (req, res) => {
   res.sendFile(path.join(__dirname, './client/build/index.html'));
});


// Importing Routes

import paymentRoute from "./routes/payment.js"
app.use("/api/v1", paymentRoute)



export default app;