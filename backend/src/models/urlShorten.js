import mongoose from "mongoose";

const urlShorten = new mongoose.Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    clicks:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const shortUrl = mongoose.model("shortUrl",urlShorten);
export default shortUrl;