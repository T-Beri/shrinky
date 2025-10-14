import { ConflictError } from "../middleware/errorHandler.js";
import userModel from "../models/user_model.js";

export const findUserViaEmail = async(email)=>{
    const doc = await userModel.findOne({email:email});
    return doc;
}

export const findUserViaId = async(id)=>{
    const doc = await userModel.findOne({_id:id});
    return doc;
}

export const saveUser = async(name,email,password)=>{
    try{
        const doc = new userModel({
            name: name,
            email:email,
            password:password,
            
        });
        
        await doc.save();
        return doc;
    }catch(error){
        
        console.log(error);
        if(error.code == 11000){
            throw new ConflictError(error);
        }
        
        throw new Error(error);
    }
}
