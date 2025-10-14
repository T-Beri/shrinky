import { findUserViaId } from "../daos/userDao.js";
import { verifyToken } from "../utils/jwtGen.js";

export const authMiddleware = async(req,res,next)=>{
    try{
        const token = req.cookies.accessToken;
        if(!token){
            
            next();
        }

        else{
            
            const decoded = verifyToken(token);
            const user = await findUserViaId(decoded.id);
            if(!user){
                return res.status(401).json({message:"Unauthorized"});
            }
            req.user = user;
        }
        next();
    }catch(error){
        
        console.error(error);
        next();
    }
}