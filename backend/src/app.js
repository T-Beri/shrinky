import express from "express";
import {nanoid} from "nanoid";

const app = express();

app.post("/api/create",(req,res)=>{
    const url = req.query.url;
    console.log("your url is:",url); 
    res.send(nanoid(7));
});



app.listen(3001,()=>{
    console.log("Listening on port 3000");
})
