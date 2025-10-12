import { NotFoundError } from "../middleware/errorHandler.js";
import { shortUrlServiceWithOutUser, getFullUrl } from "../services/shortUrlService.js";


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
