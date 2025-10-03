import { ConflictError } from "../middleware/errorHandler.js";
import shortUrl from "../models/urlShorten.js";

export async function saveShortUrl(url,short,userId) {
    try{
        const doc = new shortUrl({
            full_url:url,
            short_url:short});
        if(userId){
            doc.user = userId;
        }
        await doc.save();
    }catch(error){
        
        console.log(error);
        if(error.code == 11000){
            throw new ConflictError(error);
        }
        
        throw new Error(error);
    }
}