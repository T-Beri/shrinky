import mongoose from "mongoose";
import md5 from "md5"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:false,
        default:function(){
            return getGravatarUrl(this.email)
        }
    }
})

function getGravatarUrl(email){
    const trimmedEmail = email.trim().toLowerCase();
    const hash = md5(trimmedEmail);
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=mp`;
    return gravatarUrl;
}

const User = mongoose.model("User",userSchema);
export default User