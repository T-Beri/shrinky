import genNanoId from "../utils/shortUrlGen.js";
import {saveShortUrl} from "../daos/saveShortUrl.js";
import shortUrl from "../models/urlShorten.js";

export async function shortUrlServiceWithOutUser(url){
   
    const short = genNanoId(7);
    if(!short){
        throw new Error("Short URL not generated");
    }
    await saveShortUrl(url,short);
    return short; 
}

export async function shortUrlServiceWithUser(url,userId){
   
    const short = genNanoId(7);
    if(!short){
        throw new Error("Short URL not generated");
    }
    await saveShortUrl(url,short,userId);
    return short; 
}

export async function getFullUrl(short){
    const doc = await shortUrl.findOneAndUpdate({short_url:short},{$inc:{clicks:1}}); //find returns an array so use findOne
    //mongoose queries return a promise so you await them
    return doc;
}