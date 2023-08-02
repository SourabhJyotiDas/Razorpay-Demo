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

app.get(("/"), (req, res) => {
   res.send("<h1> Working Fine </h1>")
})
// app.get(("/"), (req, res) => {
//    res.send("<h1> Working Fine </h1>")
// })


// Importing Routes

import paymentRoute from "./routes/payment.js"
app.use("/api/v1", paymentRoute)



export default app;