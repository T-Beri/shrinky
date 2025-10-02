import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error in connecting", error);
        process.exit(1); //exit the program immediately with error code 1
    }
}
//export {connectDB};