import {registerUser,loginUser} from "../services/authService.js"
import { cookieOptions } from "../config/cookieOptions.js"

export const register = async(req,res,next) =>{
    
    try{
        
        const {name,email,password} = req.body;
        const {token,refreshToken} = await registerUser(name,email,password);
        console.log("registered");
        res.cookie("accessToken",token,cookieOptions);
        res.cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: 1000*60*60*24*7 });
        res.status(200).json({message:"User registration successful"});
    }catch(error){
        next(error);
        console.log(error.message); 
    }
    
}

export const login = async(req,res,next) =>{
    try{
        const {email,password} = req.body;
        const {token,refreshToken} = await loginUser(email,password);
        res.cookie("accessToken",token,cookieOptions); //this just sends the cookie
        res.cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: 1000*60*60*24*7 });
        res.status(200).json({message:"Login successful"}); //this actually sends the response
    }catch(error){
        next(error);
        console.log(error.message); 
    }
    
}