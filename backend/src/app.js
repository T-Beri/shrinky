import express from "express";
import dotenv from "dotenv";
import {nanoid} from "nanoid";
import {connectDB} from "./config/db.js";

dotenv.config("./.env");

const app = express();
connectDB();

app.post("/api/create",(req,res)=>{
    const url = req.query.url;
    console.log("your url is:",url); 
    res.send(nanoid(7));
});



app.listen(3001,()=>{
    console.log("Listening on port 3000");
})
