import genNanoId from "../utils/shortUrlGen.js";
import {saveShortUrl} from "../daos/saveShortUrl.js";

export async function shortUrlServiceWithOutUser(url){
   
    const short = genNanoId(7);
    await saveShortUrl(url,short);
    return short; 
}

export async function shortUrlServiceWithUser(url,userId){
   
    const short = genNanoId(7);
    await saveShortUrl(url,short,userId);
    return short; 
}