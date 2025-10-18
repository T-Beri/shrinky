import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import {retrieveUrl} from "./controllers/urlControllers.js";
import { ErrorHandler } from "./middleware/errorHandler.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { checker } from "./controllers/authController.js";

dotenv.config("./.env");

const app = express();

app.use(express.json()); //without this req.body will be undefined
app.use(cookieParser());

if(process.env.NODE_ENV!=="production"){
    app.use(cors({
        origin:"http://localhost:5173",
        credentials: true,
    }))
}

connectDB();
app.get("/api/auth/check",authMiddleware,checker);
app.use("/api/auth",authRoutes);
app.use("/api/url",authMiddleware,urlRoutes);
app.get("/:shortUrl",retrieveUrl);

app.use(ErrorHandler); //keep error handler after all routes


app.listen(3001,()=>{
    console.log("Listening on port 3001");
})
