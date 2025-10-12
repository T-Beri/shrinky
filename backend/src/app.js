import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import {retrieveUrl} from "./controllers/urlControllers.js";
import { ErrorHandler } from "./middleware/errorHandler.js";
import cors from "cors";

dotenv.config("./.env");

const app = express();

app.use(express.json()); //without this req.body will be undefined

if(process.env.NODE_ENV!=="production"){

    app.use(cors({
        origin:"http://localhost:5173"
    }))
}

connectDB();

app.use("/api/url",urlRoutes);
app.get("/:shortUrl",retrieveUrl);

app.use(ErrorHandler); //keep error handler after all routes


app.listen(3001,()=>{
    console.log("Listening on port 3001");
})
