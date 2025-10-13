import { ConflictError } from "../middleware/errorHandler.js";
import User from "../models/user_model.js";
import userModel from "../models/user_model.js";

export const findUserViaEmail = async(email)=>{
    const doc = await userModel.findOne({email:email});
    return doc;
}

export const saveUser = async(name,email,password,avatar)=>{
    try{
        const doc = new userModel({
            name: name,
            email:email,
            password:password,
            avatar:avatar
        });
        
        await doc.save();
    }catch(error){
        
        console.log(error);
        if(error.code == 11000){
            throw new ConflictError(error);
        }
        
        throw new Error(error);
    }
}
