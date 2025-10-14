import {registerUser} from "../services/authService.js"
import { cookieOptions } from "../config/cookieOptions.js"

export const register = async(req,res) =>{
    const {name,email,password} = req.body;
    const token = await registerUser(name,email,password);
    res.cookie("accessToken",token,cookieOptions)
    res.status(200).json({message:"Login successful"});
}

export const login = async(req,res) =>{
    const {email,password} = req.body;
    const token = await loginUser(email,password);
    
}