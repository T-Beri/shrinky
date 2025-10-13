import {saveUser,findUserViaEmail } from "../daos/userDao.js";
import jwt from "jsonwebtoken";
import User from "../models/user_model.js";
import { createToken } from "../utils/jwtGen.js";

export const registerUser = async(name,email,pass)=>{
    const user = await findUserViaEmail(email);
    if(user){
        throw new Error("Email already in use");
    }


    const newUser = await saveUser(name,email,pass);
    const token = await createToken(newUser._id)
    return token;
}