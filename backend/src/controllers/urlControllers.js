import { saveShortUrl } from "../daos/saveShortUrl.js";
import { NotFoundError, UnauthorizedError } from "../middleware/errorHandler.js";
import { shortUrlServiceWithOutUser, getFullUrl, getCustomShortUrl } from "../services/shortUrlService.js";


export async function createUrl(req,res,next){
    try{
        const {url} = req.body; 
    
        const shortend = await shortUrlServiceWithOutUser(url);
        
        res.status(201).json({
            message:"Short url created successfully.",
            shortUrl:process.env.APP_URL+shortend
        });
        
    }catch(error){
        next(error);
        //res.status(500).json({message:"There was a problem in creating the shortened url."}); //every request handler must send back a response or the client will hang
        console.log(error.message); 
    }
}

export async function retrieveUrl(req,res,next){
    try{
        const shortU = req.params.shortUrl;
        const doc = await getFullUrl(shortU); 
        if(doc){
            res.redirect(doc.full_url);
        }else{
            next(new NotFoundError());
        }
    }
    catch(error){
        next(error);
    }
    
}
//errors thrown in async functions are handled by node not express since they are seen as rejected promises


export async function createCustomUrl(req,res,next){
    try{
        const {url,customUrl} = req.body;
        const user = req.user;
        if(user==null){
            next(new UnauthorizedError());
            console.log("Unauthorized");
        }
        if(customUrl==null || await getCustomShortUrl(customUrl)){
            throw new Error("Enter a valid url");
        }
        await saveShortUrl(url,customUrl,user._id);
        res.status(201).json({
            message:"Short url created successfully.",
            shortUrl:process.env.APP_URL+customUrl
        });
    }catch(error){
        next(error);
        console.log(error.message);
    }
}
