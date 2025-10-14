import {saveUser,findUserViaEmail } from "../daos/userDao.js";
import { createToken } from "../utils/jwtGen.js";

export const registerUser = async(name,email,pass)=>{
   
        const user = await findUserViaEmail(email);
        if(user){
            throw new Error("Email already in use");
        }


        const newUser = await saveUser(name,email,pass);
        const token = createToken(newUser._id)
        return token;
   
    
}

export const loginUser = async(email,pass) =>{
    
        const user = await findUserViaEmail(email);

        if(user==null || user.password.trim()!==pass.trim()){
            throw new Error("Invalid credentials");
        }
        else{
        
            const token = createToken(user._id);
            return token;
        
        }
}