import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";


dotenv.config("./.env");

const app = express();

app.use(express.json()); //without this req.body will be undefined

connectDB();

app.use("/api/url",urlRoutes);



app.listen(3001,()=>{
    console.log("Listening on port 3001");
})
